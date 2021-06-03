import { useForm } from "react-hook-form";

export default function CardForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  function onSubmitForm (values){
    console.log(values)
  }
  return (
    <>
      <div className="bg-gray-50 h-full w-[600px] flex justify-center items-center">
        <div className="bg-white w-full p-8 shadow">
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="grid grid-cols-1 gap-y-6"
          >
            <div>
              <label for="name" className="sr-only">
                Nome
              </label>
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: "Campo obrigatório",
                })}
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-[#4b991d] focus:border-[#4b991d] border-gray-300 rounded-md focus:outline-none focus:ring-2"
                placeholder="Nome"
              />
              <span className="text-red-400 text-sm py-2">
              {errors.name && errors.name.message}
              </span>
            </div>
            <div>
              <label for="email" className="sr-only">
                Email
              </label>
              <input
                name="email"
                type="text"
                {...register("email", {
                  required: "Campo obrigatório",
                })}
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-[#4b991d] focus:border-[#4b991d] border-gray-300 rounded-md focus:outline-none focus:ring-2"
                placeholder="Email"
              />
              <span className="text-red-400 text-sm py-2">
              {errors.email && errors.email.message}
              </span>
            </div>
            <div>
              <label for="phone" className="sr-only">
                Telefone
              </label>
              <input
                type="text"
                name="phone"
                {...register("phone")}
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-[#4b991d] focus:border-[#4b991d] border-gray-300 rounded-md focus:outline-none focus:ring-2"
                placeholder="Phone"
              />
            </div>
            <div>
              <label for="message" className="sr-only">
                Mensagem
              </label>
              <textarea
                name="message"
                rows="4"
                {...register("message", {
                  required: "Campo obrigatório",
                })}
                className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-[#4b991d] focus:border-[#4b991d] border-gray-300 rounded-md focus:outline-none focus:ring-2"
                placeholder="Message"
              ></textarea>
              <span className="text-red-400 text-sm py-2">
              {errors.message && errors.message.message}
              </span>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex w-full justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-[#4b991d] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
