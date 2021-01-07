import Category from "./Category";
import Food from "./Food";
import HawkerCentre from "./HawkerCentre";

export default interface Stall {
  id: number;
  name: string;
  description: string;
  contactNo: string;
  unitNo: string;
  hawkerCentreId: number;
  createdAt: string;
  updatedAt: string;
  Products: Food[];
  Images: string[];
  HawkerCentre: HawkerCentre;
  Reviews: any[];
  Categories: Category[];
  rating: number;
}