import styled from "styled-components";
import FeatureItem from "../items/FeatureItem";
import ImgItem from "../items/ImgItem";
import LinkIcon from "../items/Links";
import TitleItem from "../items/TitleItem";

const IntroContainer = styled.div`
  position: relative;
  top: -21px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  h3{
    color:white;
  }
  @media (min-width: 1024px) {
    width: 1024px;
    top: 0px;
  }
  @media (min-width: 1441px) {
    width: 680px;
    margin: 0 auto;
  }

`

const Content = styled.div`
  color: var(--color-black_200);
  width: 354px;
  margin-bottom: 39px;
  word-wrap:break-word;
  @media (min-width: 1024px) {
    width: 920px;
  }
  @media (min-width: 1441px) {
    width: 680px;
  }
`

const ImgContainer = styled.div`
  width: 345px;
  height: 184px;
  margin-bottom: 39px;
  border-radius: 12px;
  @media (min-width: 1024px) {
    width: 918px;
    height: 487px;
  }
  @media (min-width: 1441px) {
    width: 677px;
    height: 359px;
  }
`

const Features = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 38px;
  div:not(:first-child){
    margin-left: 10px;
  };

`

const Factory = styled.div`
  color: var(--color-white);
  height: 24px;
  margin-bottom: 38px;
`

const Links = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  `

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;
`
const BackgroundContainer = styled.div`
  width: 375px;
  height: 375px;
  @media (min-width: 1024px) {
    width: 1024px;
  }
  @media (min-width: 1441px) {
    width: 100%;
    margin: 0 auto;
  }
  &.background-top{
    height: 35px;
    background: linear-gradient(to bottom,rgba(0, 0, 0, .6) 50% ,rgba(0, 0, 0, .1) );
    @media (min-width: 1024px) {
      width: 1024px;
    }
  @media (min-width: 1441px) {
    width: 100%;
  }
  }
  &.background-down{
    height: 300px;
    background: linear-gradient(to bottom,rgba(0, 0, 0, .1) 90% ,rgba(0, 0, 0, .8) );
    @media (min-width: 1024px) {
      width: 1024px;
    }
  @media (min-width: 1441px) {
    width: 100%;
  }
  }
`
const BeckgroundImgItem = styled.div`
  height: 100%;
  width: 100%;
    margin: 0 auto;

  background-size: cover;
  background-repeat: no-repeat;
  object-fit: contain;
  background-image: var(--img-background);
`



const ButtonStart = styled.div`
  display: none;
  @media (min-width: 1024px){
    margin: 38px 0;
    display: block;
    height: 80px;
    width: 678px;
    background-color: var(--color-red);
    color: var(--color-white);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  @media (min-width: 1441px) {
    width: 680px;
  }
`


const Intro = ()=>{
  return(
    <IntroContainer>
      <TitleItem content='遊戲簡介'/>
      <Content className="p1 top-content">第3人稱射擊手遊。集中了《天命之子》所有Live2D ver 3.3和2.5D PAPER FOLDING技術來實現生動的戰鬥動作。故事背景講述在被外星人淘汰的地球，代替人類上戰場的戰鬥少女的故事。玩家要對抗外星生命體奪回地球，同時擴大自己勢力。最多可以4個人即時連線戰鬥。
      </Content>

      <ImgContainer> {/* 第一張圖 */}
        <ImgItem src='var(--img-intro-01)'/>
      </ImgContainer>

      <Content className='p1 down-content'>出身於有名鍊金術世家－亞斯霍迪爾的希格爾德，<br></br>
        為了生來就深受「聖痕」之力所苦的妹妹、不停找尋著可以治療妹妹的方法。<br></br>
        <br></br>
        為了拯救心愛的妹妹，不惜加入「傑諾拜特教團」，<br></br>
        為了要對「聖痕」進一步研究，以賢者之名潛伏在艾爾雅拉特聖王國。<br></br>
        <br></br>
        出乎意料地，希格爾德在遺跡深處獲得了可以連接平行世界、<br></br>
        並且召喚異世界的「伊甸騎士」的聖遺物「境界門」。<br></br>
        <br></br>
        「艾爾雅拉特聖王國」、「加爾貝利亞皇國」、「傑諾拜特教團」<br></br>
        以及未知的勢力「羅賽莉亞教皇國」。<br></br>
        <br></br>
        捲入各個勢力角力的希格爾德的戰鬥，現在即將開幕！<br></br>
        <br></br>
      </Content>

      <ImgContainer> {/* 第二張圖 */}
        <ImgItem src='var(--img-intro-02)'/>
      </ImgContainer>

      <ButtonStart className='btn4'>免費遊玩</ButtonStart>
      
      <Features> {/* 特色按鈕 */}
        <FeatureItem content='網頁遊戲'/>
        <FeatureItem content='射擊遊戲'/>
        <FeatureItem content='角色扮演'/>
        <FeatureItem content='卡牌'/>
        <FeatureItem content='二次元' claName='show-1441'/>
      </Features>

      <Factory className="p1">
        廠商：Level Infinite
      </Factory>
      
      <Links> {/* 連結排列 */}
        <LinkIcon src='var(--svg-link-earth)'/>
        <LinkIcon src='var(--svg-link-facebook)'/>
        <LinkIcon src='var(--svg-link-vector)'/>
        <LinkIcon src='var(--svg-link-twitter)'/>
        <LinkIcon src='var(--svg-link-line)'/>
        <LinkIcon src='var(--svg-link-camera)' style={{width:'16px',height:'16px'}}/>
        <LinkIcon src='var(--svg-link-discord)'style={{width:'18px',height:'18px'}}/>
      </Links>

      <Background>
        <BackgroundContainer className='background-top'>
          <ImgItem src='var(--img-background)'/>
        </BackgroundContainer>

        <BackgroundContainer>
          <BeckgroundImgItem src='var(--img-background)'/>
        </BackgroundContainer>

        <BackgroundContainer>
          <BeckgroundImgItem src='var(--img-background)'/>
        </BackgroundContainer>
        <BackgroundContainer>
          <BeckgroundImgItem src='var(--img-background)'/>
        </BackgroundContainer>
        <BackgroundContainer className="show-1024">
          <BeckgroundImgItem src='var(--img-background)'/>
        </BackgroundContainer>

        <BackgroundContainer className='background-down'>
          <BeckgroundImgItem src='var(--img-background)'/>
        </BackgroundContainer>
      </Background>

    </IntroContainer>
  )
};

export default Intro;