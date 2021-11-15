import { TextField } from "@mui/material";
import { StyledSubHeader } from "./SubHeader.styled";


const SubHeader = ()=>{
    return(
        <StyledSubHeader>
            <div className="subHeaderItem">חזרה לרשימה</div>
            <div className="subHeaderItem"><TextField size="small"/></div>
            <div className="subHeaderItem"><TextField size="small" /></div>
        </StyledSubHeader>
    );
}
export default SubHeader;