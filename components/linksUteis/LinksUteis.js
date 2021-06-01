import Cards from "./Cards";
import Image from "next/image";


export default function LinksUteis() {

    
  return (
    <>
      <div className=" container mx-auto py-20 bg-white">
        <div className=" text-center font-bold text-5xl mb-4">
          <h2>Links Úteis</h2>
        </div>
        <div className="flex justify-center mb-10">
          <Image
            src="/uteis/folhas.svg"
            alt=""
            width={44}
            height={26}
          />
        </div>
        <div className="flex justify-center space-x-6 px-4">
          <Cards name='Associação Nacional das Indústrias Processadoras de Cacau' />
          <Cards name='Mercado do Cacau' />
          <Cards name='Cacau - Bolsa de Nova Iorque (NYBOT)' />
          <Cards name='Agricultura - gov.br' />
          <Cards name='Organização Internacional do Cacau (ICCO)' />
          <Cards name='Secretaria da Agricultura, Pecuária, Irrigação, Pesca e Aquicultura' />
          
        </div>
      </div>
    </>
  );
}
