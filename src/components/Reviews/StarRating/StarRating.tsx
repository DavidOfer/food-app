import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useCallback } from 'react';
import React from 'react';
import { StyledStarRating } from './StarRating.styled';
interface StarRatingProps {
    rating: number
    flexDirection?:string;
}

const StarRating: React.FC<StarRatingProps> = (props) => {
    // let fullStarCount=props.rating;
    const getStars = useCallback(() => {
        const stars = [];
        for (let i = 1; i <= props.rating; i++) {
            console.log("rendering a full star for " + props.rating + " rating")
            stars.push(
                <StarIcon sx={{ color: "rgb(255,128,0)" }} key={Math.random()} />
            );
        }
        if (Math.round(props.rating % 1) > 0) {
            stars.push(<StarHalfIcon sx={{ color: "rgb(255,128,0)", fontSize: "30px" }} key={Math.random()}
                transform="scale(-1 1)" />)
        }
        for (let i = Math.round(props.rating); i < 5; i++) {
            stars.push(
                <StarOutlineIcon sx={{ color: "gray" }} key={Math.random()} />
            )
        }
        return stars;
    }, [props.rating]);
    const renderedStars = getStars();
    return (
        <StyledStarRating $flexDirection={props.flexDirection}>
            {renderedStars}
        </StyledStarRating>
    );
}
export default React.memo(StarRating);