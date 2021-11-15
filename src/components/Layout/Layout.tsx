
import HeaderContainer from "./Header/HeaderContainer/HeaderContainer"
import MainHeader from "./Header/MainHeader.styled.ts/MainHeader";
import SubHeader from "./Header/SubHeader/SubHeader";
import Restaurant from "../pages/Restaurant/Restaurant/Restaurant";



const Layout: React.FC = () => {
    return (
        <>
            <HeaderContainer>
                <MainHeader />
                <SubHeader />
            </HeaderContainer>
            <div>
                <Restaurant />
            </div>
        </>
    );
}
export default Layout;