import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import TextDestaque from "./TextDestaque";
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
<div className="w-full">
        <Fade {...fadeProperties}>
          <Image
            src="/home/destaque/destaque-01.jpg"
            layout="responsive"
            width={1280}
            height={700}
            objectFit="cover"
          />
          <Image
            src="/home/destaque/destaque-02.jpg"
            layout="responsive"
            width={1280}
            height={700}
            objectFit="cover"
          />
          <Image
            src="/home/destaque/destaque-03.jpg"
            layout="responsive"
            width={1280}
            height={700}
            objectFit="cover"
          />
          <Image
            src="/home/destaque/destaque-04.jpg"
            layout="responsive"
            width={1280}
            height={700}
            objectFit="cover"
          />
          <Image
            src="/home/destaque/destaque-05.jpg"
            layout="responsive"
            width={1280}
            height={700}
            objectFit="cover"
          />
        </Fade>
        </div>
    </>
  );
}
