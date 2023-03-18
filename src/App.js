import { GlobalStyle } from "./components/common/globalStyle";
import { ResetStyle } from "./components/common/resetStyle";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;


// - 時間
//     1. 元件拆解 1hr
//     2. 下載圖檔、設置global參數 10min
//     3. header 切版1.5hr
//     4. 切版5.5hr
//     5. 調整細節+1024 RWD 2hr
//     6. 1441 RWD+細節調整 4hr

// - 使用技術
//     1. Creact-React-App 架設專案
//     2. CSS使用Styled-component
//     3. backdrop-filter處理模糊效果
//     4. 僞元素製作連接線
//     5. flex調整版面
//     6. 搭配position處理特別位置的元件