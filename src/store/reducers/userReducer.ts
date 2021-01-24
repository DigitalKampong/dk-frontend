import { UserActionTypes, UPDATE_CURRENT_USER, REMOVE_CURRENT_USER } from '../types';
import { UserState } from '../types';

const initialState = {
  isLoggedIn: false,
  currentUser: undefined,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case UPDATE_CURRENT_USER:
      return {
        isLoggedIn: true,
        currentUser: action.payload,
      };
    case REMOVE_CURRENT_USER:
      return {
        isLoggedIn: false,
        currentUser: undefined,
      };
    default:
      return state;
  }
};

export default userReducer;
