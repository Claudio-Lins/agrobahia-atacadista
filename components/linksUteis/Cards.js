import Image from "next/image";

export default function Cards(props) {
  return (
    <>
      <div className="flex flex-col  bg-white shadow-md py-4 h-56 w-40 border">
        <div className="flex justify-center items">
          <Image
            src="/uteis/linksUteis/aipc-logo.jpg"
            width={120}
            height={80}
          />
        </div>

        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-sm text-center flex items-center justify-center">
            <p>{props.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
