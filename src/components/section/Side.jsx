import styled from "styled-components";

const SideContainer = styled.div`
  display: none;
  @media (min-width: 1441px){
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 151px;
  height: 142.57px;
  /* background-color: orange; */
  position: fixed;
  right: 0 ;
  top: 530px;
  }
`
const Content = styled.div`
  color: var(--color-white);

  &::after{
    content: '';
    position: absolute;
    width: 71px;
    height: 1px;
    background-color: var(--color-white);
    opacity: 0.7;
    margin-top: 8px;
    right: 0;
  }
    
    &.no-target{
      opacity: 0.7;
    }

`

const ButtonStart = styled.div`
    /* display: block; */
    /* position: absolute; */
    /* top: 49px; */
    right: 27px;
    width: 124px;
    height: 46.57px;
    background-color: var(--color-red);
    color: var(--color-white);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`

const Side = ()=>{
  return(
    <SideContainer>
      <Content>遊戲簡介</Content>
      <Content className="no-target">運作環境</Content>
      <ButtonStart>開始遊戲</ButtonStart>
    </SideContainer>
  )
}

export default Side;