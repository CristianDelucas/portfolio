import React from "react";

const Section = ({ title, children, bgColor }) => {
  return (
    <section
      id={title}
      className={
        title === "home"
          ? " bg-wave-1 bg-bottom bg-repeat-x"
          : " bg-[#7bdcb5]"
      }
    >
      {children}
    </section>
  );
};

export default Section;
