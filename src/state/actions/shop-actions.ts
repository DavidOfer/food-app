import { RestaurentModel } from "../../models/RestaurentModel";
import { ActionType } from "../action-types";

interface FetchShopAction {
  type: ActionType.FETCH_SHOP;
}
interface FetchShopSuccessAction {
  type: ActionType.FETCH_SHOP_SUCCESS;
  payload: RestaurentModel;
}
interface FetchShopErrorAction {
  type: ActionType.FETCH_SHOP_ERROR;
  payload: string;
}

export type ShopAction =
  | FetchShopAction
  | FetchShopSuccessAction
  | FetchShopErrorAction;

