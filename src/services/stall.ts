import Axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";

export const getAllStalls = async () => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.STORES)
    .catch(error => {
      throw error;
    });
};