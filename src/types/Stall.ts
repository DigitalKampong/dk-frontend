import Food from "./Food";
import HawkerCentre from "./HawkerCentre";

export default interface Stall {
  id: number;
  name: string;
  description: string;
  rating: number;
  contactNo: string;
  hawkerCentreId: number;
  createdAt: string;
  updatedAt: string;
  Products: Food[];
  HawkerCentre: HawkerCentre
}