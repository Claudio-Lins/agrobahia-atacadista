import SlideDestaque from "./SlideDestaque";
import Image from "next/image";

export default function HeroDestaque() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full justify-center items-center">
        <div className="relative min-h-screen w-full">
          <SlideDestaque />
        </div>
        <div className="absolute z-30">
          <h1 className="text-3xl text-center">Agro Bahia Atacadista</h1>
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

{
}
