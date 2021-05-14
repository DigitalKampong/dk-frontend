import Axios from 'axios';
import { ENDPOINTS } from '../constants/endpoints';

/**
 * Create favourites
 *
 * @method Post
 * @access Public
 * @param id Stall ID
 */

export const createFavourite = async (id: number) => {
  return await Axios.post(ENDPOINTS.BASE + ENDPOINTS.STALLS + id + '/' + ENDPOINTS.FAVOURITES, null, {
    headers: { 'x-auth-token': localStorage.getItem('authToken') },
  }).catch((error) => {
    throw error;
  });
};

/**
 * Get favourites
 *
 * @method GET
 * @access Public
 */
export const getFavourite = async () => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.FAVOURITES, {
    headers: { 'x-auth-token': localStorage.getItem('authToken') },
  }).catch((error) => {
    throw error;
  });
};

/**
 * Delete favourite
 *
 * @method DELETE
 * @access Public
 * @param id Favourite ID
 */
export const deleteFavourite = async (id: number) => {
  return await Axios.delete(ENDPOINTS.BASE + ENDPOINTS.FAVOURITES + id + '/').catch((error) => {
    throw error;
  });
};

/**
 * Delete favourite from stalls
 *
 * @method DELETE
 * @access Public
 * @param id Stall ID
 */
export const deleteFavouriteStalls = async (id: number) => {
  return await Axios.delete(ENDPOINTS.BASE + ENDPOINTS.STALLS + id + '/' + ENDPOINTS.FAVOURITES, {
    headers: { 'x-auth-token': localStorage.getItem('authToken') },
  }).catch((error) => {
    throw error;
  });
};
