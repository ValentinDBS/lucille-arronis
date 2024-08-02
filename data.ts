import { CategoriesType } from "./Types";

export const projectsList: CategoriesType = {
  categories: [
    {
      name: "Site Internet",
      id: 1,
      projects: [
        { name: "Projet internet 1", image: "/images/image.png" },
        { name: "Projet  internet 2", image: "/images/image2.png" },
        { name: "Projet 3", image: "/images/placeholder.jpg" },
      ],
    },
    {
      name: "Logo",
      id: 2,
      projects: [
        {
          name: "La Perle",
          image: "/logo/la-perle-mockup-logo.png",
        },
        { name: "ZenTea", image: "/logo/zentea-mockup-logo.png" },
        { name: "Cubo", image: "/logo/cubo-mockup-logo.png" },
      ],
    },
    {
      name: "Carte de Visite",
      id: 3,
      projects: [
        {
          name: "La Perle",
          image: "/businessCard/la-perle-mockup-carte-visite.png",
        },
        {
          name: "ZenTea",
          image: "/businessCard/zentea-mockup-carte-visite.png",
        },
        {
          name: "Cubo",
          image: "/businessCard/cubo-mockup-carte-visite.png",
        },
      ],
    },

    {
      name: "Carte de Restaurant",
      id: 4,
      projects: [
        {
          name: "La Perle",
          image: "/restaurant/la-perle-mockup-carte-de-restau.png",
        },

        { name: "ZenTea", image: "/restaurant/1.png" },
        {
          name: "Cubo",
          image: "/restaurant/cubo-mockup-carte-restau.png",
        },
      ],
    },
  ],
};
