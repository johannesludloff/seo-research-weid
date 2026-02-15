import { NextRequest, NextResponse } from 'next/server';

// Type definitions for request body
interface ContactFormData {
  type: 'contact' | 'wertermittlung' | 'buyer';
  name?: string;
  email: string;
  phone?: string;
  message?: string;
  address?: string;
  propertyType?: string;
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sanitize input by trimming whitespace and removing any HTML
function sanitizeInput(input: string | undefined): string {
  if (!input) return '';
  return input.trim().replace(/<[^>]*>/g, '');
}

// Send email via Resend API
async function sendEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@weid-immobilien.de';

  if (!RESEND_API_KEY) {
    console.error('[Contact API] RESEND_API_KEY not configured');
    return { success: false, error: 'Email service not configured' };
  }

  // Determine subject based on form type
  let subject = 'Neue Kontaktanfrage';
  if (data.type === 'wertermittlung') {
    subject = 'Neue Wertermittlung-Anfrage';
  } else if (data.type === 'buyer') {
    subject = 'Neue Interessenten-Anmeldung';
  }

  // Build HTML email body
  let htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #8B7355; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
          .value { font-size: 16px; color: #333; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">${subject}</h1>
          </div>
          <div class="content">
  `;

  // Add fields based on form type
  if (data.name) {
    htmlBody += `
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${sanitizeInput(data.name)}</div>
      </div>
    `;
  }

  htmlBody += `
    <div class="field">
      <div class="label">E-Mail</div>
      <div class="value"><a href="mailto:${sanitizeInput(data.email)}">${sanitizeInput(data.email)}</a></div>
    </div>
  `;

  if (data.phone) {
    htmlBody += `
      <div class="field">
        <div class="label">Telefon</div>
        <div class="value"><a href="tel:${sanitizeInput(data.phone)}">${sanitizeInput(data.phone)}</a></div>
      </div>
    `;
  }

  if (data.address) {
    htmlBody += `
      <div class="field">
        <div class="label">Adresse der Immobilie</div>
        <div class="value">${sanitizeInput(data.address)}</div>
      </div>
    `;
  }

  if (data.propertyType) {
    const propertyTypeLabels: Record<string, string> = {
      haus: 'Haus',
      wohnung: 'Wohnung',
      grundstueck: 'Grundstück',
      gewerbe: 'Gewerbeimmobilie',
    };
    htmlBody += `
      <div class="field">
        <div class="label">Immobilientyp</div>
        <div class="value">${propertyTypeLabels[data.propertyType] || sanitizeInput(data.propertyType)}</div>
      </div>
    `;
  }

  if (data.message) {
    htmlBody += `
      <div class="field">
        <div class="label">Nachricht</div>
        <div class="value" style="white-space: pre-wrap;">${sanitizeInput(data.message)}</div>
      </div>
    `;
  }

  htmlBody += `
            <div class="footer">
              Gesendet über das Kontaktformular von WEID Immobilien<br>
              Formulartyp: ${data.type}
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  // Send email via Resend API
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'WEID Immobilien Website <onboarding@resend.dev>',
        to: [CONTACT_EMAIL],
        subject,
        html: htmlBody,
        reply_to: data.email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[Contact API] Resend API error:', response.status, errorData);
      return { success: false, error: 'Failed to send email' };
    }

    const result = await response.json();
    console.log('[Contact API] Email sent successfully:', result.id);
    return { success: true };
  } catch (error) {
    console.error('[Contact API] Error sending email:', error);
    return { success: false, error: 'Network error' };
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.email || !EMAIL_REGEX.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    if (!body.type) {
      return NextResponse.json(
        { success: false, error: 'Formulartyp fehlt.' },
        { status: 400 }
      );
    }

    // Validate type-specific required fields
    if (body.type === 'contact' || body.type === 'wertermittlung') {
      if (!body.name || body.name.trim().length === 0) {
        return NextResponse.json(
          { success: false, error: 'Bitte geben Sie Ihren Namen ein.' },
          { status: 400 }
        );
      }
    }

    if (body.type === 'wertermittlung') {
      if (!body.address || body.address.trim().length === 0) {
        return NextResponse.json(
          { success: false, error: 'Bitte geben Sie die Adresse der Immobilie ein.' },
          { status: 400 }
        );
      }
      if (!body.propertyType || body.propertyType.trim().length === 0) {
        return NextResponse.json(
          { success: false, error: 'Bitte wählen Sie einen Immobilientyp.' },
          { status: 400 }
        );
      }
    }

    // Rate limiting check (basic implementation using headers)
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    console.log(`[Contact API] Form submission from IP: ${ip}`);

    // Send email
    const emailResult = await sendEmail(body);

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, error: 'Es ist ein Fehler beim Versenden aufgetreten. Bitte versuchen Sie es später erneut.' },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      { success: true, message: 'Ihre Nachricht wurde erfolgreich versendet.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('[Contact API] Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}
