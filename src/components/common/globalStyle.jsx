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
import album04 from "../../../src/assets/images/album04.png";
import scroll03 from "../../../src/assets/images/scroll03.png";
import scroll04 from "../../../src/assets/images/scroll04.png";
import scroll05 from "../../../src/assets/images/scroll05.png";
import intro01 from "../../../src/assets/images/intro01.png";
import intro02 from "../../../src/assets/images/intro02.png";

export const GlobalStyle = createGlobalStyle`
:root{
  --color-white:#FFFFFF;
  --color-black: #1E1E1E;
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
  --img-album-04: url(${album04});
  --img-scroll-03:url(${scroll03});
  --img-scroll-04:url(${scroll04});
  --img-scroll-05:url(${scroll05});
  --img-intro-01:url(${intro01});
  --img-intro-02:url(${intro02});
}


html,body {
  font-family: Helvetica;
  box-sizing: border-box;
  font-size: 16px;
  min-width: 375px;
  background-color: var(--color-black);
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

`;


