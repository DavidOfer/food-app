import { ReviewModel } from "../../../models/ReviewModel";
import ReviewItem from "../ReviewItem/ReviewItem";
import { StyledReviewList } from "./ReviewList.styled";

interface ReviewListProps{
    reviews:ReviewModel[]
}
const ReviewList:React.FC<ReviewListProps> = (props) =>{
    return (
        <StyledReviewList>
            {props.reviews.map(review=><ReviewItem key={review.id} review={review} />)}
        </StyledReviewList>
    );
}
export default ReviewList;