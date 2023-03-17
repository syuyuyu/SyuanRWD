import styled from "styled-components";
import ImgItem from "../items/ImgItem";

const AlbumContainer = styled.div`
  position: relative;
  top: -64px;
`
const ImgContainer = styled.div`
  width: 345px;
  height: 220px;
  margin: 0 auto;
`
const ImgController = styled.div``

const ControllerImgContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 18px;
`
const Scroll = styled.div`
  display: flex;
  height: 74px;
  overflow: hidden;
  div{
    margin-right: 12px;
    cursor: pointer;
    opacity: 0.3;
  }
  .target{
    opacity: 1;
  }
  `

const Album = ()=>{
  return(
    <AlbumContainer>

      <ImgContainer>
        <ImgItem src='var(--img-album-04)'/>
      </ImgContainer>

      <ImgController>
        <ControllerImgContainer>
          <Scroll>
            <ImgItem src='var(--img-scroll-03)'/>
            <ImgItem src='var(--img-scroll-04)' className='target'/>
            <ImgItem src='var(--img-scroll-05)'/>
          </Scroll>
        </ControllerImgContainer>
      </ImgController>

    </AlbumContainer>
  )
};

export default Album;