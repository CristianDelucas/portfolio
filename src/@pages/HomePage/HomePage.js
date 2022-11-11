import React from "react";

const HomePage = () => {
  return (
    <section className="flex flex-col  sm:flex-row my-10 items-center justify-center rounded-3xl bg-zinc-900 p-5 ">
      <div className="flex flex-col text-white ">
        <p className="w-full text-5xl xl:text-8xl font-bold">CRISTIAN</p>
        <h1 className="w-full text-2xl md:text-3xl">Desarrollador Frontend</h1>
      </div>
      <div className="">
        <img
          className="h-full min-h-[300px] w-full min-w-[300px] rounded-full p-5"
          src="https://randomuser.me/api/portraits/men/70.jpg"
          alt="logo"
        />
      </div>
    </section>
  );
};

export default HomePage;
