import { Link } from "react-scroll";
import styled from "styled-components";

export const CategoriesLink = styled(Link)`
font-weight: bold;
margin-right: 40px;
white-space: nowrap;
cursor: pointer;
  &.test {
    color:orange;
    text-decoration: underline 1px solid;
  }
`;
