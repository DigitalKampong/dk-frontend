import User from '../types/User';

export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

interface UpdateUserAction {
  type: typeof UPDATE_CURRENT_USER;
  payload: User;
}

interface RemoveUserAction {
  type: typeof REMOVE_CURRENT_USER;
}

export type UserActionTypes = UpdateUserAction | RemoveUserAction;

export interface RootState {
  user: UserState;
}

export interface UserState {
  isLoggedIn: boolean;
  currentUser?: User;
}
