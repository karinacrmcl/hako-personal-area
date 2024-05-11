import { Descendant } from "slate";

export const getCharCount = (arr: Descendant[]) => {
  return arr?.reduce((total, obj) => {
    return (
      total +
      (obj?.children
        ? obj?.children?.reduce((acc, child) => {
            return acc + (child.text ? child.text.length : 0);
          }, 0)
        : 0)
    );
  }, 0);
};
