import React from 'react'
import getIcon from '../../hooks/useIcons'

const Skills = () => {

    const _skills = ['REACT','ANGULAR','HTML','SASS','CSS','TAILWIND','NODE','JAVASCRIPT','VIMEO']

  return (
    <div className='flex flex-col gap-10'>
        <h2 className="text-center text-3xl font-black xl:text-4xl ">
        Skills
        </h2>
        <ul className="flex flex-row gap-4  flex-wrap justify-center">
                  {_skills&& _skills.map((el) => <li>{getIcon(el)}</li>)}
                </ul>
    </div>
  )
}

export default Skills