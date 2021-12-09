
import { useDispatch } from "react-redux";
import { DishModel } from "../../../models/DishModel";
import { StyledItemImage, StyledMenuItem } from "./MenuItem.styled";
import { actionCreators } from '../../../state/index'

interface MenuItemProps {
    dish: DishModel;
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch(actionCreators.addCartItem(
            {
                id: props.dish.id,
                title: props.dish.title,
                amount: 1,
                cost: props.dish.cost,
                totalCost: props.dish.cost,
                img: props.dish.img
            }, 1));
    }
    return (
        <StyledMenuItem>
            <button className="menuItemDiv" onClick={onClickHandler}>
                <div className="itemDetailDiv">
                    <div className="itemDetailTextDiv">
                        <div className="itemTitle">
                            {props.dish.title}
                        </div>
                        <div className="description">
                            {props.dish.description}
                        </div>
                    </div>
                    <div>
                        {props.dish.cost} ₪
                    </div>
                </div>
                <StyledItemImage img={props.dish.img} />
            </button>
        </StyledMenuItem >
    );
}
export default MenuItem;