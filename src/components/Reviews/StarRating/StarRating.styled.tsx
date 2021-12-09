import styled from 'styled-components';

interface StarRatingProps {
    $flexDirection?: string
}
export const StyledStarRating = styled.div<StarRatingProps>`
display: flex;
align-items: center;
flex-direction: row;
  ${({ $flexDirection }) => $flexDirection && `
    flex-direction: ${$flexDirection}
  `}
`;