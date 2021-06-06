import Image from "next/image";

export default function Team({ team }) {
  return (
    <>
      <div id='team' className="bg-[#4b991d] flex flex-col py-12 mt-0">
      <div className=" text-center text-white font-bold md:text-5xl text-4xl mb-2">
          <h2>Equipe</h2>
        </div>
        <div className="flex flex-col md:mb-10 mb-6 mt-0">
          <Image src="/uteis/folhas_white.svg" alt="" width={500} height={45} />  
        </div>
        <div className="md:container mx-auto">
          <div className="md:flex md:justify-evenly">
              {/*  */}
            <div className="w-72 bg-white shadow-lg mb-4">
              <div className="">
                <Image
                  src="/team/team-01.jpg"
                  layout="responsive"
                  width={280}
                  height={366}
                  objectFit="cover"
                />
              </div>
              <div className="p-6 tracking-wide text-gray-800">
                <h3 className="text-3xl font-semibold">Yure Souza</h3>
                <h4 className="mb-2 text-xs font-light">Software Engineer</h4>
                <p className=" leading-5 text-sm font-light">Add team member description here. Remove the text if not necessary.</p>
              </div>
            </div>
            {/*  */}
              {/*  */}
            <div className="w-72 bg-white shadow-lg mb-4">
              <div className="">
                <Image
                  src="/team/team-01.jpg"
                  layout="responsive"
                  width={280}
                  height={366}
                  objectFit="cover"
                />
              </div>
              <div className="p-6 tracking-wide text-gray-800">
                <h3 className="text-3xl font-semibold">Yure Souza</h3>
                <h4 className="mb-2 text-xs font-light">Software Engineer</h4>
                <p className=" leading-5 font-light">Add team member description here. Remove the text if not necessary.</p>
              </div>
            </div>
            {/*  */}
              {/*  */}
            <div className="w-72 bg-white shadow-lg">
              <div className="">
                <Image
                  src="/team/team-01.jpg"
                  layout="responsive"
                  width={280}
                  height={366}
                  objectFit="cover"
                />
              </div>
              <div className="p-6 tracking-wide text-gray-800">
                <h3 className="text-3xl font-semibold">Yure Souza</h3>
                <h4 className="mb-2 text-xs font-light">Software Engineer</h4>
                <p className=" leading-5 font-light">Add team member description here. Remove the text if not necessary.</p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
