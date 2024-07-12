import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const anim = {
  initial: {
    opacity: 0,
    display: "none",
  },
  open: {
    opacity: 1,
    display: "flex",
  },
  exit: {
    opacity: 0,
  },
};

// Définition du type des props
type MenuIsActiveProps = {
  menuIsActive: any;
};

const Index: React.FC<MenuIsActiveProps> = ({ menuIsActive }) => {
  return (
    <>
      <Link href="/" className="hidden">
        <Image
          className="w-2/3 mx-auto"
          src="/logo-lucille-clair.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </Link>
      <motion.div
        className="menu text-[6vw] leading-[6vw]"
        variants={anim}
        initial="initial"
        animate={menuIsActive ? "open" : "closed"}
      >
        <div className="my-0 mx-auto flex flex-col">
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </motion.div>
    </>
  );
};

export default Index;
