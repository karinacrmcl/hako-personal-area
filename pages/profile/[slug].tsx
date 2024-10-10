import React from "react";
import s from "./Profile.module.scss";
import Sorting from "../../components/Dashboard/Sorting/Sorting";
import ProfileCard from "../../components/Profile/ProfileCard/ProfileCard";
import { Feed } from "../../containers/Feed/Feed";
import Header from "../../containers/Header/Header";
import { NextPage } from "next";
import { useUser } from "../../context/user/UserContext";
import { useRouter } from "next/router";
import { useGetUserByIdQuery } from "../../store/api/userApi";

const Profile: NextPage = () => {
  const router = useRouter();

  const {data: user} = useGetUserByIdQuery(router?.query?.slug?.[0] || "")

  if (!user) return null;

  return (
    <div className={s.profile_container}>
      <Header />
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
};

export default Profile;
