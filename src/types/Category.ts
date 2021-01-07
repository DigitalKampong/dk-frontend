export default interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  CategoryStalls: CategoryStalls;
}

interface CategoryStalls {
  createdAt: string;
  updatedAt: string;
  stallId: number;
  categoryId: number;
}