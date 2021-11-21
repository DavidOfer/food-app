
import HeaderContainer from "./Header/HeaderContainer/HeaderContainer"
import SubHeader from "./Header/SubHeader/SubHeader";
import Restaurant from "../pages/Restaurant/Restaurant"
import { Route, Switch } from "react-router";
import MainHeader from "./Header/MainHeader/MainHeader";



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
            <footer style={{height:"700px",background:"blue"}}>

            </footer>
        </>

    );
}
export default Layout;