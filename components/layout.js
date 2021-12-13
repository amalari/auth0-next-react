import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Header from "./header";
import { useToastAlert } from "../lib/toast";

function Layout({ user, loading = false, children }) {
  useToastAlert();

  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <ToastContainer autoClose={8000} />
        <div className="container">{children}</div>
      </main>

      <style jsx>{`
        .container {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      `}</style>
    </>
  );
}

export default Layout;
