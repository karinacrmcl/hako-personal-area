import React from "react";
import { User } from "../../../@types/entities/User";
import Block from "../../../layouts/Block/Block";
import { UISvgSelector } from "../../UI/UISvgSelector";
import s from "./Suggestions.module.scss";
import SuggestionsItem from "./SuggestionsItem";

type Props = {
  suggestions: User[];
};

export function Suggestions({ suggestions }: Props) {
  return (
    <Block title="Suggested for you" titleAsset={<UISvgSelector id="users" />}>
      <div className={s.suggestions_container}>
        {suggestions.map((item: User) => {
          return (
            <SuggestionsItem user={item} onAddUser={() => console.log()} />
          );
        })}
      </div>
    </Block>
  );
}
