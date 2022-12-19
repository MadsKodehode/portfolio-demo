import { BsArrowDown } from "react-icons/bs";
import { useContext } from "react";
import { ContentContext } from "../App";
import { Link } from "react-router-dom";

function ProjectSection() {
  const { projects, hero } = useContext(ContentContext);

  return (
    <section
      id="Projekter"
      before={hero.footer}
      className="bg-light-main h-screen before:content-[attr(before)] before:text-center 
                    before:block before:relative before:-top-32 text-2xl"
    >
      <BsArrowDown className="m-auto -mt-28 relative z-10"></BsArrowDown>
      <h1 className="mt-52 text-center text-5xl">{projects.headline}</h1>
      <div className="flex w-10/12 justify-between mx-auto mt-28">
        <Link to="Projekter/React">
          <div
            className="w-96 h-52 bg-project-card flex items-center justify-center overflow-hidden 
                          rounded-md ease-in transition-all duration-100 hover:shadow-md cursor-pointer"
          >
            <div className="relative w-full h-36 scale-150 -top-28 -rotate-12 bg-white opacity-10"></div>

            <h1 className="absolute z-10">{projects.categoryOne}</h1>
          </div>
        </Link>
        <Link>
          <div
            className="w-96 h-52 bg-project-card flex items-center justify-center overflow-hidden 
                          rounded-md ease-in transition-all duration-100 hover:shadow-md cursor-pointer"
          >
            <div className="relative w-full h-36 scale-150 -top-28 -rotate-12 bg-white opacity-10"></div>
            <h1 className="absolute z-10">{projects.categoryTwo}</h1>
          </div>
        </Link>
        <Link>
          <div
            className="w-96 h-52 bg-project-card flex items-center justify-center overflow-hidden 
                          rounded-md ease-in transition-all duration-100 hover:shadow-md cursor-pointer"
          >
            <div className="relative w-full h-36 scale-150 -top-28 -rotate-12 bg-white opacity-10"></div>
            <h1 className="absolute z-10">{projects.categoryThree}</h1>
          </div>
        </Link>
      </div>
    </section>
  );
}
export default ProjectSection;
