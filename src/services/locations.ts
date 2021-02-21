import Axios from 'axios';
import { ENDPOINTS } from '../constants/endpoints';

/**
 * Get all locations from the backend
 *
 * @method GET
 * @access Public
 */
export const getAllLocations = async () => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.LOCATIONS).catch((error) => {
    throw error;
  });
};
