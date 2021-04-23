import Stall from './Stall';

export default interface Favourite {
  Stall: Stall;
	createdAt:string;
	updatedAt:string;
	id:number;
	userId:number;
	stallId: number;
}