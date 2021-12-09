import styled from "styled-components";

export const StyledRestaurant = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 122px;
  padding-bottom:15px;
  align-items: center;
  background-color: rgb(240, 240, 240);
  .restaurantInfo{
    width: 100%;
    background-color: white;
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  .title{
    font-weight: 600;
    font-family:"Segoe UI", sans-serif;
  }
  .starIcon{
    color: rgb(255,128,0);
    font-size: 14px;
  }
  .recommended{
    display: flex;
    flex-direction: row;
    align-items: center;
    .recText{
      cursor: pointer;
      margin-right: 2px;
    }
  }
  .StickyCate {
    display: block;
    position: sticky;
    z-index: 10;
    top: 122px;
  }

  /* .reviews{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1300px;
    min-height: 80px;
    direction: ltr;
  } */
`;

export const ResturantContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  background-color: inherit;
  /* border: 1px solid; */
`;

interface LogoProps {
  img?: string;
}
export const StyledResturantBanner = styled.div<LogoProps>`
  background-image: url(${(p) => p.img});
  position: relative;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 300px;
  display: flex;
  /* transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem); */
`;

export const StyledSmallLogo = styled.div<LogoProps>`
  background-image: url(${(p) => p.img});
  position: absolute;
  margin-top: 70px;
  /* background-position: center center; */
  width: 130px;
  height: 130px;
  display: flex;
  border: 4px solid white;
  border-radius: 50%;
`;
