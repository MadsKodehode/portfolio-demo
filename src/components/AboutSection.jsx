import AboutImage from "../images/MadsiTrappen.JPG";
import content from "../data/textContent";
import { useLocation } from "react-router";
import { useEffect } from "react";
function AboutSection() {
  const { about } = content;

  return (
    <section id="about" className="bg-light-main h-screen overflow-auto">
      <div className="w-4/5 h-4/5 bg-orange-diffuse mx-auto mt-24 overflow-hidden flex">
        <div className="w-2/3">
          <img src={AboutImage} className="relative -top-32"></img>
        </div>
        <div className="w-2/3 flex flex-col flex-wrap items-center p-5">
          <h1 className="text-5xl font-bold text-headline-dark p-5">
            {about.headline}
          </h1>
          <h5 className="text-lg text-center">{about.subheading}</h5>
          <p className="text-center leading-7 py-2 w-11/12">{about.body}</p>
          <p className="text-center font-semibold py-5">{about.prefooter}</p>

          <p className="w-3/4 text-center flex">{about.footer}</p>
          <div className="ml-96 py-2 underline">{about.readmore}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
