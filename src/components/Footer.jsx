import Logo from "../images/Vector.svg";
import { useContext } from "react";
import { ContentContext } from "../App";
import { Link } from "react-router-dom";
function Footer() {
  const { footer } = useContext(ContentContext);

  return (
    <footer className="mt-50 h-52 bg-header flex justify-between items-center">
      <div className="flex justify-center items-center w-auto px-40">
        <img src={Logo} className="w-16" alt="logo"></img>
        <div className="flex flex-col px-5">
          <h1 className="text-4xl text-blue-light font-semibold drop-shadow-md">
            {footer.thankyou}
          </h1>
          <Link
            to="/Kontakt"
            className="text-xl text-white hover:underline hover:decoration-orange-strong"
          >
            {footer.contact}
          </Link>
          <p className=""></p>
        </div>
      </div>
      <Link
        className="px-40 text-xl text-white hover:underline hover:decoration-orange-strong"
        to="/"
      >
        {footer.toTop}
      </Link>
    </footer>
  );
}

export default Footer;
