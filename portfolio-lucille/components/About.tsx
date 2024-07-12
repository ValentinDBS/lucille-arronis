"use client";

import {
  motion,
  useAnimation,
  AnimationControls,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef, RefObject, useState } from "react";

const anim = {
  initial: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: 0.05 * custom },
  }),
  hide: {
    opacity: 0,
  },
};

const Block = ({ custom }: { custom: number }): JSX.Element => {
  const controls: AnimationControls = useAnimation();
  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false); // État local pour suivre si le bloc a déjà été animé

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start("visible");
          setHasAnimated(true); // Marquer que le bloc a été animé une fois
        }
      },
      { threshold: 0.5 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="w-full h-[3vw] lg:h-[5vw] bg-secondary"
      variants={anim}
      initial="initial"
      animate={controls}
      custom={custom} // Passer le délai aléatoire en tant que prop custom
    ></motion.div>
  );
};

const About = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Marquer que le composant est monté lorsque le composant est monté côté client
  }, []);

  const shuffle = (a: number[]): number[] => {
    // Fonction de mélange (shuffle) pour les délais aléatoires
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = (): JSX.Element[] => {
    if (!isMounted) {
      return []; // Ne rien rendre tant que le composant n'est pas monté côté client
    }

    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const amountOfBlocks = Math.ceil(innerHeight / blockSize);

    // Générer une liste de délais aléatoires
    const delays = shuffle([...Array(amountOfBlocks)].map((_, i) => i));

    return delays.map((randomDelay, i) => (
      <Block key={i} custom={randomDelay} />
    ));
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div className="relative flex h-full overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="w-[5vw] h-full">
          {getBlocks()}
        </div>
      ))}
      <motion.section
        ref={sectionRef}
        className="absolute w-full h-full px-[4vw] py-[5vh] flex flex-col gap-12 items-start lg:py-0 lg:gap-32  lg:flex-row lg:items-center xl:gap-64 2xl:gap-80"
      >
        <h2 className="text-[8vw] text-background leading-[8vw] uppercase lg:w-fit lg:px-6 lg:text-[10vw] lg:leading-[10vw] xl:text-[9vw] xl:leading-[9vw] 2xl:text-[8vw] 2xl:leading-[8vw]">
          {"About".split("").map((letter, index) => (
            <span
              key={index}
              className={`hidden lg:block lg:w-[12vw] ${
                index % 2 === 0 ? "text-start" : "text-end"
              }`}
            >
              {letter}
            </span>
          ))}
          <span className="text-[14vw] leading-[14vw] uppercase lg:hidden ">
            About
          </span>
        </h2>
        <div className="flex text-background flex-col gap-4 leading-normal uppercase text-base md:text-[3.5vw] lg:text-[2.5vw] lg:w-[70%] xl:text-[2vw] xl:w-[55%]">
          <p className="lg:mb-8">
            Je suis{" "}
            <span className="bg-background text-secondary px-2">
              designeuse graphique et web
            </span>{" "}
            freelance passionnée. Chaque projet est pour moi l&apos;occasion de
            découvrir de nouvelles idées et d&apos;explorer des concepts
            innovants.
          </p>
          <p>
            Quand je ne travaille pas sur des projets de design, je me passionne
            pour les voyages et la photographie. Ces activités enrichissent mon
            inspiration et apportent une dimension supplémentaire à mon travail.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
