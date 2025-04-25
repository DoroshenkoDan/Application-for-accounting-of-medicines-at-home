import { TCredentials } from './TUsers';

import { TTourist } from 'types/TTourist';

// 📌 Запит на реєстрацію туриста
export interface TRegisterTourist {
  user: TCredentials;
  first_name: string;
  last_name: string;
  birthday: string;
  phone: string;
}

// 📌 Список туристів (з пагінацією)
export interface TListTourists {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TTourist[];
}

// Оновлення даних туриста
export type TUpdateTourist = Pick<
  TTourist,
  'first_name' | 'last_name' | 'birthday' | 'phone'
>;

// Часткове оновлення даних туриста
export type TUpdateTouristPartial = Partial<TUpdateTourist>;
