"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Separator } from "./ui/separator";

const MaskedEmail = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail("lucillearronis1" + "@" + "gmail.com");
  }, []);

  return (
    <Link
      href={`mailto:${email}`}
      className="text-background uppercase text-[5vw] leading-[5vw] md:text-[3.5vw] md:leading-[3.5vw] lg:text-[2vw] lg:leading-[2vw] hover:text-text transition-all duration-500"
    >
      {email}
    </Link>
  );
};

const CTA = () => {
  return (
    <section
      className="px-[4vw] py-[12vh] h-fit flex flex-col gap-12 items-center bg-secondary"
      id="contact"
    >
      <h3
        className="text-[11vw] leading-[11vw] uppercase text-background py-2 lg:w-fit lg:h-max lg:text-[7vw] lg:leading-[7vw]"
        id="cta"
      >
        Contactez-moi
      </h3>

      <MaskedEmail />

      <Separator className="w-2/3 lg:w-1/2 bg-text" />
      <div className="flex flex-col items-center gap-2 text-background uppercase text-[5vw] leading-[5vw] md:text-[3.5vw] md:leading-[3.5vw] lg:text-[2vw] lg:leading-[2vw] ">
        <p className="">Fait avec amour par</p>
        <Link
          href="https://valentin-descombes.com"
          target="_blank"
          className="underline underline-offset-8 hover:text-text transition-all duration-500"
        >
          Valentin Descombes
        </Link>
      </div>
    </section>
  );
};

export default CTA;
