import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import { Dispatch } from "redux";
import globals from "../../utils/Globals";

export const fetchShop = (id:number) =>{
    return async (dispatch:Dispatch<Action>)=>{
        dispatch({
            type: ActionType.FETCH_SHOP
        })
        try{
            const response = await axios.get(`${globals.urls.general}/restaurant/getDetails/${id}`);
            dispatch({type:ActionType.FETCH_SHOP_SUCCESS,payload: response.data})
        }catch(err){
            if(err instanceof Error)
            {
                dispatch({type:ActionType.FETCH_SHOP_ERROR,payload:err.message})
            }
            else{
                dispatch({type:ActionType.FETCH_SHOP_ERROR,payload:"Unexpected Error"})
            }
        }
    }

}