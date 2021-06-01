import SlideDestaque from "./SlideDestaque";
import Image from "next/image";

export default function HeroDestaque() {
  return (
    <div className=" w-full relative">
      <div className="w-full h-full bg-gray-800 absolute z-20 opacity-50 "></div>

      <div className="w-full h-full flex absolute justify-center items-center z-30">
        <div className="flex relative justify-center items-center">
          <div className="absolute w-4/5 text-center text-white">
            <h1 className="font-bold font-Lobster tracking-widest text-5xl ">
              Agro Bahia Atacadista
            </h1>
            <p className="text-sm">
              Nossa missão é oferecer produtos de extrema qualidade, visando
              atender a demanda nacional e internacional e contribuir cada vez
              mais com a história do cacau e crescimento da região.
            </p>
          </div>
          <div className="w-full">
            <Image src="/home/destaque/frame.svg" width={822} height={213} />
          </div>
        </div>
      </div>
      <div className="">
        <SlideDestaque />
      </div>
    </div>
  );
}
