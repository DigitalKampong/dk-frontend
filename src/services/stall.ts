import Axios from 'axios';
import { ENDPOINTS } from '../constants/endpoints';
import API from '../types/api';

/**
 * Get all stalls from the backend (Public)
 *
 * @param limit: Max No. of stalls returned
 * @param page: page
 * @method GET
 * @access Public
 */
export const getAllStalls = async (limit: number = 12, page: number = 1) => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.STALLS + '?limit=' + limit + '&page=' + page).catch((error) => {
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
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.STALLS + id + '/').catch((error) => {
    throw error;
  });
};

/**
 * Create a new stall and post it to the backend
 *
 * @method POST
 * @access Public
 * @param data Data object containing details of the stall
 */
export const createStall = async (data: API) => {
  return await Axios.post(ENDPOINTS.BASE + ENDPOINTS.STALLS, data['data']).catch((error) => {
    throw error;
  });
};

/**
 * Delete a stall
 *
 * @method DELETE
 * @access Public
 * @param id Stall ID
 */
export const deleteStall = async (id: number) => {
  return await Axios.delete(ENDPOINTS.BASE + ENDPOINTS.STALLS + id + '/').catch((error) => {
    throw error;
  });
};

/**
 * Edit a stall's details
 *
 * @method PUT
 * @access Public
 * @param id Stall ID
 * @param data Data object containing details of the stall
 */
export const updateStall = async (id: number, data: API) => {
  return await Axios.put(ENDPOINTS.BASE + ENDPOINTS.STALLS + id + '/', data['data']).catch((error) => {
    throw error;
  });
};

/**
 * Search for stalls with provided search query input
 *
 * @method GET
 * @access Public
 * @param query Search query
 * @param params Search params
 */
export const searchStall = async (query: string, params: string) => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.SEARCH + query + '?' + params).catch((error) => {
    throw error;
  });
};
