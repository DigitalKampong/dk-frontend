import Axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";
import API  from '../types/api';

/**
 * Get all stalls from the backend (Public)
 * 
 * @method GET
 * @access Public
 */
export const getAllStalls = async () => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.STALLS)
    .catch(error => {
      throw error;
    });
};

/**
 * Get a single stall from the backend (Public)
 * 
 * @method GET
 * @access Public
 * @param id Stall ID
 */
export const getStall = async (id: number) => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.STALLS + id + "/")
    .catch(error => {
      throw error;
    })
}

/**
 * Create a new stall and post it to the backend
 * 
 * @method POST
 * @access Public
 * @param data Data object containing details of the stall
 */
export const createStall = async (data: API) => {
  return await Axios.post(ENDPOINTS.BASE + ENDPOINTS.STALLS, data["data"])
    .catch(error => {
      throw error;
    })
}

/**
 * Delete a stall
 * 
 * @method DELETE
 * @access Public
 * @param id Stall ID
 */
export const deleteStall = async (id: number) => {
  return await Axios.delete(ENDPOINTS.BASE + ENDPOINTS.STALLS + id + "/")
    .catch(error => {
      throw error;
    })
}

/**
 * Edit a stall's details
 * 
 * @method PUT
 * @access Public
 * @param id Stall ID
 * @param data Data object containing details of the stall
 */
export const updateStall = async (id: number, data: API) => {
  return await Axios.put(ENDPOINTS.BASE + ENDPOINTS.STALLS + id + "/", data["data"])
    .catch(error => {
      throw error;
    })
}