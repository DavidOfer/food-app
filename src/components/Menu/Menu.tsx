
import { StyledMenu } from "./Menu.styled";
import MenuItem from '../Menu/MenuItem/MenuItem'
import { FoodGroupModel } from "../../models/FoodGroupModel";
import React from "react";
import { Typography } from "@mui/material";
import Cart from "../Cart/Cart";

interface MenuProps {
    foodGroups: FoodGroupModel[] | undefined
}
const Menu: React.FC<MenuProps> = (props) => {
    return (
        <StyledMenu>
            <div className="menu">
                {props.foodGroups?.map(foodGroup =>
                    <section className="foodSection" id={`foodGroup${foodGroup.id}`} key={foodGroup.id}>
                        <Typography component="div" className="logoTypo" fontFamily="Segoe UI" variant="h6" fontWeight="700" width="100%" padding="0px 16px">
                            {foodGroup.name}
                        </Typography>
                        {foodGroup.dishes.map(dish => <MenuItem key={dish.id} dish={dish} />)}
                    </section>
                )}
            </div>
            <div className="cartContainer">
                <Cart/>
            </div>
        </StyledMenu>

    );
}
export default Menu;