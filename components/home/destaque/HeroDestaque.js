import SlideDestaque from "./SlideDestaque";
import Image from "next/image";

export default function HeroDestaque() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="relative w-full hidden md:block">
          <SlideDestaque />
        </div>
        <div className="relative min-h-screen w-full md:hidden">
        <Image
              src="/home/destaque/destaque-01.jpg"
              layout="fill"
              objectFit="cover"
            />
        </div>
        <div className="absolute z-30 text-white">
          <h1 className="text-3xl text-center">AgroBahia Atacadista</h1>
          <p className="text-xs text-center ">
            Nossa missão é oferecer produtos de extrema qualidade, visando
            atender a demanda nacional e internacional e contribuir cada vez
            mais com a história do cacau e crescimento da região.
          </p>
        </div>
      </div>
    </>
  );
}

