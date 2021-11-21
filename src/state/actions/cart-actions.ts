import { CartItemModel } from "../../models/CartItemModel";
import { ActionType } from "../action-types";

interface AddCartItemAction {
  type: ActionType.ADD_CART_ITEM;
  payload: {dish:CartItemModel,amount:number};
}
interface RemoveCartItemAction {
  type: ActionType.REMOVE_CART_ITEM;
  payload: {id:number,amount:number};
}

export type CartAction = AddCartItemAction | RemoveCartItemAction;
