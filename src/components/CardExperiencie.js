import React from 'react'

const CardExperiencie = ({proyecto}) => {
  return (
    <div className="flex flex-col border-solid border-2 p-2 border-black rounded-lg">
        <img
            className="max-w-full w-60 h-auto rounded-lg"
            src="https://randomuser.me/api/portraits/men/70.jpg"
            alt="logo"
          />
        <footer>
            <h3>{proyecto}</h3>
            <a>Link</a>
        </footer>
    </div>
  )
}

export default CardExperiencie