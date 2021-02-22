import Axios from 'axios';
import { ENDPOINTS } from '../constants/endpoints';

/**
 * Get all categories from the backend
 *
 * @method GET
 * @access Public
 */
export const getAllCategories = async () => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.CATEGORIES).catch((error) => {
    throw error;
  });
};
