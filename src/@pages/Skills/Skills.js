import React from "react";
import getIcon from "../../hooks/useIcons";

const Skills = () => {
  const _skills = [
    "JAVASCRIPT",
    "HTML",
    "SASS",
    "CSS",
    "NEXTJS",
    "REACT",
    "ANGULAR",
    "TAILWIND",
    "NODE",
    "FIREBASE",
    "VIMEO",
  ];

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-center text-3xl font-black xl:text-4xl ">Skills</h2>
      <ul className="flex flex-row flex-wrap  justify-center gap-4">
        {_skills && _skills.map((el) => <li>{getIcon(el)}</li>)}
      </ul>
    </div>
  );
};

export default Skills;
