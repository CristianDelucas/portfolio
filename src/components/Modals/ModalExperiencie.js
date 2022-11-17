import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ModalExperiencie = ({isOpen, closeModal}) => {

    const handleModalContainerClick = (e) =>{
      
      e.stopPropagation();
      
  } 

  const handleCloseModal = (e) =>{
    const element = document.getElementById('modal_content');
    element.style = "transform: translateY(100px); opacity: 0;"

    setTimeout(()=>{
      closeModal()
    },500)
    
  }

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);


  return (
    <>
    {isOpen?
    <div className="fixed top-0 left-0 z-20 flex  h-screen w-full items-center justify-center ease-in-out bg-[#141414d8]"  onClick={handleCloseModal}>
      <div className="flex max-w-md flex-col flex-wrap bg-[#828583d2] top rounded-lg m-5 shadow-2xl" data-aos="fade-down" id='modal_content'  onClick={handleModalContainerClick}>
      <nav className="w-full flex justify-between border-b-2 p-3 ">
                <div className="py-2 select-none">APP JUMANDGYM {"(FITNESS)"}</div>
                <button className="hover:text-orange-700 font-bold" onClick={handleCloseModal} >X</button>
            </nav>
        <div className="flex flex-col gap-5 items-center justify-center p-5 ">
            
          
          <div>
            <img
              className="h-auto w-60 max-w-full rounded-lg  transition-transform duration-1000   group-hover:rotate-6 group-hover:scale-150"
              src="https://randomuser.me/api/portraits/men/70.jpg"
              alt="logo"
            />
          </div>
          <div>
            Aplicación para gestionar y crear rutinas para los clientes del
            equipo de JUMANDGYM.
          </div>
          <div>
            <ul>
              <li>FRONT: REACT</li>
              <li>BACK: NODE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>:null}
    </>
  );
};

export default ModalExperiencie;
