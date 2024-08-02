import { motion, stagger } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const animParent = {
  initial: {
    opacity: 0,
    display: "none",
  },
  open: {
    opacity: 1,
    display: "grid",
    transition: {
      duration: 0.5, // Durée pour l'opacité
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.5,
      transitionEnd: {
        display: "none",
      },
    },
  },
};

const animLogo = {
  initial: {
    height: "fit-content", // Hauteur initiale du logo
  },
  open: {
    height: "100svh", // Hauteur finale du logo
    transition: {
      duration: 0.5, // Durée de la transition
      delay: 0.5, // Délai après l'animation de la div parente
    },
  },
  closed: {
    height: "0svh",
    transition: { duration: 0.5 },
  },
};

const animText = {
  initial: {
    opacity: 0,
    y: 20,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1, // Délai après l'animation du logo
      staggerChildren: 0.5, // Décalage pour les éléments de texte
    },
  },
};

const LinkList = [
  { name: "about", href: "#about" },
  { name: "services", href: "#services" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

type MenuProps = {
  menuIsActive: boolean;
  setMenuIsActive: (isActive: boolean) => void;
};

const Menu: React.FC<MenuProps> = ({ menuIsActive, setMenuIsActive }) => {
  const handleLinkClick = () => {
    setMenuIsActive(false);
  };

  const { t } = useTranslation("menu");

  return (
    <motion.div
      className="menu max-h-svh text-[12vw] leading-[12vw] lg:text-[6vw] lg:leading-[6vw] bg-background"
      variants={animParent}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}
    >
      <motion.div
        className="logo-container col-start-1 col-span-1 h-full lg:col-span-1 lg:col-start-2 bg-secondary w-full flex justify-center items-center"
        variants={animLogo}
        initial="initial"
        animate={menuIsActive ? "open" : "closed"}
      >
        <Link href="/" className="block md:w-fit lg:w-2/3 2xl:w-fit">
          <Image
            className="w-2/3 mx-auto"
            src="/logo-lucille-clair.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
      </motion.div>
      <motion.div
        className="text-container my-0 mx-auto grid place-items-center grid-cols-subgrid grid-rows-subgrid row-span-full col-span-full xl:row-start-2"
        variants={animText}
        initial="initial"
        animate={menuIsActive ? "open" : "closed"}
      >
        {LinkList.map((link, index) => (
          <motion.div
            key={index}
            variants={{
              initial: { opacity: 0, y: 20 },
              open: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Décalage basé sur l'index
            className="uppercase text-secondary inline-block content-end h-full text-[14vw] leading-[11.9vw] sm:text-[12vw] sm:leading-[9.9vw] lg:text-[8vw] lg:leading-[6.2vw] xl:text-[7.9vw] xl:leading-[6.5vw] col-span-full hover:text-text transition-all duration-500"
          >
            <Link href={link.href} onClick={handleLinkClick}>
              {t(link.name)}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Menu;
