import Image from "next/image";
import { AiOutlineContacts } from "react-icons/ai";

export default function CardContato() {
  return (
    <>
      <div className="bg-white flex flex-col w-[450px] shadow-md justify-center items-center text-gray-600 space-y-4 py-3 border">
        <AiOutlineContacts size="4em" color='#4b991d' />
        <p className='text-xl'>+55 71 123 456 789</p>
        <p className=''>Mutuípe, Bahia, Brazil</p>
        <p className=' tracking-wider'>contato@agrobahiaatacadista.com.br</p>
      </div>
    </>
  );
}
