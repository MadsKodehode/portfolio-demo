import Logo from "../images/Vector.svg";
import { ContentContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectSection from "./ProjectSection";
function Header() {
  const { navlinks } = useContext(ContentContext);

  return (
    <header className=" w-full h-20 bg-header flex justify-center fixed z-20">
      <div className="flex items-center justify-between w-9/12">
        <Link to="/">
          <img src={Logo} className="w-10 relative left-20 z-10"></img>
        </Link>
        <div className="w-48  bg-banner flex justify-between items-center absolute shadow-md">
          <p className="text-white px-2.5">Coding</p>
          <p className="text-white px-2.5">Design</p>
        </div>

        <div className="flex justify-between w-52">
          <Link to="/#projects">
            <h5 className="text-white">{navlinks.projects}</h5>
          </Link>
          <Link to="/#about">
            <h5 className="text-white">{navlinks.about}</h5>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
