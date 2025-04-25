import { TCategory } from './TCategory';
import { TUser } from './TUser';

// 📌 Базовий тип Таблетока
export interface TPill {
  id: number;
  owner: TUser;
  category: TCategory;
  slug: string;
  created_at: string;
  updated_at: string;
  rating: number;
  basic_information: TBasicInformation;
  housing_details: THousingDetails;
  facilities: TFacilities;
  additional_facilities: TAdditionalFacilities;
  description_glamp: TDescriptionGlamp;
  calendar_of_availability: TCalendarOfAvailability;
  seasons_of_the_year: TSeasonsOfTheYear;
  price_formation: TPriceFormation;
  priority: number;
  images: TImages;
  is_active: boolean;
  is_approved: boolean;
  is_draft: boolean;
  is_hidden: boolean;
  is_verified: boolean;
  preview_and_publish: TPreviewAndPublish;
  apartment: string;
  iron: boolean;
  vat: boolean;
  pets_farm: boolean;
  premium_level: number;
  riding: boolean;
  fishing: boolean;
  hiking_walking: boolean;
  swimming: boolean;
  boating: boolean;
  alpine_skiing: boolean;
  meditation_yoga: boolean;
  sports_area: boolean;
  events_excursions: boolean;
  national_park: boolean;
  sea: boolean;
  lake: boolean;
  stream: boolean;
  waterfall: boolean;
  thermal_springs: boolean;
  mountains: boolean;
  salt_caves: boolean;
  beautiful_views: boolean;
  no_kitchen: boolean;
  suitable_for_children: boolean;
  suitable_for_groups: boolean;
  can_order_transfer: boolean;
  title: string;
}

export interface TBasicInformation {
  name: string;
  capacity: number;
  status: number;
  zip_code: string;
  region: string;
  city: string;
  street: string;
  building_number: any;
  location_on_the_map: TLocationOnTheMap;
}

export interface TLocationOnTheMap {
  latitude: number;
  longitude: number;
}

export interface THousingDetails {
  glamp_type: number;
  guests: any;
  single_beds: any;
  double_beds: any;
  number_of_bedrooms: number;
  number_of_beds: number;
  number_of_bathrooms: number;
  territory_under_protection: boolean;
}

export interface TFacilities {
  facilities_for_guests: TFacilitiesForGuests;
  facilities_for_people_with_disabilities: TFacilitiesForPeopleWithDisabilities;
}

export interface TFacilitiesForGuests {
  heating_system: boolean;
  cooling_system: boolean;
  internet: boolean;
  laundry_services: boolean;
  tv: boolean;
  cot_for_babies: boolean;
  bathroom_in_room: boolean;
  kitchen_in_room: boolean;
  dining_area: boolean;
  barbecue_area: boolean;
  game_area: boolean;
  microwave: boolean;
  plate: boolean;
  refrigerator: boolean;
  kitchen_on_territory: boolean;
  breakfast_included: boolean;
  lunch_included: boolean;
  dinner_included: boolean;
  all_inclusive: boolean;
  room_service: boolean;
  bar: boolean;
  restaurant: boolean;
}

export interface TFacilitiesForPeopleWithDisabilities {
  without_thresholds: boolean;
  no_ladder: boolean;
  bath_with_handrails: boolean;
  toilet_with_handrails: boolean;
  shower_chair: boolean;
  suitable_for_guests_in_wheelchairs: boolean;
  room_on_first_flor: boolean;
}

export interface TAdditionalFacilities {
  workplace: boolean;
  pool: boolean;
  spa: boolean;
  jacuzzi: boolean;
  sauna: boolean;
  fireplace: boolean;
  gazebo: boolean;
  terrace: boolean;
  hammocks: boolean;
  garden_furniture: boolean;
  car_charging_station: boolean;
  place_for_car: boolean;
  projector_and_screen: boolean;
  area_for_events: boolean;
  cloakroom: boolean;
}

export interface TDescriptionGlamp {
  description: string;
  reviews: number;
  badge: string;
  checkin_time: any;
  checkout_time: any;
  allowed_with_animals: boolean;
  smoking_allowed: boolean;
  parties_allowed: boolean;
}

export interface TCalendarOfAvailability {
  instant_booking: boolean;
  reception_24: boolean;
  free_cancellation: boolean;
}

export interface TSeasonsOfTheYear {
  winter: boolean;
  spring: boolean;
  summer: boolean;
  autumn: boolean;
}

export interface TPriceFormation {
  earnings_owner: any;
  earnings_base_price: any;
  earnings_tourist_taxes: any;
  earnings_platform_fee: any;
  original_price: string;
  discount: number;
  actual_price: string;
}

export interface TImages {
  image: string;
  thumb: string;
  images_list: TImagesList;
  thumb_list: TThumbList;
}

export interface TImagesList {
  image_gallery_img_1: string;
  image_gallery_img_2: string;
  image_gallery_img_3: string;
  image_gallery_img_4: string;
}

export interface TThumbList {
  thumb_gallery_img_1: string;
  thumb_gallery_img_2: string;
  thumb_gallery_img_3: string;
  thumb_gallery_img_4: string;
}

export interface TPreviewAndPublish {
  terms_agreed: boolean;
}
