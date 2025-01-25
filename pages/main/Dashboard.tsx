import React from "react";
import classNames from "classnames";
import LatestChats from "../../components/Dashboard/LatestChats/LatestChats";
import Sorting from "../../components/Dashboard/Sorting/Sorting";
import { Suggestions } from "../../components/Dashboard/Suggestions/Suggestions";
import { SearchBar } from "../../components/UI/Searchbar/SearchBar";
import { Feed } from "../../containers/Feed/Feed";
import Header from "../../containers/Header/Header";
import { Section } from "../../layouts/Section/Section";
import { chats } from "../../mocks/chats";
// import { suggestions } from "../../mocks/suggestions";
import s from "./Dashboard.module.scss";
import { useAnimation } from "../../context/animation/AnimationContext";
import { PostEditor } from "../../components/PostEditor/PostEditor";
import { useMediaQuery } from "react-responsive";
import { usePostContext } from "../../context/post-editor/PostEditorContext";
import { useGetFriendSuggestionsQuery } from "../../store/api/userApi";

export default function Dashboard() {
  const { activeAnimation, inactiveAnimation } = useAnimation();
  const { open } = usePostContext();
  const { data: suggestions } = useGetFriendSuggestionsQuery();
  const isLaptop = useMediaQuery({ maxWidth: "1500px" });

  return (
    <div className={s.dashboard_container}>
      <Header />
      <div
        className={classNames(s.dashboard_content, {
          [s.postinput]: activeAnimation === "postinput",
        })}
      >
        <div className={s.dashboard_column}>
          {!isLaptop && <SearchBar />}
          <Sorting expanded={!isLaptop} />
        </div>
        <div
          className={classNames(s.feed_wrapper, {
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
        className={classNames(s.post_editor, {
          [s.post_anim_show]: activeAnimation === "postinput",
          [s.post_anim_hide]: inactiveAnimation === "postinput",
          [s.post_hide]: !open,
          [s.post_show]: open,
        })}
      >
        <Section title="Publication" className={s.post_section}>
          <PostEditor />
        </Section>
      </div>
    </div>
  );
}
