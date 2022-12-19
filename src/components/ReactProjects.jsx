import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function ReactProjects() {
  return (
    <section className="bg-hero h-screen overflow-y-hidden">
      <header>
        <Link to="/" className="p-2 hover:text-white">
          Tilbake
        </Link>
        <div className="flex justify-between items-center w-4/5 m-auto py-5">
          <h1 className="text-4xl">React Projekter</h1>
          <div className="flex">
            <Link className="text-2xl mx-5 hover:underline hover:cursor-pointer hover:decoration-orange-strong">
              HTML & CSS
            </Link>
            <Link className="text-2xl mx-5 hover:underline hover:cursor-pointer hover:decoration-orange-strong">
              Vanilla Javascript
            </Link>
          </div>
        </div>
      </header>
      <div className="flex w-4/5 justify-between mx-auto my-10">
        <div className="w-1/2 h-80 bg-header"></div>
        <div className="flex flex-col items-start">
          <h2 className="text-5xl py-5">Projekt tittel</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, porro.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-4/5 mx-auto">
        <div className="w-1/2 h-96 bg-header opacity-50 flex items-center justify-center"></div>
        <IoIosArrowDown className="text-2xl text-white relative bottom-60 left-72 z-10 hover:scale-x-110 cursor-pointer"></IoIosArrowDown>
      </div>
    </section>
  );
}

export default ReactProjects;
