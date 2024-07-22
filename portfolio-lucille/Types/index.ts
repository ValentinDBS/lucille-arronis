export type ProjectType = {
  name: string;
  image: string;
};

export type CategoryType = {
  name: string;
  projects: ProjectType[];
};

export type CategoriesType = { categories: CategoryType[] };

export type ParamsProps = { params: { locale: string } };
