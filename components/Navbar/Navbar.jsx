import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ toggle }) => {
  return (
    <>
      <nav className="bg-gray-50 fixed inset-x-0 z-50 shadow-md">
        <div
          className="container mx-auto flex items-center justify-between md:justify-evenly h-24  relative"
          role="navigation"
        >
          <Link href="/">
            <a className="pl-6 md:pl-20">
              <Image
                src="/home/Navbar/Agro-Bahia_H_Verde.svg"
                alt="Joanita Festa com Arte"
                width={160}
                height={55}
              />
            </a>
          </Link>
          <div className="pr-12 cursor-pointer md:hidden" onClick={toggle}>
            <Image
              src="/assets/menu-burger.svg"
              alt="Menu Joanita Festa com Arte"
              width={25}
              height={25}
            />
          </div>
          <div className="flex pr-8 space-x-8 md:block hidden">
            <Link href="/#empresa">
              <a className=" inline-block hover:text-green-900 hover:font-bold">
                A Empresa
              </a>
            </Link>
            <Link href="/#produtos">
              <a className=" inline-block hover:text-green-900 hover:font-bold">
                Nossos Produtos
              </a>
            </Link>
            <Link href="/#links">
              <a className=" inline-block hover:text-green-900 hover:font-bold">
                Links Úteis
              </a>
            </Link>
            <Link href="/#equipe">
              <a className=" inline-block hover:text-green-900 hover:font-bold">
                Equipe
              </a>
            </Link>
            <Link href="/#contato">
              <a className=" inline-block hover:text-green-900 hover:font-bold">
                Contato
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

