import { Descendant } from "slate";

export const getCharCount = (arr: Descendant[]) => {
  return arr?.reduce((total, obj) => {
    return (
      total +
      // @ts-expect-error meow
      (obj?.children
        ? // @ts-expect-error meow
          obj?.children?.reduce((acc, child) => {
            return acc + (child.text ? child.text.length : 0);
          }, 0)
        : 0)
    );
  }, 0);
};
