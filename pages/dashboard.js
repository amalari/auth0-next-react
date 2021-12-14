import useSWR from "swr";
import Layout from "../components/layout";

function Dashboard() {
  const { data, error } = useSWR("/api/users", async (url) => {
    // const accessToken = await getAccessTokenSilently({
    //   audience: process.env.AUTH0_CLIENT_ID,
    //   scope: process.env.AUTH0_SCOPE,
    // });
    const res = await fetch(url);
    return res.json();
  });
  console.log({ data });
  // const { user, loading } = useFetchUser();

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

export default Dashboard;
