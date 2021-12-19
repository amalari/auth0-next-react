import { EmailVerificationContainer } from "../containers";
import auth0 from "../lib/auth0";

function Dashboard() {
  return <EmailVerificationContainer isOpen={true} />;
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

  return { props: {} };
}

export default Dashboard;
