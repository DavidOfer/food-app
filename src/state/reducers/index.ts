import { combineReducers } from "redux";
import shopReducer from './shopReducer'

const reducers = combineReducers({
    shop: shopReducer,
});


export default reducers;

export type RootState = ReturnType<typeof reducers>;