import { combineReducers } from 'redux';
import addCountReducer from './testReducer';

const rootReducer = combineReducers({
    count: addCountReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>