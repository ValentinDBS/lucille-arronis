"use client";

import Image from "next/image";
import { projectsList } from "../data";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import * as React from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects");

  // Initialisation de l'état pour la catégorie sélectionnée avec la traduction initiale
  const [selectedCategory, setSelectedCategory] = React.useState(
    t("categorie1") // Utilisez la première catégorie comme valeur par défaut
  );

  // Trouver les données pour la catégorie sélectionnée en utilisant la clé traduite
  const selectedCategoryData = projectsList.categories.find(
    (category) => t(`categorie${category.id}`) === selectedCategory
  );

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
  };

  const anim = {
    initial: { width: 0 },
    open: { width: "100%" },
    exit: { width: 0 },
  };

  return (
    <section className="px-[4vw] py-[5vh] lg:pt-[12vh] lg:pb-0" id="projects">
      <div className="lg:flex lg:gap-4">
        <div className="flex items-center justify-between lg:flex-col lg:items-start lg:justify-start lg:gap-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-[14vw] uppercase text-secondary py-2 w-fit lg:text-[10vw] lg:leading-[9vw] lg:p-0 lg:mr-8 lg:mb-16">
              {t("title")}
            </h2>
            {projectsList.categories.map((category) => {
              // Traduire le nom de la catégorie
              const categoryName = t(`categorie${category.id}`);
              return (
                <div
                  key={category.id}
                  className="hidden lg:flex items-center flex-col lg:items-start cursor-pointer lg:w-full"
                  onClick={() => handleCategoryChange(categoryName)}
                >
                  <motion.p
                    initial={false}
                    animate={
                      categoryName === selectedCategory ? "open" : "closed"
                    }
                    className={`category-text uppercase relative text-[2.5vw] leading-normal w-full hover:text-secondary transition-all duration-500 ${
                      categoryName === selectedCategory
                        ? "text-primary category-open"
                        : "text-text category-closed"
                    }`}
                  >
                    {categoryName}
                  </motion.p>
                </div>
              );
            })}
          </div>

          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="min-w-24 w-fit sm:min-w-36 min-h-fit sm:h-12 md:h-16 uppercase text-sm sm:text-xl border-secondary"
                >
                  {selectedCategory}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-56 w-fit">
                <DropdownMenuLabel className="uppercase text-base sm:text-xl">
                  {t("select_category")}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  {projectsList.categories.map((category) => {
                    const categoryName = t(`categorie${category.id}`);
                    return (
                      <DropdownMenuRadioItem
                        key={category.id}
                        value={categoryName}
                        className="uppercase text-base"
                      >
                        {categoryName}
                      </DropdownMenuRadioItem>
                    );
                  })}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-start w-full border-x-2 border-secondary gap-0 z-20 xl:h-auto 2xl:h-auto">
          {selectedCategoryData &&
            selectedCategoryData.projects.map((project, index) => (
              <div key={index} className="flex w-full h-full flex-row">
                {index % 2 === 0 ? (
                  <>
                    <p className="text-text flex items-center bg-background justify-center uppercase text-[3vw] w-1/2">
                      {project.name}
                    </p>
                    <div className="h-full lg:min-h-[300px] xl:min-h-[400px] w-full lg:w-1/2">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="w-full object-cover lg:w-fit !relative"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-full lg:min-h-[300px] xl:min-h-[400px] bg-background w-1/2">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="w-fit object-cover !relative"
                      />
                    </div>
                    <p className="text-text flex items-center justify-center uppercase text-[3vw] w-1/2">
                      {project.name}
                    </p>
                  </>
                )}
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-12 items-start w-full lg:hidden">
          {selectedCategoryData &&
            selectedCategoryData.projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 w-full lg:flex-row"
              >
                <p className="text-text uppercase text-[5vw] lg:w-1/2">
                  {project.name}
                </p>
                <div className="h-full w-full bg-background lg:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="w-fit object-cover !relative"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
