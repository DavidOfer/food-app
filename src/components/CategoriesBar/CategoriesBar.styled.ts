import styled from "styled-components";

interface CategoriesBarProps {
    $shadow: boolean;
  }
export const StyledCategoriesBar = styled.section<CategoriesBarProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-top: 1px rgb(230,230,245) solid;
  position: sticky;
  z-index: 11;
  top: 122px;
  align-items:center;
  ${({ $shadow }) => $shadow && `
    box-shadow: rgba(63, 68, 97, 0.05) 0px 4px 4px 0px;
  `}
  .content{
      width: 100%;
      max-width: 1300px;
      display: flex;
      flex-direction:row;
      overflow-y: hidden;
      flex-wrap: nowrap;
  }
  .links:first-child{
      margin-right: 0;
  }
`;
