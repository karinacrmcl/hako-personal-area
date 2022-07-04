import React from "react";
import { postCategories } from "../../../constants/categories";
import Block from "../../../layouts/Block/Block";
import Categories from "../Categories/Categories";
import { Hint } from "./Hint";

type Props = {
  expanded: boolean;
};

export default function Sorting({ expanded }: Props) {
  return (
    <Block
      title="Sorting categories"
      titleAsset={<Hint />}
      styles={{ width: expanded ? "350px" : "85px" }}
    >
      <Categories categories={postCategories} />
    </Block>
  );
}
