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
