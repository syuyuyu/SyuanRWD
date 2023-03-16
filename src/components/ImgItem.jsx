import styled from "styled-components"

const Svg = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: contain;
  `

const ImgItem = ({src})=>{
  return <Svg style={{backgroundImage:`${src}`}}></Svg>
}

export default ImgItem;