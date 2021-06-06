import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";

export default function SlideDestaque() {
  const [autoplay, setAutoplay] = useState(true);

  const fadeProperties = {
    autoplay: { autoplay },
    pauseOnHover: true,
    duration: 3000,
    transitionDuration: 1000,
    infinite: true,
    prevArrow: <div></div>,
    nextArrow: <div></div>,
  };

  return (
    <>
<div className="relative">
<div className="w-full h-full bg-gray-800 absolute opacity-40 z-20 "></div>
        <Fade className=" " {...fadeProperties}>
          <Image
            src="/home/destaque/destaque-01.jpg"
            layout="responsive"
            width={1280}
            height={600}
            objectFit="cover"
          />
          <Image
            src="/home/destaque/destaque-02.jpg"
            layout="responsive"
            width={1280}
            height={600}
            objectFit="cover"
          />
          <Image
            src="/home/destaque/destaque-03.jpg"
            layout="responsive"
            width={1280}
            height={600}
            objectFit="cover"
          />
          <Image
            src="/home/destaque/destaque-04.jpg"
            layout="responsive"
            width={1280}
            height={600}
            objectFit="cover"
          />
          <Image
            src="/home/destaque/destaque-05.jpg"
            layout="responsive"
            width={1280}
            height={600}
            objectFit="cover"
          />
        </Fade>
        </div>
    </>
  );
}
