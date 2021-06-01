
import Image from "next/image";

export default function LinksUteis({ links }) {
  return (
    <>
      <div className=" container mx-auto py-20 bg-white">
        <div className=" text-center font-bold text-5xl mb-4">
          <h2>Links Úteis</h2>
        </div>
        <div className="flex justify-center mb-10">
          <Image src="/uteis/folhas.svg" alt="" width={44} height={26} />
        </div>
        <div className="flex justify-center space-x-6 px-4">
          {links.map((links, index) => (
            <div className="flex flex-col  bg-white shadow-md py-4 h-56 w-40 border">
            <div className="flex justify-center items">
              <Image
                src={links.logo.url}
                width={120}
                height={80}
              />
            </div>
    
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-sm text-center flex items-center justify-center">
                <p>{links.name}</p>
              </div>
            </div>
          </div>
                
          ))}
        </div>
      </div>
    </>
  );
}
