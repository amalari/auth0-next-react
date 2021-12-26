import Head from "next/head";
import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { useToastAlert } from "../lib/toast";

const Layout = ({
  isAuthenticated = false,
  isHome,
  isLoading = false,
  children,
}) => {
  useToastAlert();

  return (
    <div className="bg-slate-50 min-h-screen">
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header
        isAuthenticated={isAuthenticated}
        isHome={isHome}
        isLoading={isLoading}
      />

      <main>
        <ToastContainer autoClose={8000} />
        <div className="mx-32 my-6">{children}</div>
      </main>
    </div>
  );
};

Layout.propTypes = {
  isAuthenticated: PropTypes.bool,
  isHome: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export { Layout };
