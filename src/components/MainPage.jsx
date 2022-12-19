import Header from "./Header";
import Main from "./Main";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import { useEffect } from "react";
import { Route, Routes, useLocation, useParams } from "react-router";
function MainPage() {
  //Use location to get the current location object of the url\\
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    //If there is a hash it will create a var and get elemement by id that is the same as the hash slice out the #
    // to then scroll that element into view if there is any
    if (location.hash) {
      let elemement = document.getElementById(location.hash.slice(1));

      if (elemement) {
        elemement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
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
