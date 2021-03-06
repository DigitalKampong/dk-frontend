interface ImageData {
  downloadUrl: string;
  id: number;
  fileName: string;
}

export default interface Food {
  description: string;
  id: number;
  name: string;
  price: number;
  stallId: number;
  createdAt: string;
  updatedAt: string;
  category?: string;
  Images: ImageData[];
}
