import { delay, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const greeting = "Hi, ";
  const imText = "i'm ";
  const name = "Lucille";

  const [displayedGreeting, setDisplayedGreeting] = useState("");
  const [displayedIm, setDisplayedIm] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const typingGreeting = setInterval(() => {
      if (displayedGreeting.length < greeting.length) {
        setDisplayedGreeting(
          (prevGreeting) => prevGreeting + greeting[displayedGreeting.length]
        );
      } else {
        clearInterval(typingGreeting);
      }
    }, 50);

    return () => {
      clearInterval(typingGreeting);
    };
  }, [displayedGreeting]);

  useEffect(() => {
    if (displayedGreeting === greeting) {
      const typingIm = setInterval(() => {
        if (displayedIm.length < imText.length) {
          setDisplayedIm((prevIm) => prevIm + imText[displayedIm.length]);
        } else {
          clearInterval(typingIm);
        }
      }, 50);

      return () => {
        clearInterval(typingIm);
      };
    }
  }, [displayedGreeting, displayedIm]);

  useEffect(() => {
    if (displayedGreeting === greeting && displayedIm === imText) {
      const typingName = setInterval(() => {
        if (displayName.length < name.length) {
          setDisplayName((prevName) => prevName + name[displayName.length]);
        } else {
          clearInterval(typingName);
        }
      }, 50);

      return () => {
        clearInterval(typingName);
      };
    }
  }, [displayedGreeting, displayedIm, displayName]);

  // Animation for the right part of the hero

  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-5vw" },
    visible: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } },
    right: { opacity: 0, x: "5vw", transition: { delay: 1, duration: 1 } },
  };

  return (
    <>
      <p className="grid grid-rows-subgrid text-secondary uppercase -ml-[3px] sm:-ml-1 col-start-2 -col-end-2 row-start-3 row-end-6 text-[17vw] leading-[14vw] sm:text-[12vw] sm:leading-[9.9vw] lg:text-[9vw] lg:leading-[7.2vw] xl:gap-0 xl:justify-normal xl:grid xl:col-start-2 xl:col-end-5 xl:row-start-3 xl:row-end-6  xl:text-[7.9vw] xl:leading-[6.5vw]">
        <span className="inline-block content-end">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {displayedGreeting}
          </motion.span>
        </span>
        <span className="inline-block content-end">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {displayedIm}
          </motion.span>
        </span>
        <span className="inline-block content-end">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {displayName}
          </motion.span>
        </span>
      </p>
      <h1 className="grid grid-cols-subgrid grid-rows-subgrid -ml-[3px] sm:-ml-1 col-start-2 -col-end-2 row-start-7 row-end-10 text-[14vw] leading-[11.9vw] sm:text-[12vw] sm:leading-[9.9vw] lg:col-start-6 lg:row-start-5 lg:row-end-8 lg:text-[8vw] lg:leading-[6.2vw] xl:grid xl:grid-cols-subgrid xl:col-start-6 xl:-col-end-2 xl:row-start-3 xl:row-end-6 xl:auto-rows-fr xl:text-[7.9vw]  xl:leading-[6.5vw] uppercase">
        <motion.span
          initial="hidden"
          animate="visible"
          variants={MULTIDIRECTION_SLIDE_VARIANTS}
          transition={{ duration: 1 }}
          className="inline-block content-end h-full col-span-full"
        >
          Designeuse
        </motion.span>
        <motion.span
          initial="right"
          animate="visible"
          variants={MULTIDIRECTION_SLIDE_VARIANTS}
          transition={{ duration: 1 }}
          className="inline-block -ml-[1px] sm:-ml-1 content-end h-full col-span-full sm:col-start-2 lg:col-start-3"
        >
          graphique
        </motion.span>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={MULTIDIRECTION_SLIDE_VARIANTS}
          transition={{ duration: 1 }}
          className="inline-block content-end h-full col-span-full"
        >
          & web
        </motion.span>
      </h1>
    </>
  );
};

export default Hero;
