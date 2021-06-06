import Image from "next/image";
import { AiOutlineContacts } from "react-icons/ai";

export default function CardContato() {
  return (
    <>
      <div className="w-11/12 md:h-[575px] flex flex-col justify-center items-center py-6 shadow gap-y-3 bg-gray-50 mx-auto mb-4">
        <AiOutlineContacts size="80px" color='#4b991d' />
        <p className='text-xl'>+55 71 123 456 789</p>
        <p className=''>Mutuípe, Bahia, Brazil</p>
        <p className=' tracking-wider'>contato@agrobahiaatacadista.com.br</p>
      </div>
    </>
  );
}
