import { ReactNode } from "react";

export const Leaf = ({
  attributes,
  children,
  leaf,
}: {
  attributes: any;
  children: ReactNode;
  leaf: any;
}) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};