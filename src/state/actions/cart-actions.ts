import { ActionType } from "../action-types";

interface PlaceHolderCartAction {
  type: ActionType.PLACEHOLDER;
}

export type CartAction = PlaceHolderCartAction;
