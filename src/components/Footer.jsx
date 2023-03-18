import styled from "styled-components";
import ImgItem from "./items/ImgItem";
import LinkIcon from "./items/Links";

const FooterContainer= styled.div`
  margin-top: 82px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 293px;
  width: 100%;
  @media (min-width: 1024px) {
    margin-top: 117px;
    width: 1024px;
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1441px) {
    width: 1440px;
    margin-top: 149px;

  }
`

const CompanyInfo= styled.div`
  position: absolute;
  width: 345px;
  height: 100%;
  top: 0px;
  @media (min-width: 1024px) {
    position: relative;
    display: flex;
    align-items: center;
    width: 459px;
    margin-left: 31px;
    margin-right: 16px;
  }
  @media (min-width: 1441px) {
    width: 533px;
    margin-right: 342px;
    margin-left: 47px;
  }
  
  & .p4{
    position: absolute;
    left: 71px;
    bottom: 23px;
    color: var(--color-white);
    opacity: 0.7;
    @media (min-width: 1024px) {
      position: relative;
      left: 0px;
      bottom: 0;
      width: 211px;
    }
    @media (min-width: 1441px) {
      width: 100%;
    }
  }
`
const LogoContainer= styled.div`
  position: absolute;
  width: 232px;
  height: 36px;
  top: 0;
  left: 58px;
  @media (min-width: 1024px) {
    position: relative;
    left: 0px;
    margin-right: 15px;
  }
  @media (min-width: 1441px) {
    margin-right: 90px;
    width: 100%;
  }
  `

// const Content= styled.div`
// position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
// `

const DropDownContainer= styled.div`
  position: relative;
  top:70px;
  display: inline-block;
  /* width: 100%; */
  @media (min-width: 1024px) {
    position: absolute;
    top:24px;
    left: 920px;
    /* width: 1024px; */
  }
  @media (min-width: 1441px) {
    left: unset;
    right: 30px;

  }
`
const DropDownBtn= styled.div`
  color: var(--color-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.7;
`
const IconContainer= styled.div`
  width: 7px;
  height: 8px;
  margin-left: 8px;

  &::after{
  @media (min-width: 1024px) {
   content: '';
   position: absolute;
   border: 1px dashed var(--color-white);
   opacity: 0.6;
   width: 1px;
   height: 32px;
   top: -10px;
   left: -31px;
  }
  }

`

// 下拉選單
// const DropDownContent= styled.div`
//   display: none;
//   position: absolute;
//   z-index: 1;
// `


const Contact= styled.div`
  position: relative;
  top: 105px;
  height: 29px;
  border: 1px solid var(--color-black_800);
  margin: 0 18px 0 16px;
  text-align: center;
  cursor: pointer;
  @media (min-width: 1024px) {
    top: 0px;
  }
  @media (min-width: 1441px) {
    margin: 0 18px 0 0 ;

  }

  & .p3{
    width: 107px;
    line-height: 29px;
    text-align: center;
    color: var(--color-white);
    opacity: 0.7;
  }


`


const Links = styled.div`
  position: relative;
  top: 142px;
  /* width: 100%; */
  height: auto;
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    top: 0px;
    left: -5px;
  }
`


const Footer = ()=>{
  return(
    <FooterContainer>
      <CompanyInfo>
        <LogoContainer>
          <ImgItem src='var(--svg-footer-logo)'/>
        </LogoContainer>
        <div className="p4">Copyright © 2023 Crypto City.</div>
      </CompanyInfo>

      <DropDownContainer>
        <DropDownBtn>
          <div className="p4" style={{fontWeight:700}}>一般向遊戲 </div>
          <IconContainer>
            <ImgItem src='var(--svg-arrow-down)'/>
          </IconContainer>
        </DropDownBtn>
        {/* 下拉選單 */}
        {/* <DropDownContent> */}
          {/* <a href="#">下拉選單內容</a> */}
        {/* </DropDownContent> */}
      </DropDownContainer>


      <Contact className=" no-show-1441">
        <div className="p3">聯繫客服</div>
      </Contact>
      
      <Contact className="show-1441">
        <div className="p3">contact us</div>
      </Contact>



      <Links>
        <LinkIcon src='var(--svg-link-facebook)'/>
        <LinkIcon src='var(--svg-link-vector)'/>
        <LinkIcon src='var(--svg-link-twitter)'/>
        <LinkIcon src='var(--svg-link-line)'/>
        <LinkIcon src='var(--svg-link-camera)' style={{width:'16px',height:'16px'}}/>
        <LinkIcon src='var(--svg-link-discord)'style={{width:'18px',height:'18px'}}/>
      </Links>




    </FooterContainer>
  )
};

export default Footer;