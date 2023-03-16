import styled from "styled-components"

const Svg = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: contain;
  `

const SvgItem = ({svg})=>{
  return <Svg style={{backgroundImage:`${svg}`}}></Svg>
}

export default SvgItem;