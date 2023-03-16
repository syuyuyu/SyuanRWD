import { createGlobalStyle } from "styled-components";
import headerLogo from "../../../src/assets/icons/header-logo.svg";
import linkBell from "../../../src/assets/icons/link-bell.svg";
import search from "../../../src/assets/icons/search.svg";
import menu from "../../../src/assets/icons/menu.svg";

export const GlobalStyle = createGlobalStyle`
:root{
  --color-white:#FFFFFF;
  --color-black: #1E1E1E;
  --color-black_200:#C7C7C7;
  --color-black_300:#B0B0B0;
  --color-black_400:#9B9B9B;
  --color-black_500:#868686;
  --color-black_600:#727272;
  --color-black_900:#393939;
  --color-red: #DE280A;
  --svg-header-logo:url(${headerLogo});
  --svg-link-bell:url(${linkBell});
  --svg-search:url(${search});
  --svg-menu:url(${menu});
}


html,body {
  font-family: Helvetica;
  box-sizing: border-box;
  font-size: 16px;
  min-width: 375px;
  background-color: var(--color-black);
  @media (max-width: 1024px) {
  }
  @media (max-width: 1441px) {
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


