import styled from "styled-components";
import Header from "./Header";
import Album from "./section/Album";
import Intro from "./section/Intro";
import Top from "./section/Top";

const MainStyle=styled.div`
  margin: 0 auto;
  width: 375px;
  height: 100vh;
  position: relative;
  @media (min-width: 1024px) {
    width: 1024px;
  }
  @media (min-width: 1441px) {
    width: 1441px
  }
`


const Main = ()=>{
  return(
    <>
    <MainStyle>
      <Header />
      <Top />
      <Album />
      <Intro />
    </MainStyle>
    </>
  )

}

export default Main;