import { EmailVerification } from "../components";
import { useUser } from "@auth0/nextjs-auth0";
import auth0 from "../lib/auth0";

function Dashboard({ user }) {
  const { user: currentUser, error, isLoading } = useUser();

  return <EmailVerification isOpen={true} email={user.email} />;
}

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req, res);
  if (!session || !session.user) {
    return {
      redirect: {
        destination: "/api/login",
        permanent: false,
      },
    };
  }

  if (session && session.user && session.user.email_verified) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  console.log({ user: session.user });
  return { props: { user: session.user } };
}

export default Dashboard;
