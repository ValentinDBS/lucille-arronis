"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const MaskedEmail = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail("lucillearronis1" + "@" + "gmail.com");
  }, []);

  return <a href={`mailto:${email}`}>{email}</a>;
};

const CTA = () => {
  return (
    <section className="px-[4vw] py-[12vh] h-fit flex flex-col gap-16 items-center bg-secondary">
      <h3
        className="text-[11vw] leading-[11vw] uppercase text-background py-2 lg:w-fit lg:h-max lg:text-[7vw] lg:leading-[7vw]"
        id="cta"
      >
        Contactez-moi
      </h3>
      <Link
        className="uppercase lg:text-[2vw] lg:leading-[2vw]"
        href="mailto:lucillearronis1@gmail.com"
      >
        lucillearronis1@gmail.com
      </Link>
    </section>
  );
};

export default CTA;
