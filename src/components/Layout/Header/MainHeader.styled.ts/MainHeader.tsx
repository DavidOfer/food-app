import { Typography } from "@mui/material";
import { StyledMainHeader } from "./MainHeader.styled";
import { NavLink } from "react-router-dom";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import HebrewIcon from '../../../../assets/hebrewIcon.png'
import hebIcon from '../../../../assets/hebIcon.svg'
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";

const MainHeader: React.FC = () => {
    return (
        <StyledMainHeader>
            <NavLink className="logo" to="/">
                <FoodBankIcon className="logoIcon" sx={{ fontSize: "50px" }} />
                <Typography component="div" className="logoTypo" fontFamily="Segoe UI" variant="h4" fontWeight="700">
                    תן אוכל
                </Typography>
            </NavLink>
            <div className="NavDiv">
                <UserProfileMenu />
                <img className="headerIcon" src={hebIcon} alt={HebrewIcon} />
            </div>
        </StyledMainHeader>
    );
}
export default MainHeader;