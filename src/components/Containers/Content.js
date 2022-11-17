import React from 'react'

const Content = ({children}) => {
  return (
    <div className={`mx-auto h-full min-h-screen w-11/12 flex flex-col justify-center lg:w-8/12`}>
        {children}
    </div>
  )
}

export default Content