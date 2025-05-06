export interface ProductType {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  price?: number;
  image: string;
  additionalImages?: string[];
  featured: boolean;
  category: string;
  categoryId: string;
  brandId: string;
  features?: string[];
  specifications?: Record<string, string>;
}