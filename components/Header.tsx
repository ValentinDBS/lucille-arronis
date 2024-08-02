"use client"; // Ajoutez cette ligne pour indiquer que ce composant est client-side

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu"; // Assurez-vous que le chemin est correct
import LanguageChanger from "./LanguageChanger";

const Header: React.FC = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuIsActive(!menuIsActive);
  };

  useEffect(() => {
    if (menuIsActive) {
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.width = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, [menuIsActive]);

  return (
    <header className="grid grid-cols-subgrid grid-rows-subgrid col-span-full lg:row-span-1 place-items-center">
      <div className="col-start-1 col-span-1 sm:col-start-2 lg:col-span-1 lg:col-start-2 bg-secondary w-full h-full flex justify-center items-center">
        <Link href="/" className="block md:w-fit lg:w-2/3 2xl:w-fit">
          <Image
            className="w-2/3 mx-auto"
            src="/logo-lucille-clair.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      <div className="header -col-start-1 sm:-col-start-3 justify-self-center md:justify-self-center">
        <div
          onClick={handleMenuToggle}
          className={`burger ${menuIsActive ? "burgerActive" : ""}`}
        ></div>
      </div>
      <LanguageChanger />
      {/* Include the Menu component */}
      <Menu menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
    </header>
  );
};

export default Header;
