import styled from "styled-components";
import ImgItem from "./common/ImgItem";

const HeaderStyle =styled.div`
  height:60px;
  width: 100%;
  background-color: var(--color-black);
  @media (min-width: 1024px){
    height:56px;
  }
  `
const HeaderContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px){
    justify-content: normal;

  }
`

const HeaderLogo = styled.div`
  position: relative;
  margin-left: 32px;
  width: 162px;
  height: 28px;
  background-image: var(--svg-header-logo);
  background-size: cover;
  background-repeat: round;
  object-fit: contain;
  cursor: pointer;
  @media (min-width: 1024px){
    margin: 0 30px;
  }
  @media (min-width:1441px){
    margin: 0;
    left: 30px;
  }

`

//@media min width 375
const ButtonContainer375 = styled.div`
  display: flex;
  @media (min-width: 1024px) {
    display: none;
  }
`
const ButtonInfo = styled.div`
  color: var(--color-white);
  border: 1px solid var(--color-black_600);
  border-radius: 8px;
  line-height: 40px;
  text-align: center;
  width: 70px;
  height: 40px;
  cursor: pointer;
`
const ButtonNotice = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid var(--color-black_300);
  border-radius: 100px;
  cursor: pointer;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 23px 0 15px ;
  `
const BellSvg = styled.div`
  height: 22px;
  width: 22px;
  cursor: pointer;
`


//media min width 1024
const RowContainer = styled.div`
  display: none;
  @media (min-width:1024px){
    display: flex;
    align-items: center;
  }

`
const Info = styled.div`
  display: flex;
  color: var(--color-white);
  div{
    margin: 0 10.5px;
    cursor: pointer;
  }
  @media (min-width:1441px){
    position: relative;
    left: 88px;
    div:not(:first-child){
      margin-left: 40px;
    }
  }
  `

const LanguageItem = styled.div`
  @media (min-width:1441px){
    width: 45px;
    height: 14px;
    color: var(--color-white);
    position: relative;
    left: 243px;
  }
  `

const SearchSvg = styled.div`
  height: 22px;
  width: 22px;
  margin: 0 15px 0 40px;
  cursor: pointer;

  @media (min-width:1441px){
    margin: 0px;
    position: relative;
    left: 272px;
  }
`

const UserStatus = styled.div`
  display: flex;
  color: var(--color-white);
  width: 98px;
  cursor: pointer;
  div:not(:first-child){
    margin-left:9px;
  }

  @media (min-width:1441px){
    position: relative;
    /* left: 338px; */
    left: 316px;
  }
`
const MenuSvg = styled.div`
  height: 32px;
  width: 40px;
  cursor: pointer;

  @media (min-width:1441px){
    position: relative;
    left: 420px;
  }
`


const Header = ()=>{
  return(
    <>
    <HeaderStyle>
      <HeaderContainer>
        <HeaderLogo></HeaderLogo>

        <ButtonContainer375>
          <ButtonInfo className='p3'>成人向</ButtonInfo>
          <ButtonNotice>
            <BellSvg>
              <ImgItem svg='var(--svg-link-bell)' />
            </BellSvg>
          </ButtonNotice>
        </ButtonContainer375>

        <RowContainer>
          <Info>
            <div className='p4'>最新上架</div>
            <div className='p4'>人氣排行</div>
            <div className='p4'>熱門活動</div>
            <div className='p4'>重要公告</div>
            <div className='p4'>網頁儲值</div>
            <div className='p4'>我的遊戲</div>
          </Info>
          <LanguageItem className='p3'>English</LanguageItem>
          <SearchSvg>
            <ImgItem svg='var(--svg-search)' />
          </SearchSvg>
          <UserStatus className='p3'>
            <div className='p3'>登入</div>
            <div className='p3'>|</div>
            <div className='p3'>註冊</div>
          </UserStatus>
          <MenuSvg>
            <ImgItem svg='var(--svg-menu)'/>
          </MenuSvg>
        </RowContainer>
      </HeaderContainer>
    </HeaderStyle>
    </>
  )

}

export default Header;