
import { StyledRestaurant, StyledResturantBanner,StyledSmallLogo } from "./Restaurant.styled";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { actionCreators } from "../../../state";
import Menu from "../../Menu/Menu";


const Resturant: React.FC = () => {
    // const [restaurent,setRestaurent] = useState<RestaurentModel | undefined>();
    const {data,error,loading} = useTypedSelector((state)=>state.shop);
    const dispatch = useDispatch();

    useEffect(()=>{
        // const getResturant = async () => {
        //     const response = await axios.get('http://localhost:8080/restaurant/getDetails/1');
        //     setRestaurent(response.data);
        //     console.log(response.data);
        // }
        // getResturant();
        dispatch(actionCreators.fetchShop(1))
    },[dispatch]);
    return (
        <StyledRestaurant>
            {error && <h3>THERE IS AN ERROR {error} </h3>}
            {loading && <h3>PAGE IS LOADING </h3>}
            <StyledResturantBanner img={data?.banner} />
            <StyledSmallLogo img={data?.logo}/>
            <div className="PlaceHolderContainer">
                <div>
                    <div>
                        {data?.name}
                    </div>
                    <div>
                        המלצות
                    </div>
                    <div>
                        {data?.type}
                    </div>
                    <div>
                        דמי משלוח {data?.deliveryCost} * מינימום {data?.minOrder} * {data?.openingHour} - {data?.closingHour}
                    </div>
                </div>
            </div>
            <div className="PlaceHolderContainer">
                כאן יהיו קטגוריות
            </div>
            {/* <div className="PlaceHolderContainer">
                {dummy_resturant.dishes.map(item =>
                    <div>
                        {item.title}
                    </div> 
                )}
            </div> */}
            <Menu foodGroups={data?.foodGroups} />
            {/* <div className="PlaceHolderContainer">
                <Typography variant="h4">

                </Typography>
            </div> */}

        </StyledRestaurant>
    );
}
export default Resturant;