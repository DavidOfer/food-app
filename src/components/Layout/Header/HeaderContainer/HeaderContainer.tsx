import { StyledHeaderContainer } from "./HeaderContainer.styled";

const HeaderContainer:React.FC = (props) => {
    return (
        <StyledHeaderContainer>
            {props.children}
        </StyledHeaderContainer>
    );
}
export default HeaderContainer;