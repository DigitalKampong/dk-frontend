interface CategoryStalls {
  createdAt: string;
  updatedAt: string;
  stallId: number;
  categoryId: number;
}

export default interface Category {
  name: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  CategoryStalls: CategoryStalls;
}
