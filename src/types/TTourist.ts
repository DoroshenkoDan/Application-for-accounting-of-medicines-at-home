import { TUser } from './TUser';

// 📌 Детальна інформація про туриста
export interface TTourist {
  id: number;
  user: TUser;
  created_at: string;
  updated_at: string;
  first_name: string | null;
  last_name: string | null;
  status: number | null;
  birthday: string | null;
  phone: string | null;
}
