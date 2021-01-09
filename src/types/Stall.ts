import Category from './Category';
import Food from './Food';
import HawkerCentre from './HawkerCentre';

export default interface Stall {
  id: number;
  name: string;
  hawkerCentreId: number;
  createdAt: string;
  updatedAt: string;
  Images: string[];
  HawkerCentre: HawkerCentre;
  Categories: string[] | Category[];
  rating: number;
  description: string;
  contactNo: string;
  unitNo: string;
  Reviews: any[];
  Products: Food[];
}
