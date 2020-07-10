import React from "react";
import { Waypoint } from "react-waypoint";
import { useSetRecoilState, useRecoilValue } from "recoil";
import "./hero.styles.scss";

import { activeSectionState } from "../../atoms/activeSectionState";
import { themeState } from "../../atoms/themeState";


const Hero = (props) => {
  const setActiveSection = useSetRecoilState(activeSectionState);
  const theme = useRecoilValue(themeState);
  
  return (
    <> 
      <Waypoint onEnter={() => setActiveSection("top")} />
      <section
        id="top"
        className="h-screen bg-primary flex items-center justify-center flex-wrap flex-col hero"
      >
        <div className="container flex flex-wrap flex-col text-center px-4">
          <h2 className="text-secondary mb-0 text-3xl lg:text-6xl">
            Todd Christensen
          </h2>
          <h3 className="text-quartary text-lg lg:text-3xl">React.js Software Engineer</h3>
          <span className={`primary-font mt-3 inline-block description ${theme === 'dark' ? `text-gray-400`: `text-gray-700`}`}>
            I'm a remote based software engineer from California, currently
            residing in the Philippines{" "}
            <span role="img" aria-label="Philippines Flag">
              🇵🇭
            </span>
            . I am looking for a position, remote or location-based.
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
