"use client";

import About from "@/components/About";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <>
      <section className="grillePerso min-h-svh">
        <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
        <Menu menuIsActive={menuIsActive} />
        <Hero />
      </section>
      <About />
      <Services />
      <Projects />
      <CTA />
    </>
  );
}
