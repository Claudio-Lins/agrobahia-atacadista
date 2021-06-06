import SlideDestaque from "./SlideDestaque";
import Image from "next/image";

export default function HeroDestaque() {
  return (
    <div id="destak" className="relative md:pt-0 pt-24">

      <div className="w-full h-full flex absolute justify-center items-center z-30">
        <div className="absolute">
          <div className="w-4/5 mx-auto">
          <h1 className="text-3xl text-center text-white">Agro Bahia Atacadista</h1>
          <p className="text-xs text-center text-white">
            Nossa missão é oferecer produtos de extrema qualidade, visando
            atender a demanda nacional e internacional e contribuir cada vez
            mais com a história do cacau e crescimento da região.
          </p>
          </div>
        </div>
      </div>
      <div className="">
        <SlideDestaque />
      </div>
    </div>
  );
}
