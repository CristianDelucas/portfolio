import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data)=>{
    console.log(data)
  };

  return (
    <section className="py-4 ">
      <h1 className="text-center text-3xl font-bold">Contacto</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 flex flex-col justify-center gap-6 py-8  max-w-2xl mx-auto">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Correo electronico
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Asunto
            </label>

            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              type={"text"}
              name="asunto"
              placeholder="Tema de mensaje"
              {...register("asunto", { required: true, maxLength: 30 })}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 shadow-lg  border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 max-h-[300px] ${
              errors.email
                ? "text-red-300 border-red-400"
                : "text-gray-900 border-purple-400"
            }`}
              placeholder="Tu mensaje..."
              {...register("mensaje", { required: true, maxLength: 200 })}
            ></textarea>
            {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              A valid email is required.
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
    </section>
  );
};

export default Contact;
