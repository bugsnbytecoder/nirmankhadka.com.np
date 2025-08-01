import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "./Tech.css";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="octagon-container" key={technology.name}>
          <div className="octagon">
            <img src={technology.icon} alt={technology.name} className="octagon-icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
