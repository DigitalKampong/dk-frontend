import Axios from 'axios';
import { ENDPOINTS } from '../constants/endpoints';
import API from '../types/api';

/**
 * Register a new user at the backend
 *
 * @method POST
 * @access Public
 * @param data Data object containing details of the user
 */
export const registerUser = async (data: API) => {
  return await Axios.post(ENDPOINTS.BASE + ENDPOINTS.REGISTER, data['data']).catch((error) => {
    throw error;
  });
};

/**
 * Login a new user
 *
 * @method POST
 * @access Public
 * @param data Data object containing details of the user
 */
export const loginUser = async (data: API) => {
  return await Axios.post(ENDPOINTS.BASE + ENDPOINTS.LOGIN, data['data']).catch((error) => {
    throw error;
  });
};

export const isLoggedIn = () => {
  const temp = localStorage.getItem('loggedIn');
  if (temp === null || temp === '') {
    return false;
  } else {
    return true;
  }
};
