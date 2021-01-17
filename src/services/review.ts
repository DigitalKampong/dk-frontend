import Axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";
import API from '../types/api';

export const getReviewForStall = async (id: number) => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.STALLS + id + "/" + ENDPOINTS.REVIEWS)
    .catch(error => {
      throw error;
    });
};

export const createReviewForStall = async (id: number, data: API) => {
  return await Axios.post(ENDPOINTS.BASE + ENDPOINTS.STALLS + id + "/" + ENDPOINTS.REVIEWS, data["data"], {
    headers: { 'x-auth-token': localStorage.getItem('authToken') }
  }).catch(error => {
    throw error;
  });
};

export const editReview = async (id: number, data: API) => {
  return await Axios.put(ENDPOINTS.BASE + ENDPOINTS.REVIEWS + id + "/", data["data"], {
    headers: { 'x-auth-token': localStorage.getItem('authToken') }
  }).catch(error => {
    throw error;
  });
}
