
import { DishModel } from "../../../models/DishModel";
import { StyledItemImage, StyledMenuItem } from "./MenuItem.styled";

interface MenuItemProps {
    dish: DishModel;
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
    return (
        <StyledMenuItem>
            <button className="menuItemDiv">
                <div className="itemDetailDiv">
                    <div className="itemDetailTextDiv">
                        <div className="itemTitle">
                            {props.dish.title}
                        </div>
                        <div>
                            {props.dish.description}
                        </div>
                    </div>
                    <div>
                        {props.dish.cost}
                    </div>
                </div>
                <StyledItemImage img={props.dish.img} />
            </button>
        </StyledMenuItem >
    );
}
export default MenuItem;