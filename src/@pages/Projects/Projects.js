import React from 'react'
import CardExperiencie from '../../components/Cards/CardExperiencie'
import ModalExperiencie from '../../components/Modals/ModalExperiencie'

const Projects = () => {


  return (
    <section className="py-4" >
      <h1 className="text-start text-3xl font-bold">Proyectos</h1>
      <div className="flex flex-row flex-wrap justify-around py-8 gap-16">
        <CardExperiencie proyecto={'APP JUMANDGYM'} />
        <CardExperiencie proyecto={'WEB JUMANDGYM'}/>
        <CardExperiencie proyecto={'SERIESCLICK'}/>
        <ModalExperiencie/>
      </div>
    </section>
  )
}

export default Projects