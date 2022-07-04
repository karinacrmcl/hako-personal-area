// import React, { ReactNode, useState } from "react";
// import { Categories, CategoriesContext } from "../context/postCategories";
// import { categoriesSelected } from "../mocks/categoriesSelected";

// type Props = {
//   children: ReactNode;
// };

// export default function CategoriesProvider({ children, ...props }: Props) {
//   const [activeCategories, setActiveCategories] = useState<Categories>(categoriesSelected);

//   const h = (item:Categories) => {
//     setActiveCategories(item)
//   }

//   return (
//     <CategoriesContext.Provider value={{ activeCategories, h }} {...props}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// }

export function postCategories() {
  return;
}
