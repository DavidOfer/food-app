import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  justify-content: space-between;
  position: relative;
  .menu {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: calc(66.3333%);
  }
  .cartContainer {
    background-color: inherit;
    align-items: center;
    align-content: center;
    flex-grow: 1;
    width: calc(33.3333%);
    padding: 10px;
    top: 148px;
    display: block;
    position: sticky;
    align-self: flex-start;
    z-index: 10;
  }
  .foodSection{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
  }

  @media (max-width: 1300px) {
    .menu {
      width: 100%;
      background-color: white;
    }
  }
`;
