import { StyledBilling, StyledCartFinalTotal, StyledCartItemContainer } from "./Billing.styled";

interface BillingProps{
    ItemTotalCost:number;
    deliveryCost:number | undefined;
    FinalTotalCost:number | undefined;
}
const Billing: React.FC<BillingProps> = (props) => {
    return (
        <StyledBilling>
            <StyledCartItemContainer>
                <div>
                    סך מחיר הפריטים
                </div>
                <div>
                    {props.ItemTotalCost}
                </div>
            </StyledCartItemContainer>
            <StyledCartItemContainer>
                <div>
                    דמי משלוח
                </div>
                <div>
                    {props.deliveryCost}
                </div>
            </StyledCartItemContainer>
            <StyledCartFinalTotal>
                <div>
                    סך כל ההזמנה
                </div>
                <div>
                    {props.FinalTotalCost}
                </div>
            </StyledCartFinalTotal>
        </StyledBilling>
    );
}
export default Billing;