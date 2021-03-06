import axios from "axios";
import { useForm } from "react-hook-form";

export default function CardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if(response.status == 200){
        reset();
      }

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="bg-gray-50  md:h-[575px] w-11/12 flex justify-center items-center mx-auto">
        <div className="w-full p-8 shadow">
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
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                  errors.name ? "bg-red-100 ring-2 ring-red-500" : null
                }`}
                placeholder="Nome"
              />
              <span className="text-red-300 text-[12px] ml-4 py-2">
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
                  minLength: {
                    value: 8,
                    message:
                      "Não tem caraxteres sufuciente para ser um email...",
                  },
                  maxLength: {
                    value: 120,
                    message: "Tem caraxteres demais para ser um email...",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Por favor, insira um email válido",
                  },
                })}
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                  errors.email ? "bg-red-100 ring-2 ring-red-500" : null
                }`}
                placeholder="Email"
              />
              <span className="text-red-300  text-[12px] ml-4 py-2">
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
                {...register("phone", {
                  // min: {
                  //   value: 12,
                  //   message: 'error message' // JS only: <p>error message</p> TS only support string
                  // }
                })}
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                  errors.phone ? "bg-red-100 ring-2 ring-red-500" : null
                }`}
                placeholder="Telefone"
              />
              <span className="text-red-300  text-[12px] ml-4 py-2">
                {errors.phone && errors.phone.message}
              </span>
            </div>
            <div>
              <label for="message" className="sr-only">
                Mensagem
              </label>
              <textarea
                name="message"
                rows="4"
                {...register("message", {
                  required: "Campo obrigatório!",
                  minLength: {
                    value: 10,
                    message: "Sua mensagem tem menos de 10 letras...",
                  },
                  maxLength: {
                    value: 500,
                    message: "Sua mensagem tem mais de 500 letras...",
                  },
                })}
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                  errors.message ? "bg-red-100 ring-2  ring-red-500" : null
                }`}
                placeholder="Message"
              ></textarea>
              <span className="text-red-300 text-[12px] ml-4 py-2">
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
