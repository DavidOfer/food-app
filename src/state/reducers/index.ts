import { combineReducers } from "redux";
import shopReducer from './shopReducer';
import cartReducer from './cartReducer';

const reducers = combineReducers({
    shop: shopReducer,
    cart: cartReducer,
});


export default reducers;

export type RootState = ReturnType<typeof reducers>;