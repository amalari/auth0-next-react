import { Layout, EmailVerification } from "../components";
import { useUser } from "@auth0/nextjs-auth0";
import auth0 from "../lib/auth0";

function Dashboard() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout user={user}>
      <h1>Next.js and Auth0 Example</h1>

      {/* {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{" "}
            <i>Profile</i> and <i>Logout</i>
          </p>
        </>
      )}

      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          <img src={user.picture} alt="user picture" />
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
        </>
      )} */}
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  // Here you can check authentication status directly before rendering the page,
  // however the page would be a serverless function, which is more expensive and
  // slower than a static page with client side authentication
  const session = await auth0.getSession(req, res);
  console.log({ session });
  if (!session || !session.user) {
    return {
      redirect: {
        destination: "/api/login",
        permanent: false,
      },
    };
  }

  return { props: { user: session.user } };
}

export default Dashboard;
