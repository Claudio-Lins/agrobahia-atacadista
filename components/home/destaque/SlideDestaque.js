import React, { useState } from "react";
import { Slide } from "react-slideshow-image";

import Image from 'next/image'
import 'react-slideshow-image/dist/styles.css'

export default function SlideDestaque() {
    const [autoplay, setAutoplay] = useState(true);
    
    
  return (
    <div className=''>
        <Slide autoplay={autoplay}>
      <Image
      src= '/home/destaque/destaque-01.jpg'
      layout='responsive'
      width={1280}
      height={768}
      objectFit='cover'
      />
      <Image
      src= '/home/destaque/destaque-02.jpg'
      layout='responsive'
      width={1280}
      height={768}
      objectFit='cover'
      />
      <Image
      src= '/home/destaque/destaque-03.jpg'
      layout='responsive'
      width={1280}
      height={768}
      objectFit='cover'
      />
      <Image
      src= '/home/destaque/destaque-04.jpg'
      layout='responsive'
      width={1280}
      height={768}
      objectFit='cover'
      />
      <Image
      src= '/home/destaque/destaque-05.jpg'
      layout='responsive'
      width={1280}
      height={768}
      objectFit='cover'
      />
      </Slide>
    </div>
  )
}
