import { Layout, EmailVerification, ProfileCard } from "../components";
import { UserTable } from "../containers/user";
import { useUser } from "@auth0/nextjs-auth0";
import auth0 from "../lib/auth0";
import { authMiddleware } from "../middlewares";

function Dashboard() {
  const { user, error, isLoading } = useUser();

  return (
    <Layout user={user}>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-3">
          <ProfileCard />
        </div>
        <div className="col-span-7">
          <UserTable />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req, res);
  const resAuthMiddleware = await authMiddleware(session);
  if (resAuthMiddleware) return resAuthMiddleware;

  return { props: {} };
}

export default Dashboard;
