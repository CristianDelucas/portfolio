import React from "react";
import { useModal } from "../../hooks/useModal";
import ModalExperiencie from "../Modals/ModalExperiencie";
const CardExperiencie = ({ proyecto }) => {

  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <>
    <div className=" rounded-lg border-2 border-solid gap-y-0.5 shadow-lg p-4 bg-slate-300  " >
    <div className="flex flex-col gap-5">
      <figure className="flex overflow-hidden rounded-lg cursor-pointer" onClick={openModal}>
        <img
          className="h-auto w-60 max-w-full rounded-lg  transition-transform duration-1000   hover:rotate-6 hover:scale-150"
          src="https://randomuser.me/api/portraits/men/70.jpg"
          alt="logo"
        />
      </figure>

      <footer className="text-center">
        <h3 >{proyecto}</h3>
        <a>Link</a>
      </footer>
      </div>
    </div>
    <ModalExperiencie isOpen={isOpen} closeModal={closeModal}/>
    </>
  );
};

export default CardExperiencie;
