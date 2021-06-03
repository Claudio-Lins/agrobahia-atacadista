import { useForm } from "react-hook-form";

export default function CardForm() {
  return (
    <>
    <div className="bg-gray-50 h-full w-[600px] flex justify-center items-center">
      <div className="bg-white w-full p-8 shadow">
        <form className="grid grid-cols-1 gap-y-6">
          <div>
            <label for="name" className="sr-only">
              Nome
            </label>
            <input
              type="text"
              name="name"
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-[#4b991d] focus:border-[#4b991d] border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Full name"
            />
          </div>
          <div>
            <label for="email" className="sr-only">
              Email
            </label>
            <input
              name="email"
              type="text"
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-[#4b991d] focus:border-[#4b991d] border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Email"
            />
          </div>
          <div>
            <label for="phone" className="sr-only">
              Telefone
            </label>
            <input
              type="text"
              name="phone"
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
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-[#4b991d] focus:border-[#4b991d] border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex w-full justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-[#4b991d] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Enviar
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
