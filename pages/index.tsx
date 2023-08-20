import type { NextPage } from "next";
import { AuthPage } from "../layouts/Auth/ui/AuthPage";
import Dashboard from "./main/Dashboard";
import { Profile } from "./profile/Profile";
import { PrivateLayout } from "../layouts/Auth/PrivateLayout";

const Home: NextPage = () => {
  return (
    <PrivateLayout>
      {/* <Profile /> */}
      <Dashboard />
      {/* <AuthPage /> */}
    </PrivateLayout>
  );
};

export default Home;
