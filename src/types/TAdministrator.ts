import { TUser } from './TUser';

// 📌 Детальна інформація про Адміністратора
export interface TAdministrator {
  id: number;
  user: TUser;
  created_at: string;
  updated_at: string;
  first_name: string | null;
  last_name: string | null;
  status: number | null;
}
