import Main from "./components/Main.jsx";
import Wrapper from "./components/Wrapper.jsx";
import Header from "./components/Header/Header.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
