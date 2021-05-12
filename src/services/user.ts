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

export const getLoggedInUser = () => {
  const temp = localStorage.getItem('loggedIn');
  if (temp === null || temp === '') {
    return undefined;
  } else {
    return {
      email: localStorage.getItem('username'),
    };
  }
};

export const getUserByEmail = async (email: string) => {
  return await Axios.get(ENDPOINTS.BASE + `users/email?email=${email}`, {
    headers: { 'x-auth-token': localStorage.getItem('authToken') },
  }).catch((error) => {
    throw error;
  });
};

export const getSecurityQuestions = async () => {
  return await Axios.get(ENDPOINTS.BASE + ENDPOINTS.ALL_SECURITY_QUESTIONS).catch((error) => {
    throw error;
  });
};

export const createSecurityAnswer = async (data: API) => {
  return await Axios.post(ENDPOINTS.BASE + ENDPOINTS.USER_ANSWERS, data['data'], {
    headers: { 'x-auth-token': localStorage.getItem('authToken') },
  }).catch((error) => {
    throw error;
  });
};

export const validateSecurityAnswer = async (data: API) => {
  return await Axios.post(ENDPOINTS.BASE + ENDPOINTS.USER_ANSWERS_VALIDATE, data['data']).catch((error) => {
    throw error;
  });
};

export const updatePassword = async (resetToken: string, data: API) => {
  return await Axios.post(ENDPOINTS.BASE + `users/passwordReset?resetToken=${resetToken}`, data['data']).catch((error) => {
    throw error;
  });
};

export const updateUser = async (data: API) => {
  return await Axios.put(ENDPOINTS.BASE + 'updateUser', data['data'], {
    headers: { 'x-auth-token': localStorage.getItem('authToken') },
  }).catch((error) => {
    throw error;
  });
};
