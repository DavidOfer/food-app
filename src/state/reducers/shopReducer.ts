import { RestaurentModel } from "../../models/RestaurentModel";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface shopState {
  loading: boolean;
  error: string | null;
  data: RestaurentModel | null;
}

const initialState =  {
  loading:false,
  error:null,
  data:null
};


const reducer = (
    state: shopState =initialState,
    action:Action
    ): shopState => {
  switch (action.type) {
    case ActionType.FETCH_SHOP:
      return { loading: true, error: null, data: null };
    case ActionType.FETCH_SHOP_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_SHOP_ERROR:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};
export default reducer;
