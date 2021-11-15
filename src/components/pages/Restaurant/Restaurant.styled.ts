import styled from "styled-components";

export const StyledRestaurant = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 122px;
  align-items: center;
  background-color: rgb(240, 240, 240);
  .PlaceHolderContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
    background-color: orange;
    border:1px solid;
    /* position: relative; */
  }
  
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
  border:4px solid white;
  border-radius: 50%;
`;
