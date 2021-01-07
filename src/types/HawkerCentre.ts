import Region from "./Region";

export default interface HawkerCentre {
    id: number;
    name: string;
    address: string;
    regionId: number;
    latLng: string;
    createdAt: string;
    updatedAt: string;
    Region: Region;
}