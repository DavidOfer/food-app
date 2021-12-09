import React from "react";
import StarRating from "../StarRating/StarRating";

import { StyledReviewSummary } from "./ReviewSummary.styled";

interface ReviewSummaryProps{
    rating:number | undefined;
    amount:number | undefined;
}
const ReviewSummary: React.FC<ReviewSummaryProps> = (props) => {
    return (
        <StyledReviewSummary>
            <StarRating rating={props.rating?props.rating:0} />
            <div style={{color:"gray"}}>
                ({props.amount?props.amount:0})
            </div>
        </StyledReviewSummary>
    );
}
export default React.memo(ReviewSummary);