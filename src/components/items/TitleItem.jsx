import styled from "styled-components";
import ImgItem from "./ImgItem";

const TitleContainer = styled.div`
  color:var(--color-white);
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  
  @media (min-width: 1024px) {
    width: 920px;
  }
`
const ArrowContainer = styled.div`
  width: 27px;
  height: 100%;
  display: flex;
  `

const TitleItem = ({content})=>{
  return (
    <>
      <TitleContainer>
        <ArrowContainer>
          <ImgItem src='var(--svg-arrow-left)' />
        </ArrowContainer>
        <div>
          <h3>{content}</h3>
        </div>
        <ArrowContainer>
          <ImgItem src='var(--svg-arrow-right)' />
        </ArrowContainer>
      </TitleContainer>
    </>
  )
};

export default TitleItem;