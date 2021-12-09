import styled from 'styled-components';

export const StyledReviewItem = styled.div`
border-top: 1px solid rgb(215, 215, 215);
display: flex;
flex-direction: column;
width: 100%;
max-width: 1300px;
padding:10px;
.firstRow{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
}
.secondRow{
    color:rgb(102, 102, 102);
    font-size: 12px;
}
.thirdRow{
}
`;
