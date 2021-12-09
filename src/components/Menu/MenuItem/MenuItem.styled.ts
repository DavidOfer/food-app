import styled from "styled-components";

export const StyledMenuItem = styled.div`
  display: flex;
  width: 50%;
  height: 140px;
  text-align: "center";
  padding: 8px;
  overflow: hidden;

  .menuItemDiv {
    cursor: pointer;
    border:0.5px solid gray;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    align-content: space-between;
  }
  .itemDetailDiv {
    padding:5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    height: 100%;
  }
  .itemDetailTextDiv {
    text-align: right;
    max-width: 240px;
    max-height: 80px;
    overflow: hidden;
    /* text-align: ; */
    .description{
      color:rgb(102, 102, 102);
    }
  }
  
  .itemTitle{
    margin-bottom: 5px;
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    .itemDetailTextDiv{
      max-width: 200px;
    }
  }
`;
interface ItemImageProp {
  img: string;
}
export const StyledItemImage = styled.div<ItemImageProp>`
  height: 124px;
  width: 124px;
  background-image: url(${(p) => p.img});
  background-size: cover;
`;
