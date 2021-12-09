
import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { StyledCart, StyledCartButton } from "../Cart/Cart.styled";
import Billing from "./Billing/Billing";
import CartItem from "./CartItem/CartItem";

const Cart: React.FC = () => {
    const cart = useTypedSelector((state) => state.cart);
    const totalCost = cart.itemTotalCost;
    const isDisabled= cart.itemCount === 0;
    const deliveryCost = useTypedSelector((state) => state.shop.data?.deliveryCost);
    const finalTotalCost = deliveryCost ? totalCost + deliveryCost : undefined;
    console.log('cart render');
    return (
        <StyledCart>
            <div style={{ padding: "10px", width: "100%" }}>
                <StyledCartButton variant="contained" disabled={isDisabled}>
                    תשלום
                </StyledCartButton>
            </div>
            {cart.itemCount === 0 ?
                <div style={{textAlign:"center"}}>העגלה ריקה</div> :
                <>
                    {cart.cartItems.map(cartItem =>
                        <CartItem key={cartItem.id} item={cartItem} />
                    )}
                    <Billing ItemTotalCost={totalCost} deliveryCost={deliveryCost} FinalTotalCost={finalTotalCost} />
                </>
            }
        </StyledCart>
    );
}
export default React.memo(Cart);