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
`

const CompanyInfo= styled.div`
  position: absolute;
width: 100%;
height: 100%;
left: 65px;
& .p4{
  position: absolute;
  color: var(--color-white);
  opacity: 0.7;
  bottom: 23px;
}
`
const LogoContainer= styled.div`
  width: 232px;
  height: 36px;
  top: 0;
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
  top:100px;
  display: inline-block;
`
const DropDownBtn= styled.div`
  color: var(--color-white);
  cursor: pointer;
  display: flex;
  align-items: center;
opacity: 0.7;
`
const IconContainer= styled.div`
  width: 4.7px;
  height: 8px;
  margin-left: 8px;
`

// 下拉選單
// const DropDownContent= styled.div`
//   display: none;
//   position: absolute;
//   z-index: 1;
// `


const Contact= styled.div`
position: relative;
top: 130px;
  width: 107px;
  height: 29px;
  cursor: pointer;
  border: 1px solid var(--color-black_800);
  text-align: center;
  & .p3{
    line-height: 29px;
    color: var(--color-white);
    opacity: 0.7;
  }
`


const Links = styled.div`
position: relative;
top: 150px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
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
{/* <Content> */}
      <DropDownContainer>
        <DropDownBtn>
          <div className="p4">一般向遊戲 </div>
          <IconContainer>
            <ImgItem src='var(--svg-arrow-down)'/>
          </IconContainer>
        </DropDownBtn>

        {/* 下拉選單 */}
        {/* <DropDownContent> */}
          {/* <a href="#">下拉選單內容</a> */}
        {/* </DropDownContent> */}

      </DropDownContainer>

      <Contact>
        <div className="p3">聯繫客服</div>
      </Contact>

      <Links>
        <LinkIcon src='var(--svg-link-facebook)'/>
        <LinkIcon src='var(--svg-link-vector)'/>
        <LinkIcon src='var(--svg-link-twitter)'/>
        <LinkIcon src='var(--svg-link-line)'/>
        <LinkIcon src='var(--svg-link-camera)' style={{width:'16px',height:'16px'}}/>
        <LinkIcon src='var(--svg-link-discord)'style={{width:'18px',height:'18px'}}/>
      </Links>

{/* </Content> */}



    </FooterContainer>
  )
};

export default Footer;