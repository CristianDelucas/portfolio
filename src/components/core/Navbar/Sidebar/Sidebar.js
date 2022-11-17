import React, { useEffect } from 'react'

const Sidebar = ({toggle}) => {

    

  return (
    <div className={`bg-[#7BDCB5] md:bg-transparent`} data-aos="zoom-out" onClick={toggle}>
          <ul className={`gap-15 flex h-screen w-screen flex-col items-center justify-evenly  p-0 text-xl font-bold  md:h-auto md:w-full md:flex-row md:gap-10`}>
            <li >
              <a href="#home">Inicio</a>
            </li>
            <li >
              <a href="#about">Sobre mi</a>
            </li>
            <li >
              <a href="#proyects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
  )
}

export default Sidebar