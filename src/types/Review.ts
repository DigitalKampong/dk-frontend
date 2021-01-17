type Review = {
  rating: number;
  description: string;
  updatedAt?: Date;
  username?: string;
  id?: number;
};

export type ReviewTransferObject = {
  rating: number;
  description: string;
  updatedAt: string;
  User: { email: string };
  id: number;
};

export default Review;
