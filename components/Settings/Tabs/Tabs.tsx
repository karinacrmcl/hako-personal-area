import React, { useState } from "react";
import { settingsTabs } from "./constants";
import s from "./Tabs.module.scss";
import classNames from "classnames";
import { UISvgSelector } from "../../UI/UISvgSelector";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(settingsTabs[0].name);

  return (
    <div className={s.tabs}>
      {settingsTabs.map((tab) => {
        return (
          <div
            className={classNames(s.tab_item, {
              [s.tab_active]: activeTab === tab.name,
            })}
            key={tab.key}
          >
            <UISvgSelector id={`settings-${tab.name}`} />
            <h5>{tab.label}</h5>
          </div>
        );
      })}
    </div>
  );
}
