import styled from "styled-components";
import ImgItem from "../items/ImgItem";

const AlbumContainer = styled.div`
  position: relative;
  top: -64px;
  @media (min-width: 1024px) {
    width: 100%;
    overflow: hidden;
    margin-bottom: 80px;
  }
`
const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 1024px) {
    display: flex;
    width: 2400px;
    position: relative;
    left: -50%;
    transform: translateX(5%);
  }
`
const ImgRow = styled.div`
  width: 345px;
  height: 220px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: 563px;
    height: 359px;
    border-radius: 12px;
    margin: 0 10px;
  }
  &.not-center{
    display: none;
    @media (min-width: 1024px) {
      display: block;
      opacity: 0.56;
    }
  }
`

const ImgController = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 18px;
  overflow: hidden;
`
const Scroll = styled.div`
  display: flex;
  height: 74px;
  width: 2400px;
  position: relative;
  left: -390px;
  @media (min-width: 1024px) {

  }
  `

const ImgScroll = styled.div`
  width: 116px;
  height: 74px;
  margin: 0 6px;
  border-radius:12px;
  cursor: pointer;
  &.not-target{
    opacity: 0.3;
  }
`

const Album = ()=>{
  return(
    <AlbumContainer>
      <ImgContainer>
        <ImgRow className="not-center">
          <ImgItem src='var(--img-album-03)'/>
        </ImgRow>
        <ImgRow>
          <ImgItem src='var(--img-album-04)'/>
        </ImgRow>
        <ImgRow className="not-center">
          <ImgItem src='var(--img-album-05)'/>
        </ImgRow>
      </ImgContainer>



      <ImgController>
        <Scroll>
          <ImgScroll className='not-target'>
            <ImgItem src='var(--img-scroll-05)'/>
          </ImgScroll>
          <ImgScroll className='not-target'>
            <ImgItem src='var(--img-scroll-06)'/>
          </ImgScroll>
          <ImgScroll className='not-target'>
            <ImgItem src='var(--img-scroll-07)'/>
          </ImgScroll>

          <ImgScroll className='not-target'>
            <ImgItem src='var(--img-scroll-08)'/>
          </ImgScroll>

          <ImgScroll>
            <ImgItem src='var(--img-scroll-01)'/>
          </ImgScroll>

          <ImgScroll className='not-target'>
            <ImgItem src='var(--img-scroll-02)'/>
          </ImgScroll>

          <ImgScroll className='not-target'>
            <ImgItem src='var(--img-scroll-03)'/>
          </ImgScroll>

          <ImgScroll className='not-target'>
            <ImgItem src='var(--img-scroll-04)'/>
          </ImgScroll>

          <ImgScroll className='not-target'>
            <ImgItem src='var(--img-scroll-05)'/>
          </ImgScroll>
          <ImgScroll className='not-target'>
            <ImgItem src='var(--img-scroll-06)'/>
          </ImgScroll>
          <ImgScroll className='not-target'>
            <ImgItem src='var(--img-scroll-07)'/>
          </ImgScroll>

        </Scroll>
      </ImgController>

    </AlbumContainer>
  )
};

export default Album;