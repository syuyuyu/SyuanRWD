import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --color-white:#FFFFFF;
  --color-black: #000000;
  --color-black_200:#C7C7C7;
  --color-black_300:#B0B0B0;
  --color-black_400:#9B9B9B;
  --color-black_500:#868686;
  --color-black_900:#393939;
  --color-red: #DE280A;
}


html,body {
  font-family: Helvetica;
  box-sizing: border-box;
  font-size: 16px;
  min-width: 375px;
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
  line-height: 17px;
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


