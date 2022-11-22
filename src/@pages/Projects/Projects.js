import Aos from 'aos'
import React, { useEffect } from 'react'
import CardExperiencie from '../../components/Cards/CardExperiencie'
import Content from '../../components/Containers/Content'
import Section from '../../components/Containers/Section'
import ModalExperiencie from '../../components/Modals/ModalExperiencie'
import PROJECTS from '../../constants/projects';
const Projects = () => {


  return (

    <Section title="proyects" >
    <Content>
      
      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 grid-flow-row m-auto w-full">
      <h2 className=" col-span-full text-center text-5xl font-black xl:text-6xl " data-aos="zoom-in-down">Proyectos</h2>

      {PROJECTS.map((project)=>
        <CardExperiencie project={project} />
      )}
        <ModalExperiencie/>
      </div>
      </Content>
    </Section>
  )
}

export default Projects