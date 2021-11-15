import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  border: 1px solid;
  justify-content: space-between;
  /* position: relative; */
  .menu {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 66%;
  }

  @media (max-width: 1300px) {
    .menu {
      width: 100%;
      background-color: white;
    }
  }
`;
