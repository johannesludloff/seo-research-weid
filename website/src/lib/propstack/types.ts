export type PropstackMarketingType = "BUY" | "RENT";

export type PropstackRsType =
  | "APARTMENT"
  | "HOUSE"
  | "PLOT"
  | "OFFICE"
  | "SPECIAL_PURPOSE"
  | "OTHER";

export type PropstackRsCategory =
  | "PENTHOUSE"
  | "VILLA"
  | "DETACHED_HOUSE"
  | "SEMI_DETACHED_HOUSE"
  | "APARTMENT"
  | "MAISONETTE"
  | "TERRACED_HOUSE"
  | "LAND"
  | "OTHER";

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
  number_of_bed_rooms: number | null;
  number_of_bath_rooms: number | null;
  marketing_type: PropstackMarketingType;
  rs_type: PropstackRsType;
  rs_category: PropstackRsCategory;
  images: PropstackImage[];
  status: PropstackStatus;
  description_note: string;
  location_note: string;
  construction_year: number | null;
}

export interface PropstackUnitsResponse {
  data: PropstackUnit[];
  meta: {
    total_count: number;
  };
}
