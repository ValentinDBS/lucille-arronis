export type ProjectType = {
  name: string;
  image: string;
};

export type CategoryType = {
  name: string;
  id?: number;
  projects: ProjectType[];
};

export type CategoriesType = { categories: CategoryType[] };

export type ParamsProps = { params: { locale: string } };
