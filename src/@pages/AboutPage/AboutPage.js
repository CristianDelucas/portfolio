import React from "react";

const AboutPage = () => {
  return (
    <section className="py-4">
      <h1 className="text-end text-3xl font-bold">
        Sobre mí
      </h1>
      <div className="my-10 mx-32 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="col-span-2 justify-self-center lg:col-span-1">
          <img
            className="max-w-full w-60 h-auto rounded-lg"
            src="https://randomuser.me/api/portraits/men/70.jpg"
            alt="logo"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          ¡Hola! En mi carrera como programador de software he manejado
          diferentes tecnologías y lenguajes de programación,
          centrado como desarrollador FRONTEND. Me gusta aprender nuevas
          tecnologías y ponerlas en práctica. Actualmente estoy desarrollando
          una aplicación para la gestión de entrenamientos personales con su
          seguimiento. En la parte de proyectos podrás echarle un vistazo ¡Un
          saludo!
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
