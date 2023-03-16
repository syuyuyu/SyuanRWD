import styled from "styled-components";
import Header from "./Header";

const MainStyle=styled.div`
  margin: 0 auto;
  background-color: grey;
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
      <h3>hello main</h3>
    </MainStyle>
    </>
  )

}

export default Main;