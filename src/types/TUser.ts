// 📌 Базовий тип користувача
export interface TUser {
  id: number;
  email: string;
  role: number | null;
  is_active: boolean;
  is_staff: boolean;
  created_at: string;
  updated_at: string;
}
