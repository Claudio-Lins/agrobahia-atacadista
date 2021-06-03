import Head from "next/head";
import Image from "next/image";
import Contato from "../components/contato/Contato";
import HeroDestaque from "../components/home/destaque/HeroDestaque";
import LinksUteis from "../components/linksUteis/LinksUteis";
import Team from '../components/team/Team'
import { fetchAPIAgroBahia } from "../lib/api";


export default function Home({ links }) {
  return (
    <div className="">
      <Head>
        <title>AgroBahia Atacadista</title>
      </Head>

      <main className="">
        <HeroDestaque className=" shadow-lg" />
      </main>
      
        <Team links={links} />
        <LinksUteis links={links} />
        <Contato />
      
      
      
    </div>
  );
}



////////////////////////////////////////////////////////////////
export async function getStaticProps() {
  const [links] = await Promise.all([
    fetchAPIAgroBahia("/links-uteis"),
  ]);

  return {
    props: { links },
    revalidate: 1,
  };
}
////////////////////////////////////////////////////////////////