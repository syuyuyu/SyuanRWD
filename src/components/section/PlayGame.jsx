import styled from "styled-components";
import ImgItem from "../items/ImgItem";


const PlayGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -92px;
  left: 0px;
  @media (min-width: 1024px) {
    width: 1024px;
  }
  @media (min-width: 1441px) {
    width: 1440px
  }
`
const InfoContainer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.29);
  backdrop-filter: blur(3.5px);
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
  @media (min-width: 1441px) {
    width: 1440px;
    width: 100%;
  }
  `

const InfoWrapper = styled.div`
  height: 139px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 30px 19px 15px;
  @media (min-width: 1024px) {
    margin: 38px 51px 0px 30px;
    width: 330px;
    height: 102px;
    padding:0;
  }
  @media (min-width: 1441px) {
    margin-left: 147px;
  }
`
const AvatarImg = styled.div`
  height: 102px;
  width: 102px;
  @media (min-width: 1024px) {
    margin-right: 28px;
  }
  `
const Info = styled.div`
  h3{
    color: var(--color-white);
    margin-bottom: 10px;
  }
`
const Name= styled.div`
  color: var(--color-black_400);
  margin-bottom: 10px;
`

const ButtonGame = styled.div`
  height: 30px;
  width: 100px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  text-align: center;
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Content = styled.div`
  color: var(--color-white);
  opacity: 0.8;
  padding: 0 15px;
  margin-bottom: 28px;
  @media (min-width: 1024px) {
    width: 337px;
    margin-top: 29px;
    padding: 0 ;
  }
  @media (min-width: 1441px) {
    width: 502px;
  }
`
const ButtonNotice = styled.div`
  height: 44px;
  width: 345px;
  background-color: var(--color-black_900);
  color: var(--color-white);
  text-align: center;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 1024px){
    display: none;
  }
`
const ButtonStart = styled.div`
  display: none;
  @media (min-width: 1024px){
    position: absolute;
    top: 49px;
    right: 30px;
    display: block;
    height: 80px;
    width: 213px;
    background-color: var(--color-red);
    color: var(--color-white);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  @media (min-width: 1441px) {
    right: 147px;

  }
`


const PlayGame =()=>{
  return (
    <PlayGameContainer>

      <InfoContainer>
          <InfoWrapper>
            <AvatarImg>
              <ImgItem src='var(--img-avatar)'/>
            </AvatarImg>
            <Info>
              <h3>勝利女神妮姬</h3>
              <Name className='p3'>GODDESS OF VICTORY: NIKKE</Name>
              <ButtonGame className='p3'>網頁遊戲</ButtonGame>
            </Info>
          </InfoWrapper>
          <Content className='p1'>第3人稱射擊手遊。集中了《天命之子》所有Live2D ver 3.3和2.5D PAPER FOLDING技術來實現生動的戰鬥動作。故事背景講述在被外星人淘汰的地球，代替人類上戰場的戰鬥少女的故事。
          </Content>
      </InfoContainer>

      <ButtonNotice className='p1'>僅可在PC上遊玩</ButtonNotice>
      <ButtonStart className='btn4'>開始遊戲</ButtonStart>
    </PlayGameContainer>
  )
}

export default PlayGame;