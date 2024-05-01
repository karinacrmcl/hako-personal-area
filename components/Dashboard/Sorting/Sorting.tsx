import React from "react";
import { postCategories } from "../../../constants/categories";
import Block from "../../../layouts/Block/Block";
import Categories from "../Categories/Categories";
import { Hint } from "./Hint";
import s from "./Sorting.module.scss";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

type Props = {
  expanded: boolean;
};

export default function Sorting({ expanded }: Props) {
  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  return (
    <Block
      title={isMobile ? "" : expanded ? "Sorting categories" : "Sort"}
      titleAsset={expanded && <Hint />}
      className={classNames(s.wrapper, { [s.expanded]: expanded })}
    >
      <Categories categories={postCategories} expanded={expanded} />
    </Block>
  );
}
