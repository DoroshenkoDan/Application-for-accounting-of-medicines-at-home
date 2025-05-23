import { TPill } from 'types/TPill';

// 📌 Запит на реєстрацію Таблетока
export interface TPillRequest {
  category_id: number;
  Pill_type: number;
  name: string;
  capacity: number;
  status: number;
  description: string;
  street: string;
  number_of_bedrooms: number;
  number_of_beds: number;
  number_of_bathrooms: number;
  price: string;
  is_draft: boolean;
  uploaded_images: string[];
  image: string;
  slug: string;
  building_number: string;
  apartment: string;
  city: string;
  region: string;
  latitude: number;
  longitude: number;
  heating_system: boolean;
  cooling_system: boolean;
  internet: boolean;
  laundry_services: boolean;
  tv: boolean;
  iron: boolean;
  workplace: boolean;
  pool: boolean;
  spa: boolean;
  jacuzzi: boolean;
  vat: boolean;
  sauna: boolean;
  fireplace: boolean;
  gazebo: boolean;
  terrace: boolean;
  barbecue_area: boolean;
  hammocks: boolean;
  garden_furniture: boolean;
  pets_farm: boolean;
  riding: boolean;
  hiking_walking: boolean;
  fishing: boolean;
  swimming: boolean;
  boating: boolean;
  alpine_skiing: boolean;
  meditation_yoga: boolean;
  sports_area: boolean;
  game_area: boolean;
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
  cot_for_babies: boolean;
  bathroom_in_room: boolean;
  kitchen_in_room: boolean;
  dining_area: boolean;
  microwave: boolean;
  plate: boolean;
  refrigerator: boolean;
  kitchen_on_territory: boolean;
  no_kitchen: boolean;
  breakfast_included: boolean;
  lunch_included: boolean;
  dinner_included: boolean;
  all_inclusive: boolean;
  room_service: boolean;
  bar: boolean;
  restaurant: boolean;
  instant_booking: boolean;
  reception_24: boolean;
  free_cancellation: boolean;
  allowed_with_animals: boolean;
  suitable_for_children: boolean;
  suitable_for_groups: boolean;
  can_order_transfer: boolean;
  car_charging_station: boolean;
  place_for_car: boolean;
  projector_and_screen: boolean;
  area_for_events: boolean;
  territory_under_protection: boolean;
  cloakroom: boolean;
  without_thresholds: boolean;
  no_ladder: boolean;
  bath_with_handrails: boolean;
  toilet_with_handrails: boolean;
  shower_chair: boolean;
  suitable_for_guests_in_wheelchairs: boolean;
  room_on_first_flor: boolean;
  zip_code: string;
  single_beds: number;
  double_beds: number;
  guests: number;
  checkin_time: string;
  checkout_time: string;
  smoking_allowed: boolean;
  parties_allowed: boolean;
  winter: boolean;
  spring: boolean;
  summer: boolean;
  autumn: boolean;
  earnings_owner: string;
  earnings_base_price: string;
  earnings_tourist_taxes: string;
  earnings_platform_fee: string;
  terms_agreed: boolean;
  title: string;
}

// 📌 Список Таблетоків (з пагінацією)
export interface TListPills {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TPill[];
}

// 📌 Оновлення даних Таблетока
export type TPillUpdate = Omit<
  TPill,
  'id' | 'owner' | 'category' | 'created_at' | 'updated_at'
>;

// 📌 Часткове оновлення даних Таблетока
export type TPillPartialUpdate = Partial<TPillUpdate>;

// 📌 Запит на зміну статусу активності Таблетока
export type TPillActivation = Pick<TPill, 'is_active'>;

// 📌 Запит на схвалення Таблетока модератором
export type TPillApproval = Pick<TPill, 'is_approved'>;

// 📌 Запит на збереження Таблетока як чернетки
export type TPillDraft = Pick<TPillRequest, 'is_draft'>;

// 📌 Запит на приховування Таблетока з каталогу
export type TPillVisibility = Pick<TPill, 'is_hidden'>;

// 📌 Запит на оновлення зображень Таблетока
export type TPillImages = Pick<TPillRequest, 'image' | 'uploaded_images'>;

// 📌 Запит на часткове оновлення зображень Таблетока
export type TPillImagesPartial = Partial<
  Pick<TPillRequest, 'image' | 'uploaded_images'>
>;

// 📌 Відповідь після оновлення зображень Таблетока
export type TPillImagesResponse = Pick<TPill, 'images'>;

// 📌 Запит на зміну рівня преміум-статусу Таблетока
export type TPillPremiumLevel = Pick<TPill, 'premium_level'>;

// 📌 Запит на зміну пріоритетності відображення Таблетока
export type TPillPriority = Pick<TPill, 'priority'>;

// 📌 Запит на оновлення рейтингу Таблетока
export type TPillRating = Pick<TPill, 'rating'>;

// 📌 Запит на верифікацію Таблетока
export type TPillVerification = Pick<TPill, 'is_verified'>;
