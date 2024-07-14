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

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(
    projectsList.categories[0].name
  );

  const selectedCategoryData = projectsList.categories.find(
    (category) => category.name === selectedCategory
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
    <section className="px-[4vw] py-[5vh] lg:pt-[12vh] lg:pb-0">
      <div className="lg:flex lg:gap-4">
        <div className="flex items-center justify-between lg:flex-col lg:items-start lg:justify-start lg:gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-[14vw] uppercase text-secondary py-2 w-fit lg:text-[10vw] lg:leading-[9vw] lg:p-0 lg:mr-8 lg:mb-8">
              Projets
            </h2>
            {projectsList.categories.map((category, index) => (
              <div
                key={index}
                className="hidden lg:flex items-center flex-col lg:items-start cursor-pointer lg:w-full"
                onClick={() => handleCategoryChange(category.name)}
              >
                <motion.p
                  initial={false}
                  animate={
                    category.name === selectedCategory ? "open" : "closed"
                  }
                  className={`category-text uppercase relative text-[2.5vw] leading-normal w-full ${
                    category.name === selectedCategory
                      ? "text-primary category-open"
                      : "text-text category-closed"
                  }`}
                >
                  {category.name}
                </motion.p>
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="min-w-24 sm:min-w-36 min-h-fit w-1/3 sm:h-12 md:h-16 uppercase text-base sm:text-xl"
                >
                  {selectedCategory}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-56 w-fit">
                <DropdownMenuLabel className="uppercase text-base sm:text-xl">
                  Sélectionner une catégorie
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  {projectsList.categories.map((category, index) => (
                    <DropdownMenuRadioItem
                      key={index}
                      value={category.name}
                      className="uppercase text-base"
                    >
                      {category.name}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-start w-full border-x-2 border-secondary gap-0 z-20 xl:h-[800px] 2xl:h-[1000px]">
          {selectedCategoryData &&
            selectedCategoryData.projects.map((project, index) => (
              <div key={index} className="flex w-full h-full flex-row">
                {index % 2 === 0 ? (
                  <>
                    <p className="text-text flex items-center bg-background justify-center uppercase text-[3vw] w-1/2">
                      {project.name}
                    </p>
                    <div className="h-full w-full lg:w-1/2">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        objectFit="cover"
                        className="w-full lg:w-fit !relative"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-full bg-background w-1/2">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        objectFit="cover"
                        className="w-fit !relative"
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
                    objectFit="cover"
                    className="w-fit !relative"
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
