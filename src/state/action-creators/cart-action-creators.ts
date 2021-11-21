import { CartItemModel } from "../../models/CartItemModel";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const addCartItem = (dish: CartItemModel, amount: number): Action => {
  return {
    type: ActionType.ADD_CART_ITEM,
    payload: {
      dish,
      amount,
    },
  };
};
export const removeCartItem = (id: number, amount: number): Action => {
  return {
    type: ActionType.REMOVE_CART_ITEM,
    payload: {
      id,
      amount,
    },
  };
};
