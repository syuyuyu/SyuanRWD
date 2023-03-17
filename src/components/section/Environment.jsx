import styled from "styled-components";
import TitleItem from "../items/TitleItem";

const EnvContainer = styled.div`
  margin-top: 75px;
  width: 100%;
  height: auto;
  & .p1{
    width: 345px;
    margin: 0 auto;
    color: var(--color-black_200);
    @media (min-width: 1024px) {
      width: 920px;
      margin: 0 52px;
    }
  }
  @media (min-width: 1024px) {
    width: 920px;
    margin: 104px auto 0 auto;
  }
`

const Environment = ()=>{
  return(
    <EnvContainer>
      <TitleItem content='遊戲運作環境'/>
      <div className="p1">
        ■作業系統需求<br></br>
        【PC】<br></br>
        ・Windows10/11<br></br>
        Google Chrome 64bit 86.0以上<br></br>
        ・MacOS v10.15 (Catalina)以上<br></br>
        <br></br>
        ■推薦瀏覽器<br></br>
        Google Chrome 最新版<br></br>
        Mozilla Firefox 最新版<br></br>
        Microsoft Edge 最新版<br></br>
        <br></br>
        ※使用推薦瀏覽器以外的瀏覽器進行遊戲時，不保證可以正常運作<br></br>
        ※使用推薦瀏覽器以外的瀏覽器進行遊戲、遊戲運作出現問題時，不保證會進行修復或是退費，敬請見諒<br></br>
      </div>
    </EnvContainer>
  )
};

export default Environment;