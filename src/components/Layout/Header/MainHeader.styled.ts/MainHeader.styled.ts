import styled from "styled-components";

export const StyledMainHeader = styled.div`
  color: #fff;
  background-color: rgb(255, 128, 0);
  display: flex;
  position: relative;
  width: 100%;
  height: 72px;
  align-items: stretch;
  justify-content: space-between;
  align-items: center;
  padding: 20px 250px;
  .logo {
    display: flex;
    align-items: center;
    
  }
  .logoIcon {
    color: #fff;
  }
  .NavDiv {
    display: flex;
    align-items: center;
  }
  .headerIcon {
    width: 20px;
    width: 20px;
    margin-right: 30px;
  }
  @media (max-width: 1300px) {
    padding:20px 0px;
  }
  
`;
