export interface PropstackImage {
  original: string;
  big: string;
  medium: string;
  thumb: string;
}

export interface PropstackStatus {
  id: number;
  name: string;
  color: string;
}

export interface PropstackUnit {
  id: string;
  title: string;
  unit_id: string;
  street: string;
  house_number: string;
  zip_code: string;
  city: string;
  number_of_rooms: number;
  price: number;
  base_rent: number | null;
  living_space: number;
  plot_area: number | null;
  number_of_bed_rooms: number;
  number_of_bath_rooms: number;
  marketing_type: 'BUY' | 'RENT';
  rs_type: 'APARTMENT' | 'HOUSE' | 'LAND' | 'COMMERCIAL';
  rs_category: string;
  images: PropstackImage[];
  status: PropstackStatus;
  description_note: string;
  location_note: string;
  construction_year: number;
}

export interface PropstackResponse {
  data: PropstackUnit[];
  meta: {
    total_count: number;
  };
}
