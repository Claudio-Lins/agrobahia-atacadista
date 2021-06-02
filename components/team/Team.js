import Image from "next/image";

export default function Team({ team }) {
  return (
    <>
      <div className="bg-green-500 py-24">
      <div className=" text-center font-bold text-5xl text-white mb-8">
          <h2>Equipe</h2>
        </div>
        <div className=" container mx-auto">
          <div className="flex justify-evenly">
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
                <p className=" leading-5 text-sm font-light">Add team member description here. Remove the text if not necessary.</p>
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
