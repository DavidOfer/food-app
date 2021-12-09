import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: red;
  border: 0.5px solid gray;
  background-color: rgb(255, 255, 255);
  box-shadow: inset;
  min-height: 300px;
  color: #1f2d42;
  font-weight: bold;
`;
// interface CartButtonProps {
//   $isDisabled: boolean;
// }
export const StyledCartButton = styled(Button)`
  && {
    width: 100%;
    height: 45px;
    font-weight: bold;
    font-size: 16px;
    :disabled {
      pointer-events: unset;
      cursor: not-allowed;
    }
  }
`;
