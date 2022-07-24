import type { NextPage } from "next";
import Dashboard from "./main/Dashboard";
import { Profile } from "./profile/Profile";

const Home: NextPage = () => {
  return (
    <div>
      <Profile />
      {/* <Dashboard /> */}
    </div>
  );
};

export default Home;
