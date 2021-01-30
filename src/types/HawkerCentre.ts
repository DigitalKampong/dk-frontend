import Region from './Region';
import Stall from './Stall';

export default interface HawkerCentre {
  id: number;
  name: string;
  address: string;
  regionId: number;
  createdAt: string;
  updatedAt: string;
  Region: Region;
  Stalls: Stall[];
  bus: string;
  mrt: string;
  Images: [];
}
