import { ReviewModel } from "../../../models/ReviewModel";
import StarRating from "../StarRating/StarRating";
import { StyledReviewItem } from "./ReviewItem.styled";


interface ReviewItemProps{
    review:ReviewModel;
}
const ReviewItem:React.FC<ReviewItemProps> = (props)=>{
    return(
        <StyledReviewItem>
            <div className="firstRow">
                <div>
                    {props.review.userDetails}
                </div>
                <div className="rating">
                    <StarRating rating={props.review.rating} flexDirection="row-reverse" />
                </div>
                    
            </div>
            <div className="secondRow">
                {props.review.date}
            </div>
            <div className="thirdRow">
                {props.review.content}
            </div>
        </StyledReviewItem>
    );
};
export default ReviewItem;