import content from "./data/textContent";
import AboutImage from "./images/MadsiTrappen.JPG";
import Logo from "./images/Vector.svg";
import Mask from "./images/Mask.svg";
import Header from "./components/Header";
import Main from "./components/Main";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import { createContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
export const ContentContext = createContext(content);

//This is a test portfolio and it may not display well on larger or smaller screen sizes\\
function App() {
  return (
    <div className="App">
      <ContentContext.Provider value={content}>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
        </Routes>
      </ContentContext.Provider>
    </div>
  );
}

export default App;
