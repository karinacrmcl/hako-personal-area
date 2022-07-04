import { createContext, useContext } from "react";
import { categoriesSelected } from "../mocks/categoriesSelected";

export type Categories = Record<string, boolean>;

export const CategoriesContext = createContext({
  setActiveCategories: () => null,
  activeCategories: categoriesSelected,
});

export const useCategories = () => useContext(CategoriesContext);
