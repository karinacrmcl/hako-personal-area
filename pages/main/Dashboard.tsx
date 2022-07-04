import React from "react";
import { PostInput } from "../../components/Dashboard/PostInput/PostInput";
import Sorting from "../../components/Dashboard/Sorting/Sorting";
import { Suggestions } from "../../components/Dashboard/Suggestions/Suggestions";
import { SearchBar } from "../../components/UI/Searchbar/SearchBar";
import { Feed } from "../../containers/Feed/Feed";
import Header from "../../containers/Header/Header";
import { Section } from "../../layouts/Section/Section";
import { suggestions } from "../../mocks/suggestions";
import { user } from "../../mocks/user";
import s from "./Dashboard.module.scss";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div className={s.dashboard_container}>
      <Header user={user} />
      <div className={s.dashboard_content}>
        <div className={s.dashboard_column}>
          <SearchBar />
          <Sorting expanded={true} />
        </div>
        <Section title="Feed">
          <div className={s.dahboard_column}>
            <PostInput user={user} />
          </div>
        </Section>
        <Suggestions suggestions={suggestions} />
      </div>
    </div>
  );
}
