// 📌 Базовий тип категорії
export interface TCategory {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  is_active: boolean;
  is_hidden: boolean;
}
