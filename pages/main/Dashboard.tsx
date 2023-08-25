import React from "react";
import classNames from "classnames";
import LatestChats from "../../components/Dashboard/LatestChats/LatestChats";
import { PostInput } from "../../components/Dashboard/PostInput/PostInput";
import Sorting from "../../components/Dashboard/Sorting/Sorting";
import { Suggestions } from "../../components/Dashboard/Suggestions/Suggestions";
import { SearchBar } from "../../components/UI/Searchbar/SearchBar";
import { Feed } from "../../containers/Feed/Feed";
import Header from "../../containers/Header/Header";
import { Section } from "../../layouts/Section/Section";
import { chats } from "../../mocks/chats";
import { suggestions } from "../../mocks/suggestions";
import s from "./Dashboard.module.scss";
import { useAnimation } from "../../context/animation/AnimationContext";
import { PostEditor } from "../../components/PostEditor/PostEditor";

type Props = {};

export default function Dashboard({}: Props) {
  const { activeAnimation } = useAnimation();

  return (
    <div className={s.dashboard_container}>
      <Header />
      <div
        className={classNames(s.dashboard_content, {
          [s.postinput]: activeAnimation === "postinput",
        })}
      >
        <div className={s.dashboard_column}>
          <SearchBar />
          <Sorting expanded={true} />
        </div>
        <div
          className={classNames({
            [s.hide]: activeAnimation === "postinput",
          })}
        >
          <Section title="Feed">
            <div className={s.dahboard_column}>
              <Feed />
            </div>
          </Section>
        </div>
        <div className={s.dashboard_column}>
          <Suggestions suggestions={suggestions} />
          <LatestChats chats={chats} />
        </div>
      </div>
      <div
        className={classNames({
          [s.show]: activeAnimation === "postinput",
        })}
      >
        <Section title="Publication">
          <PostEditor />
        </Section>
      </div>
    </div>
  );
}
