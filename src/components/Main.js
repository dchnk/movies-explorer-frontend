import React from "react";
import AboutMe from "./AboutMe";
import AboutProject from "./AboutProject";
import Portfolio from "./Portfolio";
import Promo from "./Promo";
import Techs from "./Techs";

function Main() {
  const ref1 = React.useRef(null);
  const buttonHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className='main' style={{
      flex: "auto",
      scrollBehavior: 'smooth',
    }}>
      <Promo smoothScrolling={buttonHandler} componentRef={ref1}/>
      <AboutProject componentRef={ref1}/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </main>
  );
}

export default Main;
