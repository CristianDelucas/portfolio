import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Gallery from "../Gallery/Gallery";
import getIcon from "../../hooks/useIcons";

const ModalExperiencie = ({ isOpen, closeModal, project }) => {
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };

  const handleCloseModal = (e) => {
    const element = document.getElementById("modal_content");
    element.style = "transform: translateY(100px); opacity: 0;";

    setTimeout(() => {
      closeModal();
      // Enable scroll
    }, 500);
  };

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div
          className="fixed top-0 left-0 bottom-0 right-0 z-20 flex  h-screen w-full items-center justify-center  bg-[#141414d8] ease-in-out"
          onClick={handleCloseModal}
        >
          <div
            className="text-text-gray-900 m-5 flex w-[90%] max-w-xl flex-col flex-wrap overflow-hidden rounded-lg bg-slate-100 shadow-2xl dark:bg-slate-900 dark:text-gray-100"
            data-aos="fade-down"
            id="modal_content"
            onClick={handleModalContainerClick}
          >
            <nav className="flex w-full justify-between gap-3 border-b-2 p-4 leading-loose text-white dark:text-gray-700 ">
              <a
                href={project.url}
                className="h-8 w-full flex-1 cursor-pointer select-none overflow-hidden  text-ellipsis rounded-3xl bg-gray-900 px-2 dark:bg-gray-100"
              >
                {project.url}
              </a>
              <button
                className="h-8 w-8 rounded-[100%]    bg-gray-900 font-bold  hover:text-orange-700 dark:bg-gray-100"
                onClick={handleCloseModal}
              >
                X
              </button>
            </nav>
            <div className="flex w-full flex-col items-center justify-center gap-2 p-5 ">
              <div className="w-full text-center text-lg font-bold ">
                {project.name}
              </div>
              <Gallery arrayimages={project.images} />
              <div className="w-11/12 font-medium ">{project.description}</div>
              <div>
                <ul className="flex flex-row gap-x-3 ">
                  {project.front &&
                    project.front.map((el) => <li>{getIcon(el)}</li>)}
                  {project.back &&
                    project.back.map((el) => <li>{getIcon(el)}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalExperiencie;
