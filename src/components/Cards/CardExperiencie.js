import Aos from "aos";
import React, { useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import ModalExperiencie from "../Modals/ModalExperiencie";

const CardExperiencie = ({ project }) => {
  const [isOpen, openModal, closeModal] = useModal(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        className="gap-y-0.5 rounded-lg border-2 border-solid  bg-slate-300 p-4 shadow-lg  dark:border-slate-700 dark:bg-slate-800"
        data-aos="zoom-in"
      >
        <div className="flex flex-col gap-2">
          <figure
            className="group block h-36 cursor-pointer overflow-hidden rounded-lg"
            onClick={openModal}
          >
            <img
              className="  h-full w-full   rounded-lg object-cover  transition-transform duration-1000 group-hover:rotate-6 group-hover:scale-125"
              src={project.miniature}
              alt="logo"
            />
            <span className="absolute bottom-16 right-5 rounded-lg bg-slate-300 p-1 group-hover:bg-slate-400 dark:bg-slate-800 dark:group-hover:bg-slate-700">
              👁‍🗨 Ver más
            </span>
          </figure>

          <footer className="text-center text-xl">
            <a
              href={project.url}
              target={project.url === "#proyectos" ? "" : "_blank"}
              rel="noreferrer"
              className="cursor-pointer font-medium"
            >
              {project.name}
            </a>
          </footer>
        </div>
      </div>

      <ModalExperiencie
        isOpen={isOpen}
        closeModal={closeModal}
        project={project}
      />
    </>
  );
};

export default CardExperiencie;
