import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import HomeTemplate from "./components/HomeTemplate/home_template";

import Home from "./components/Main/Home/home";
import Footer from "./components/Footer/footer";
import { IconContext } from "./components/Context/icon_context";
import Header from "./components/Header/header";

const GlobalStyled = createGlobalStyle`
  body{
    background-color:#e9ecef;
    height: 100vh;
    width:100vw;
    margin: 0;
    padding:0;
  }
`;

function App() {
  return (
    <IconContext>
      <GlobalStyled />
      <HomeTemplate>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </HomeTemplate>
    </IconContext>
  );
}

export default App;
