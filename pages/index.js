import Head from "next/head";
import Image from "next/image";
import HeroDestaque from "../components/home/destaque/HeroDestaque";
import LinksUteis from "../components/linksUteis/LinksUteis";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>AgroBahia Atacadista</title>
      </Head>

      <main className="">
        <HeroDestaque className=" shadow-lg" />
      </main>
      <div className="">
        <LinksUteis />
      </div>
    </div>
  );
}
