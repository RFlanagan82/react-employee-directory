import React from "react";
// import Main from "./components/Main.jsx";
import Wrapper from "./components/Wrapper.jsx";
import Header from "./components/Header/Header.jsx";


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
