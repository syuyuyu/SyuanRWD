import styled from "styled-components";
import PlayGame from "./PlayGame";

const ImgContainer = styled.div`
  width: 100%;
  height:235px;
  @media (min-width: 1024px){
    height: 370px;
  }
  @media (min-width: 1441px){
    height: 520px;    
  }
  `
const Img = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: contain;
  background-position-x: 50%;
  background-image: var(--img-top-img);
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