import React from "react";
import { useForm } from "react-hook-form";
import Content from "../../components/Containers/Content";
import Section from "../../components/Containers/Section";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Section title="contact">
      <Content>
      <h2 className="text-center text-3xl font-black xl:text-6xl  ">Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto mb-6 flex max-w-2xl flex-col justify-center  gap-6 py-8">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Correo electronico
            </label>
            <input
              className={`block max-h-[300px]  w-full border-b-2 border-gray-300 bg-gray-50 p-2.5  py-2 px-4 text-sm text-gray-900 shadow-lg outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${
                errors.email
                  ? "border-red-400 text-red-300"
                  : "border-gray-300 text-gray-900"
              }`}
              type={"email"}
              name="correo"
              placeholder="ejemplo@gmail.com"
              {...register("email", {
                required: { value: true, message: "'Email' es obligatorio" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email con formato incorrecto",
                },
              })}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                Es necesario rellenar el email.
              </p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Asunto
            </label>

            <input
              className={`block max-h-[300px]  w-full border-b-2 border-gray-300 bg-gray-50 p-2.5  py-2 px-4 text-sm text-gray-900 shadow-lg outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${
                errors.asunto
                  ? "border-red-400 text-red-300"
                  : "border-gray-300 text-gray-900"
              }`}
              type={"text"}
              name="asunto"
              placeholder="Tema de mensaje"
              {...register("asunto", { required: true, maxLength: 30 })}
            />
            {errors.mensaje && (
              <p className="mt-2 text-sm text-red-500">
                Es necesario rellenar el asunto.
              </p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              className={`block max-h-[300px]  w-full border-b-2 border-gray-300 bg-gray-50 p-2.5  py-2 px-4 text-sm text-gray-900 shadow-lg outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 ${
                errors.mensaje
                  ? "border-red-400 text-red-300"
                  : "border-gray-300 text-gray-900"
              }`}
              placeholder="Tu mensaje..."
              {...register("mensaje", { required: true, maxLength: 200 })}
            ></textarea>
            {errors.mensaje && (
              <p className="mt-2 text-sm text-red-500">
                Es necesario rellenar el mensaje.
              </p>
            )}
          </div>
          <input
            className=" cursor-pointer rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            type={"submit"}
            value="ENVIAR"
          />
        </div>
      </form>
      </Content>
    </Section>
  );
};

export default Contact;
