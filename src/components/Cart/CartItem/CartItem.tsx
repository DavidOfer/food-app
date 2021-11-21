
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { CartItemModel } from "../../../models/CartItemModel";
import { StyledCartItem } from "./CartItem.styled";
import { actionCreators } from '../../../state/index'

interface CartItemProps {
    item: CartItemModel
}

const CartItem: React.FC<CartItemProps> = (props) => {
    const dispatch = useDispatch();
    const addItemHandler = () => {
        dispatch(actionCreators.addCartItem(props.item, 1));
    }
    const removeOneItemHandler = () => {
        dispatch(actionCreators.removeCartItem(props.item.id, 1));
    }
    const removeAllItemHandler = () => {
        dispatch(actionCreators.removeCartItem(props.item.id, props.item.amount));
    }
    return (
        <StyledCartItem>
            <div className="dishDetails">
                <div className="dishNameCost">
                    <div className="dishCost">
                        <Button onClick={removeOneItemHandler}>-</Button>
                        {props.item.amount}
                        <Button onClick={addItemHandler}>+</Button>
                    </div>
                    <div>
                        {props.item.title}
                    </div>
                </div>
                <div>
                    {props.item.totalCost}
                </div>
                <div className="removeContainer">
                    <div className="removeText" onClick={removeAllItemHandler}>
                        הסרה
                    </div>
                </div>
            </div>
        </StyledCartItem>
    );
}
export default CartItem;