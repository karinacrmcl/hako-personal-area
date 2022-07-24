import React from "react";
import s from "./Profile.module.scss";
import Sorting from "../../components/Dashboard/Sorting/Sorting";
import ProfileCard from "../../components/Profile/ProfileCard/ProfileCard";
import { Feed } from "../../containers/Feed/Feed";
import { user } from "../../mocks/user";
import Header from "../../containers/Header/Header";

type Props = {};

export function Profile({}: Props) {
  return (
    <div className={s.profile_container}>
      <Header user={user} />
      <div className={s.profile_content}>
        <div className={s.profile_column}>
          <Sorting expanded={false} />
        </div>

        <div className={s.profile_column}>
          <Feed />
        </div>

        <div className={s.profile_column}>
          <ProfileCard
            user={user}
            onShowPosts={() => console.log()}
            onShowPinned={() => console.log()}
            onMessageUser={() => console.log()}
            onAddUser={() => console.log()}
            onExpandBtn={() => console.log()}
          />
        </div>
      </div>
    </div>
  );
}
