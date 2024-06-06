import type { NextPage } from "next";
import Dashboard from "./main/Dashboard";
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
