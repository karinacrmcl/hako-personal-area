export const getCharCount = (arr: { children?: { text?: string }[] }[]) => {
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
