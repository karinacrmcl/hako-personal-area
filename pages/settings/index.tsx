import React from "react";
import Tabs from "../../components/Settings/Tabs/Tabs";
import Header from "../../containers/Header/Header";
import s from "./Settings.module.scss";
import Content from "../../components/Settings/Content/Content";

type Props = {};

export default function Settings({}: Props) {
  return (
    <div className={s.settings_container}>
      <Header />

      <div className={s.page_content}>
        <Tabs />
        <Content />
      </div>
    </div>
  );
}
