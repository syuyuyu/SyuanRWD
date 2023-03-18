import styled from "styled-components";
import PlayGame from "./PlayGame";

const ImgContainer = styled.div`
  width: 375px;
  height:235px;
  overflow: hidden;
  @media (min-width: 1024px){
    height: 370px;
    width: 1024px;
  }
  @media (min-width: 1441px){
    height: 520px;    
    width: 1440px;
  }
  `
const Img = styled.div`
  height: 130%;
  width: 125%;
  background-size: contain;
  background-repeat: no-repeat;
  object-fit: contain;
  background-position-x: -30px;
  background-image: var(--img-top-img);
  @media (min-width: 1024px){
    height: 105%;
    width: 105%;
    background-size: cover;
    background-position-x: 0px;
  }
  `
  const Top = ()=>{
    return (
      <>
        <ImgContainer>
          <Img></Img>
        </ImgContainer>
        <PlayGame />
      </>
    )
  };

  export default Top;