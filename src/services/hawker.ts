import Axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";
import API  from '../types/api';

/**
 * Get all hawkers from the backend (Public)
 * 
 * @method GET
 * @access Public
 */
export const getAllHawkers = async () => {
    return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.PRODUCTS)
    .catch(error => {
        throw error;
    });
};

/**
 * Get a single hawker from the backend (Public)
 * 
 * @method GET
 * @access Public
 * @param id Product ID
 */
export const getHawker = async (id:number) => {
    return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.PRODUCTS + id + "/")
    .catch(error => {
        throw error;
    })
}

/**
 * Create a new hawker and post it to the backend
 * 
 * @method POST
 * @access Public
 * @param data Data object containing details of the product
 */
export const createHawker= async (data: API) => {
    return await Axios.post(ENDPOINTS.BASE + ENDPOINTS.PRODUCTS, data["data"])
      .catch(error => {
        throw error;
      })
  }


/**
 * Delete a hawker
 * 
 * @method DELETE
 * @access Public
 * @param id Product ID
 */
export const deleteHawker= async (id: number) => {
    return await Axios.delete(ENDPOINTS.BASE + ENDPOINTS.PRODUCTS + id + "/")
      .catch(error => {
        throw error;
      })
  }

/**
 * Edit a hawker's details
 * 
 * @method PUT
 * @access Public
 * @param id Product ID
 * @param data Data object containing details of the product
 */
export const updateHawker = async (id: number, data: API) => {
    return await Axios.put(ENDPOINTS.BASE + ENDPOINTS + id + "/", data["data"])
      .catch(error => {
        throw error;
      })
  }