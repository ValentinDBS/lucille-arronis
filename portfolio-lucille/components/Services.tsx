"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";

interface CharProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative mr-[1vw] mt-3">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;

        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

interface ParagraphProps {
  paragraph: string;
  progress: MotionValue<number>;
  wordRange: [number, number];
}

const Paragraph: React.FC<ParagraphProps> = ({
  paragraph,
  progress,
  wordRange,
}) => {
  const words = paragraph.split(" ");
  const wordAmount = wordRange[1] - wordRange[0];
  const wordStep = wordAmount / words.length;

  return (
    <p className="flex flex-wrap justify-end leading-normal hover:text-secondary transition-all duration-500">
      {words.map((word, i) => {
        const start = wordRange[0] + i * wordStep;
        const end = wordRange[0] + (i + 1) * wordStep;
        return (
          <Word key={i} progress={progress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Services: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.1"],
  });

  const servicesList = [
    "Design de site internet",
    "Creation de logo",
    "Création de carte de visite",
    "Design de livre",
    "Carte de restaurant",
  ];

  return (
    <section className="px-[4vw] py-[5vh] flex flex-col items-start justify-between lg:flex-row lg:items-center">
      <h2
        className="w-full h-full text-[12vw] text-center uppercase text-background bg-secondary py-2 lg:w-fit lg:h-max lg:text-[8vw] lg:px-6 lg:py-24"
        id="services"
      >
        Services
      </h2>
      <div
        ref={container}
        className="text-[8vw] mt-4 whitespace-nowrap uppercase lg:text-[5vw] lg:mt-0 lg:text-end lg:h-full lg:flex lg:flex-col lg:justify-between"
      >
        {servicesList.map((service, index) => (
          <Paragraph
            key={index}
            paragraph={service}
            progress={scrollYProgress}
            wordRange={[
              index / servicesList.length,
              (index + 1) / servicesList.length,
            ]}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
