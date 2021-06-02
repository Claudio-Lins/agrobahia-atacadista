
import Image from "next/image";

export default function LinksUteis({ links }) {
  return (
    <>
      <div className="py-24 bg-white shadow-inner">
      <div className="container mx-auto ">
        <div className=" text-center font-bold text-5xl mb-4">
          <h2>Links Úteis</h2>
        </div>
        <div className="flex justify-center mb-10">
          <Image src="/uteis/folhas.svg" alt="" width={44} height={26} />
        </div>
        <div className="flex justify-evenly px-20">
          {links.map((links, index) => (
            <a href={links.link} target="_blank">
            <div key={index} className="flex flex-col  bg-white shadow-md py-4 h-56 w-40 border">
            <div className="flex justify-center items">
              <Image
                src={links.logo.url}
                width={120}
                height={80}
                objectFit="cover"
              />
            </div>
    
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-sm text-center flex items-center justify-center">
                <p>{links.name}</p>
              </div>
            </div>
          </div>
          </a>    
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
