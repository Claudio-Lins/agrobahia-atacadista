import Image from "next/image";
import CardContato from "./CardContato";
import CardForm from "./CardForm";

export default function Contato() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full justify-center items-center">
        <div className="relative min-h-screen w-full">
          <Image
            src="/home/destaque/destaque-04.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute z-30">
        <div className="text-center text-white font-bold md:text-5xl text-4xl mb-2">
          <h2>Contato</h2>
        </div>
        <div className="flex flex-col md:mb-10 mb-6 mt-0">
          <Image src="/uteis/folhas_white.svg" alt="" width={500} height={45} />
        </div>
        <div className=" md:grid md:grid-cols-2">
          <CardContato />
          <CardForm />
        </div>
        </div>
      </div>
    </>
  );
}
