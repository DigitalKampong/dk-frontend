import Region from './Region';
import Stall from './Stall';

interface ImageData {
  downloadUrl: string;
  id: number;
  fileName: string;
}
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
  Images: ImageData[];
  lat: number;
  lng: number;
  isClosed: boolean;
}
