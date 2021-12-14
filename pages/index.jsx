import { useUser } from "@auth0/nextjs-auth0";
import useSWR from "swr";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";

function Home() {
  return (
    <Layout user={null} loading={false}>
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

export default Home;