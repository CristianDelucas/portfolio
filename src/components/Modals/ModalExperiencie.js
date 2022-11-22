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
    }, 500);
  };

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      {isOpen ? (
        <div
          className="fixed top-0 left-0 bottom-0 right-0 z-20 flex  h-screen w-full items-center justify-center bg-[#141414d8] ease-in-out"
          onClick={handleCloseModal}
        >
          <div
            className="m-5 flex max-w-xl flex-col flex-wrap rounded-lg bg-slate-100 dark:bg-slate-900 shadow-2xl w-[90%] overflow-hidden text-text-gray-900 dark:text-gray-100"
            data-aos="fade-down"
            id="modal_content"
            onClick={handleModalContainerClick}
          >
            <nav className="flex w-full justify-between border-b-2 p-4 gap-3 leading-loose text-white dark:text-gray-700 ">
              <a href={project.url} className="flex-1 w-full h-8 px-2 select-none rounded-3xl  bg-gray-900 dark:bg-gray-100 overflow-hidden text-ellipsis cursor-pointer">
                {project.url}
              </a>
              <button
                className="w-8 h-8 rounded-[100%]    bg-gray-900 dark:bg-gray-100  font-bold hover:text-orange-700"
                onClick={handleCloseModal}
              >
                X
              </button>
            </nav>
            <div className="flex flex-col items-center justify-center gap-2 p-5 w-full ">
            <div className="w-full text-center text-lg font-bold ">{project.name}</div>
            <Gallery arrayimages={project.images}/>
              <div className="w-11/12 font-medium ">
                {project.description}
              </div>
              <div>
                <ul className="flex flex-row gap-x-3 ">
                  {project.front&& project.front.map((el) => <li>{getIcon(el)}</li>)}
                  {project.back&& project.back.map((el) => <li>{getIcon(el)}</li>)}
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
