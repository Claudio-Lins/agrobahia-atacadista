import Image from "next/image";
import CardContato from "./CardContato";
import CardForm from "./CardForm";

export default function Contato() {
  return (
    <>
      <div className="relative">
        <div className="items-center">
          <div className="absolute w-full h-[700px] flex z-10 justify-center items-center">
            <div className="bg-white py-20 px-4 w-2/4 h-[600px] flex justify-center bg-opacity-70 mt-10">
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
      </div>
    </>
  );
}
