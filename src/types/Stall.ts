import Food from './Food';
import HawkerCentre from './HawkerCentre';

interface ImageData {
  downloadUrl: string;
  id: number;
  fileName: string;
}

export default interface TimeSpan {
  allDay: boolean;
  closed: boolean;
  start: string;
  end: string;
}

interface Category {
  id: number;
  name: string;
}

export default interface Stall {
  id: number;
  name: string;
  hawkerCentreId: number;
  createdAt: string;
  updatedAt: string;
  Images: ImageData[];
  HawkerCentre: HawkerCentre;
  categories: Category[];
  rating: number;
  description: string;
  contactNo: string;
  unitNo: string;
  Reviews: any[];
  Products: Food[];
  openingHours: Record<string, TimeSpan>;
  isFeatured: Boolean;
}
