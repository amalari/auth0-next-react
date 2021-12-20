import { useState } from "react";
import { Layout } from "../components";
import {
  UserTable,
  ProfileCardContainer,
  StatsCardCointainer,
} from "../containers";
import auth0 from "../lib/auth0";
import { authMiddleware } from "../middlewares";

const Dashboard = () => {
  const [userCounter, setUserCounter] = useState(0);
  return (
    <Layout isAuthenticated={true}>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-3">
          <ProfileCardContainer />
        </div>
        <div className="col-span-7">
          <StatsCardCointainer userCounter={userCounter} />
          <UserTable setUserCounter={setUserCounter} />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req, res);
  const resAuthMiddleware = await authMiddleware(session);
  if (resAuthMiddleware) return resAuthMiddleware;

  return { props: {} };
}

export default Dashboard;
