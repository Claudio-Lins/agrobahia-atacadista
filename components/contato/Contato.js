import Image from "next/image";
import CardContato from "./CardContato";
import CardForm from "./CardForm";

export default function Contato() {
  return (
    <>
      <div className="relative">
        <div className="flex absolute w-full h-full justify-center items-center z-30">
        
        {/* <div className="absolute flex bg-[#4b991d] bg-opacity-80 p-8"> */}
        <div className="absolute grid grid-cols-2 p-8 bg-[#4b991d] bg-opacity-70">
          <CardContato />
          <CardForm />
        </div>
        
        </div>

        <Image
          src="/home/destaque/destaque-04.jpg"
          layout="responsive"
          width={1280}
          height={500}
          objectFit="cover"
        />
      </div>
    </>
  );
}
