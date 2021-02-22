import Food from './Food';
import HawkerCentre from './HawkerCentre';

interface ImageData {
  downloadUrl: string;
  id: number;
  fileName: string;
}

interface TimeSpan {
  allDay: boolean;
  closed: boolean;
  start: string;
  end: string;
}

export default interface Stall {
  id: number;
  name: string;
  hawkerCentreId: number;
  createdAt: string;
  updatedAt: string;
  Images: ImageData[];
  HawkerCentre: HawkerCentre;
  categories: string[];
  rating: number;
  description: string;
  contactNo: string;
  unitNo: string;
  Reviews: any[];
  Products: Food[];
  openingHours: Record<string, TimeSpan>;
}
