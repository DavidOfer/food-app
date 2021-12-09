import React from "react";
import { ReviewModel } from "../../models/ReviewModel";
import ReviewList from "./ReviewList/ReviewList";
import { StyledReviews } from "./Reviews.styled";
import ReviewSummary from "./ReviewSummary/ReviewSummary";

interface ReviewsProps {
    rating: number | undefined;
    amount: number | undefined;
    reviews: ReviewModel[] | undefined;
}
const Reviews: React.FC<ReviewsProps> = (props) => {

    return (
        <StyledReviews id="Reviews">
            <ReviewSummary rating={props.rating} amount={props.amount} />
            {props.reviews &&
                <ReviewList reviews={props.reviews} />
            }
        </StyledReviews>
    );
}
export default React.memo(Reviews);