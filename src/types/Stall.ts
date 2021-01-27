import Category from './Category';
import Food from './Food';
import HawkerCentre from './HawkerCentre';

interface ImageData {
  downloadUrl: string;
  id: number;
  fileName: string;
}

export default interface Stall {
  id: number;
  name: string;
  hawkerCentreId: number;
  createdAt: string;
  updatedAt: string;
  Images: ImageData[];
  HawkerCentre: HawkerCentre;
  Categories: Category[] | string[];
  rating: number;
  description: string;
  contactNo: string;
  unitNo: string;
  Reviews: any[];
  Products: Food[];
}
