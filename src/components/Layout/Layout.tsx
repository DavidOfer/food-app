
import HeaderContainer from "./Header/HeaderContainer/HeaderContainer"
import SubHeader from "./Header/SubHeader/SubHeader";
import Restaurant from "../pages/Restaurant/Restaurant"
import { Route, Switch } from "react-router";
import MainHeader from "./Header/MainHeader/MainHeader";
import Footer from "./Footer/Footer";



const Layout: React.FC = () => {
    return (
        <>
            <HeaderContainer>
                <MainHeader />
                <SubHeader />
            </HeaderContainer>
            <Switch>
                <Route path='/' exact>
                    <Restaurant />
                </Route>
                <Restaurant />
            </Switch>
            <Footer/>
        </>

    );
}
export default Layout;