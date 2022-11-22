import Aos from "aos";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import useWindowSize from "../../../hooks/useWindowSize";
import Sidebar from "./Sidebar/Sidebar";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const size = useWindowSize();

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (size.width > 768) {
      setIsOpen(false);
    }
  }, [size.width]);

  return (
    <nav className="trasition-['0.3s ease-in-out'] fixed top-0 left-0 z-10 grid h-16 w-full items-center bg-transparent backdrop-blur-sm md:flex md:flex-row md:justify-end dark:text-slate-100">
      <div className="absolute top-5 left-5 z-20 cursor-pointer outline-none ">
        <span className="font-MrDafoe text-2xl">Cristian</span>
      </div>
      <div
        className="absolute top-7 right-5 z-20 cursor-pointer outline-none md:hidden"
        onClick={toggle}
      >
        {isOpen ? (
          <FaTimes data-aos="zoom-out" />
        ) : (
          <FaBars data-aos="zoom-out" />
        )}
      </div>
      {size.width < 768 ? (
        isOpen ? (
          <Sidebar toggle={toggle} />
        ) : (
          ""
        )
      ) : (
        <div
          className={`mx-10 invisible md:bg-transparent md:visible`}
          data-aos="zoom-out"
        >
          <ul
            className={`gap-15 flex flex-row items-center justify-evenly p-0 text-xl font-bold  md:h-auto md:w-full md:flex-row md:gap-10 `}
          >
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre mi</a>
            </li>
            <li>
              <a href="#proyects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
