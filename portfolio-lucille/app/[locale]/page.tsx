import About from "@/components/About";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LenisWrapper from "@/components/LenisWrapper";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TranslationsProvider from "@/components/TranslationProvider";
import { ParamsProps } from "@/Types";
import initTranslations from "../i18n";

export default async function Home({ params: { locale } }: ParamsProps) {
  const { t, resources } = await initTranslations(locale, ["hero"]);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["hero"]}
    >
      <LenisWrapper />
      <section className="grillePerso min-h-svh">
        <Header />
        <Hero />
      </section>
      <About />
      <Services />
      <Projects />
      <CTA />
    </TranslationsProvider>
  );
}
