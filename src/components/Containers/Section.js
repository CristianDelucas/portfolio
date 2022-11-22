import React from "react";

const Section = ({ title, children, bgColor }) => {
  return (
    <section
      id={title}
      className={
        title === "home"
          ? " bg-wave-1 bg-bottom bg-repeat-x dark:bg-wave-1-dark"
          : " bg-emerald-300 dark:bg-emerald-900"
      }
    >
      {children}
    </section>
  );
};

export default Section;
