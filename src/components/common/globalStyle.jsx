import { createGlobalStyle } from "styled-components";
import headerLogo from "../../../src/assets/icons/header-logo.svg";
import footerLogo from "../../../src/assets/icons/footer-logo.svg";
import linkBell from "../../../src/assets/icons/link-bell.svg";
import linkEarth from "../../../src/assets/icons/link-earth.svg";
import facebook from "../../../src/assets/icons/link-facebook.svg";
import vector from "../../../src/assets/icons/link-vector.svg";
import twitter from "../../../src/assets/icons/link-twitter.svg";
import line from "../../../src/assets/icons/link-line.svg";
import camera from "../../../src/assets/icons/link-camera01.svg";
import discord from "../../../src/assets/icons/link-discord.svg";
import search from "../../../src/assets/icons/search.svg";
import menu from "../../../src/assets/icons/menu.svg";
import arrowleft from "../../../src/assets/icons/arrow-left.svg";
import arrowright from "../../../src/assets/icons/arrow-right.svg";
import arrowdown from "../../../src/assets/icons/arrow-down.svg";


import topImg from "../../../src/assets/images/top-img.png";
import avatar from "../../../src/assets/images/avatar.png";
import album03 from "../../../src/assets/images/album03.png";
import album04 from "../../../src/assets/images/album04.png";
import album05 from "../../../src/assets/images/album05.png";
import scroll01 from "../../../src/assets/images/scroll01.png";
import scroll02 from "../../../src/assets/images/scroll02.png";
import scroll03 from "../../../src/assets/images/scroll03.png";
import scroll04 from "../../../src/assets/images/scroll04.png";
import scroll05 from "../../../src/assets/images/scroll05.png";
import scroll06 from "../../../src/assets/images/scroll06.png";
import scroll07 from "../../../src/assets/images/scroll07.png";
import scroll08 from "../../../src/assets/images/scroll08.png";
import intro01 from "../../../src/assets/images/intro01.png";
import intro02 from "../../../src/assets/images/intro02.png";
import background from "../../../src/assets/images/background.png";
import background01 from "../../../src/assets/images/background01.png";
import backgroundTop from "../../../src/assets/images/background-top.png";
import backgroundDown from "../../../src/assets/images/background-down.png";

export const GlobalStyle = createGlobalStyle`
:root{
  --color-white:#FFFFFF;
  --color-black: #141414;
  --color-black_200:#C7C7C7;
  --color-black_300:#B0B0B0;
  --color-black_400:#9B9B9B;
  --color-black_500:#868686;
  --color-black_600:#727272;
  --color-black_800:#4B4B4B;
  --color-black_900:#393939;
  --color-red: #DE280A;
  --svg-header-logo:url(${headerLogo});
  --svg-footer-logo:url(${footerLogo});
  --svg-link-bell:url(${linkBell});
  --svg-link-earth:url(${linkEarth});
  --svg-link-facebook:url(${facebook});
  --svg-link-vector:url(${vector});
  --svg-link-twitter:url(${twitter});
  --svg-link-line:url(${line});
  --svg-link-camera:url(${camera});
  --svg-link-discord:url(${discord});
  --svg-search:url(${search});
  --svg-menu:url(${menu});
  --svg-arrow-left:url(${arrowleft});
  --svg-arrow-right:url(${arrowright});
  --svg-arrow-down:url(${arrowdown});


  --img-top-img:url(${topImg});
  --img-avatar: url(${avatar});
  --img-album-03: url(${album03});
  --img-album-04: url(${album04});
  --img-album-05: url(${album05});
  --img-scroll-01:url(${scroll01});
  --img-scroll-02:url(${scroll02});
  --img-scroll-03:url(${scroll03});
  --img-scroll-04:url(${scroll04});
  --img-scroll-05:url(${scroll05});
  --img-scroll-06:url(${scroll06});
  --img-scroll-07:url(${scroll07});
  --img-scroll-08:url(${scroll08});
  --img-intro-01:url(${intro01});
  --img-intro-02:url(${intro02});
  --img-background:url(${background});
  --img-background-01:url(${background01});
  --img-background-top:url(${backgroundTop});
  --img-background-down:url(${backgroundDown});
}


html,body {
  font-family: Helvetica;
  box-sizing: border-box;
  font-size: 16px;
  min-width: 375px;
  background-color: rgba(0,0,0,1);
  @media (min-width: 1024px) {
  }
  @media (min-width: 1441px) {
  }
}

.p1{
  font-size: 16px;
  line-height: 24px;
  font-weight: 400; /*or 300*/
  letter-spacing: 0.25px;
}
.p3{
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  letter-spacing: 0.8px;
}
.p4{
  font-size: 14px;
  line-height: 16.8px;
  font-weight: 300;
  letter-spacing: 0.8px;
}


.btn3{
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  letter-spacing: 1.25px;
}
.btn4{
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 1.25px;
}


h3{
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    font-weight: 700;
}

.show-1441{
  display: none;
  @media (min-width: 1441px) {
    display: block;
  }
}
.no-show-1441{
  display: block;
  @media (min-width: 1441px) {
    display: none;
  }
};

`;


