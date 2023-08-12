import type { NextPage } from "next";
import { AuthPage } from "./auth/AuthPage";
import Dashboard from "./main/Dashboard";
import { Profile } from "./profile/Profile";

const Home: NextPage = () => {
  return (
    <div>
      {/* <Profile /> */}
      <Dashboard />
      {/* <AuthPage /> */}
    </div>
  );
};

export default Home;
