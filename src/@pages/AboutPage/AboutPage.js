import React from "react";

const AboutPage = () => {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <h1 className="col-span-2 w-full text-end text-xxxxl font-bold">
        Sobre mí
      </h1>
      <div className="col-span-2 justify-self-center lg:col-span-1">
        <img
          className=" rounded-3xl"
          src="https://randomuser.me/api/portraits/men/70.jpg"
          alt="logo"
        />
      </div>
      <div className="col-span-2 lg:col-span-1">
        ¡Hola! En mi carrera como programador de software he manejado diferentes
        tecnologías y lenguajes de programación, actualmente centrado como
        desarrollador FRONTEND. Me gusta aprender nuevas tecnologías y ponerlas
        en práctica. Actualmente estoy desarrollando una aplicación para la
        gestión de entrenamientos personales con su seguimiento. En la parte de
        proyectos podrás echarle un vistazo ¡Un saludo!
      </div>
    </section>
  );
};

export default AboutPage;
