import User from '../types/User';
import { UserActionTypes, UPDATE_CURRENT_USER, REMOVE_CURRENT_USER } from './types';

export const updateCurrentUser = (user: User): UserActionTypes => {
  return {
    type: UPDATE_CURRENT_USER,
    payload: user,
  };
};

export const removeCurrentUser = (): UserActionTypes => {
  return {
    type: REMOVE_CURRENT_USER,
  };
};
