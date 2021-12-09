import styled from 'styled-components';

export const StyledCartItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 2px rgb(230,230,245) solid;
  .dishDetails{
      width:100%;
      display:flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      padding:16px;
  }
  .removeContainer{
    width:100%;
    display:flex;
    justify-content: left;
  }
  .removeText{
    cursor: pointer;
    color:blue;
    font-weight: normal;

  }
  .dishNameCost{
    min-width: 80%;
    display:flex;
  }
  .dishCost{
    margin-left: 10px;
  }
`;