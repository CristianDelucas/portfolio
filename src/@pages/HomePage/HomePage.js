import React from 'react'

const HomePage = () => {
  return (
    <section className="my-20  flex flex-wrap items-center justify-center rounded-3xl bg-zinc-900 p-5 lg:flex-row">
        <div className="flex flex-col px-10 text-white">
          <p className="text-xxxxl font-bold">
            CRISTIAN
            <br />
            DE LUCAS
            <br />
            NOGUERO
          </p>
          <h1 className="text-xl ">FRONTEND</h1>
        </div>
        <div className="h-80 px-10 text-white">
          <img
            className="h-full w-full rounded-full p-5"
            src="https://randomuser.me/api/portraits/men/70.jpg"
            alt="logo"
          />
        </div>
      </section>
  )
}

export default HomePage