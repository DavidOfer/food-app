import { Button } from "@mui/material";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { StyledCart } from "../Cart/Cart.styled";
import Billing from "./Billing/Billing";
import CartItem from "./CartItem/CartItem";
const Cart: React.FC = () => {
    const cart = useTypedSelector((state) => state.cart);
    const totalCost = cart.itemTotalCost;
    const deliveryCost = useTypedSelector((state) => state.shop.data?.deliveryCost);
    const finalTotalCost = deliveryCost ? totalCost + deliveryCost : undefined;
    return (
        <StyledCart>
            <div style={{ padding: "10px", width: "100%" }}>
                <Button variant="contained" sx={{ width: "100%", height: "45px" }}>
                    תשלום
                </Button>
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
export default Cart;