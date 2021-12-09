
import { ResturantContentContainer, StyledRestaurant, StyledResturantBanner, StyledSmallLogo } from "./Restaurant.styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { actionCreators } from "../../../state";
import Menu from "../../Menu/Menu";
import CategoriesBar from "../../CategoriesBar/CategoriesBar";
import { Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Reviews from "../../Reviews/Reviews";
import { Link } from "react-scroll";
import CircularProgress from '@mui/material/CircularProgress';

const Resturant: React.FC = () => {
    // const [restaurent,setRestaurent] = useState<RestaurentModel | undefined>();
    const { data, error, loading } = useTypedSelector((state) => state.shop);
    const dispatch = useDispatch();

    useEffect(() => {
        // const getResturant = async () => {
        //     const response = await axios.get('http://localhost:8080/restaurant/getDetails/1');
        //     setRestaurent(response.data);
        //     console.log(response.data);
        // }
        // getResturant();
        dispatch(actionCreators.fetchShop(1))
    }, [dispatch]);
    return (
        <>
            {error && <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}><h3>THERE IS AN ERROR {error} </h3 ></div>}
            {loading && <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}><CircularProgress /></div>}
            {!error && !loading && data &&
                <StyledRestaurant>
                    <StyledResturantBanner img={data?.banner} />
                    <StyledSmallLogo img={data?.logo} />
                    <div className="restaurantInfo">
                        <ResturantContentContainer>
                            <div>
                                <Typography variant="h4" className="title">
                                    {data?.name}
                                </Typography>
                                <div className="recommended">
                                    <StarIcon className="starIcon" />
                                    <div className="recText">
                                        <Link offset={-150} activeClass="test" to="Reviews" spy={false} smooth={true} duration={300}>
                                            המלצות
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    {data?.type}
                                </div>
                                <div>
                                    דמי משלוח {data?.deliveryCost} ₪ · מינימום {data?.minOrder} ₪ · {data?.openingHour} - {data?.closingHour}
                                </div>
                            </div>
                        </ResturantContentContainer>
                    </div>
                    <CategoriesBar />
                    <Menu foodGroups={data?.foodGroups} />
                    <Reviews reviews={data?.reviews} rating={data?.rating} amount={data?.reviewCount} />
                </StyledRestaurant >
            }

        </>
    );
}
export default Resturant;