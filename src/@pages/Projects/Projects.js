import React from 'react'
import CardExperiencie from '../../components/Cards/CardExperiencie'
import Content from '../../components/Containers/Content'
import Section from '../../components/Containers/Section'
import ModalExperiencie from '../../components/Modals/ModalExperiencie'

const Projects = () => {


  return (

    <Section title="proyects" >
    <Content>
      <h2 className="text-start text-3xl font-black xl:text-6xl ">Proyectos</h2>
      <div className="flex flex-row flex-wrap justify-around py-8 gap-16 ">
        <CardExperiencie proyecto={'APP JUMANDGYM'} />
        <CardExperiencie proyecto={'WEB JUMANDGYM'}/>
        <CardExperiencie proyecto={'SERIESCLICK'}/>
        <ModalExperiencie/>
      </div>
      </Content>
    </Section>
  )
}

export default Projects