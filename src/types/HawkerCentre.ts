import Region from './Region';
import Stall from './Stall';

export default interface HawkerCentre {
  id: number;
  name: string;
  address: string;
  regionId: number;
  createdAt: string;
  updatedAt: string;
  announcement: string;
  Region: Region;
  Stalls: Stall[];
  bus: string;
  mrt: string;
  Images: [];
  lat: number;
  lng: number;
  isClosed: boolean;
}
