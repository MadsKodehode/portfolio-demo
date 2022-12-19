import Header from "./Header";
import Main from "./Main";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import { Route, Routes, useLocation, useParams } from "react-router";
function MainPage() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <ProjectSection></ProjectSection>
      <AboutSection></AboutSection>
      <Footer></Footer>
    </>
  );
}

export default MainPage;
