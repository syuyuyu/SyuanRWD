import styled from "styled-components";
import ImgItem from "./ImgItem";

const LinkContainer= styled.div`
  height: 26px;
  width: 26px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
`
const IconWrap = styled.div`
  height: 17px;
  width: 17px;
  cursor: pointer;
  opacity: 0.8;
`


const LinkIcon = ({src,style})=>{
  return (
    <LinkContainer>
      <IconWrap style={style}>
        <ImgItem src={src}/>
      </IconWrap>
    </LinkContainer>
  )
};

export default LinkIcon;