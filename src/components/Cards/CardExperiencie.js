import React from "react";
import { useModal } from "../../hooks/useModal";
import ModalExperiencie from "../Modals/ModalExperiencie";

const CardExperiencie = ({ project }) => {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <>
      <div className="gap-y-0.5 rounded-lg border-2 border-solid bg-slate-300 p-4 shadow-lg">
        <div className="flex flex-col gap-2">
          <figure
            className="block h-36 cursor-pointer overflow-hidden rounded-lg "
            onClick={openModal}
          >
            <img
              className="  h-full w-full   rounded-lg object-cover  transition-transform duration-1000   hover:rotate-6 hover:scale-125"
              src={project.miniature}
              alt="logo"
            />
          </figure>
          
          <footer className="text-center">
            <a href={project.url} target={project.url==='#proyectos'?'':"_blank"} rel="noreferrer" className="font-medium cursor-pointer">{project.name}</a>
          </footer>
        </div>
      </div>

      <ModalExperiencie isOpen={isOpen} closeModal={closeModal} project={project} />
    </>
  );
};

export default CardExperiencie;
