import content from "./data/textContent";

import MainPage from "./components/MainPage";
import ReactProjects from "./components/ReactProjects";
import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./components/ContactPage";
export const ContentContext = createContext(content);

//This is a test portfolio and it may not display well on larger or smaller screen sizes\\
function App() {
  return (
    <div className="bg-light-main">
      <ContentContext.Provider value={content}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="Projekter/React" element={<ReactProjects />}></Route>
          <Route path="/Kontakt" element={<ContactPage />}></Route>
        </Routes>
      </ContentContext.Provider>
    </div>
  );
}

export default App;
