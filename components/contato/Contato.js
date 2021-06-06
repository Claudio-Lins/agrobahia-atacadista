import Image from "next/image";
import CardContato from "./CardContato";
import CardForm from "./CardForm";

export default function Contato() {
  return (
    <>
      <div className="bg-[#4b991d] py-12 md:py-24">
      <div className=" text-center text-white font-bold md:text-5xl text-4xl mb-4">
          <h2>Contato</h2>
        </div>
        <div className="flex flex-col md:mb-10">
          <Image src="/uteis/folhas.svg" alt="" width={44} height={26} />
        </div>
      <div className="md:container md:grid md:grid-cols-2">
        <CardContato />
        <CardForm />
      </div>
      </div>
      {/* <div className="w-full h-full">
        <Image
          src="/home/destaque/destaque-04.jpg"
          layout="responsive"
          width={1280}
          height={500}
          objectFit="cover"
        />
        </div> */}
    </>
  );
}
