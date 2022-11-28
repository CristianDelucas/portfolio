import React from "react";
import { useForm } from "react-hook-form";
import Content from "../../components/Containers/Content";
import Section from "../../components/Containers/Section";
import emailjs from "emailjs-com";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { yes_i_understand: false }
  });

  const sendEmail = (formData) => {
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <Section title="contact" >
      <Content>
      <h2 className="text-center text-5xl font-black xl:text-6xl  " data-aos="zoom-in">Contacto</h2>
      <form onSubmit={handleSubmit(sendEmail)} data-aos="zoom-in">
        <div className="mx-auto mb-6 flex max-w-2xl flex-col justify-center text-xl gap-6 py-8">
          <div>
            <label className="mb-2 block  font-medium text-gray-900 dark:text-gray-300">
              Correo electrónico
            </label>
            <input
              className={`block max-h-[300px]  w-full border-b-2 border-gray-300 bg-gray-50 p-2.5  py-2 px-4  text-gray-900 shadow-lg outline-none focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600   dark:placeholder-gray-400 dark:focus:border-emerald-500 dark:focus:ring-emerald-500 ${
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
            <label className="mb-2 block  font-medium text-gray-900 dark:text-gray-300">
              Asunto
            </label>

            <input
              className={`block max-h-[300px]  w-full border-b-2 border-gray-300 bg-gray-50 p-2.5  py-2 px-4  text-gray-900 shadow-lg outline-none focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600  dark:placeholder-gray-400 dark:focus:border-emerald-500 dark:focus:ring-emerald-500 ${
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
            <label className="mb-2 block  font-medium text-gray-900 dark:text-gray-300">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              className={`block max-h-[300px]  w-full border-b-2 border-gray-300 bg-gray-50 p-2.5  py-2 px-4  text-gray-900 shadow-lg outline-none focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600  dark:placeholder-gray-400 dark:focus:border-emerald-500 dark:focus:ring-emerald-500 ${
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
            className=" cursor-pointer rounded-lg bg-slate-900 px-5 py-2.5 text-center font-medium text-white hover:bg-emerald-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-slate-800 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 sm:w-auto"
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
