import { TPillOwner } from 'types/TPillOwner';

import { TCredentials } from './TUsers';

// 📌 Запит на реєстрацію туриста
export interface TRegisterPillOwner {
  user: TCredentials;
  first_name: string;
  last_name: string;
  phone: string;
}

// 📌 Список туристів (з пагінацією)
export interface TListPillOwners {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TPillOwner[];
}

export type TUpdatePillOwner = Pick<
  TPillOwner,
  | 'first_name'
  | 'last_name'
  | 'is_hidden'
  | 'is_verified'
  | 'vip_status'
  | 'phone'
>;

export type TUpdatePillOwnerPartial = Partial<TUpdatePillOwner>;
