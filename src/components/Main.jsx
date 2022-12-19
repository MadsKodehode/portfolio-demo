import { useContext } from "react";
import { ContentContext } from "../App";
function Main() {
  const { hero } = useContext(ContentContext);
  return (
    <main
      className="h-screen max-h-full bg-fixed relative bg-hero overflow-auto overflow-y-hidden overflow-x-hidden 
                  after:content-[url('images/Mask.svg')] after:relative after:top-20"
    >
      <h1 className="text-headline-blue font-semibold text-8xl text-center mt-44">
        {hero.headline}
      </h1>
      <p className="text-headline-dark text-3xl text-center mx-auto mt-12">
        {hero.body}
      </p>
    </main>
  );
}
export default Main;
