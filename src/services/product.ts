import Axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";

export const getAllProducts = async () => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.PRODUCTS)
    .catch(error => {
      throw error;
    });
};