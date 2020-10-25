import Axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";
import API  from '../types/api';

/**
 * Get all products from the backend (Public)
 * 
 * @method GET
 * @access Public
 */
export const getAllProducts = async () => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.PRODUCTS)
    .catch(error => {
      throw error;
    });
};

/**
 * Get a single product from the backend (Public)
 * 
 * @method GET
 * @access Public
 * @param id Product ID
 */
export const getProduct = async (id: number) => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.PRODUCTS + id + "/")
    .catch(error => {
      throw error;
    })
}

/**
 * Create a new product and post it to the backend
 * 
 * @method POST
 * @access Public
 * @param data Data object containing details of the product
 */
export const createProduct = async (data: API) => {
  return await Axios.post(ENDPOINTS.BASE + ENDPOINTS.PRODUCTS, data["data"])
    .catch(error => {
      throw error;
    })
}

/**
 * Delete a product
 * 
 * @method DELETE
 * @access Public
 * @param id Product ID
 */
export const deleteProduct = async (id: number) => {
  return await Axios.delete(ENDPOINTS.BASE + ENDPOINTS.PRODUCTS + id + "/")
    .catch(error => {
      throw error;
    })
}

/**
 * Edit a product's details
 * 
 * @method PUT
 * @access Public
 * @param id Product ID
 * @param data Data object containing details of the product
 */
export const updateProduct = async (id: number, data: API) => {
  return await Axios.put(ENDPOINTS.BASE + ENDPOINTS + id + "/", data["data"])
    .catch(error => {
      throw error;
    })
}