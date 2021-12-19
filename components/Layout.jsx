import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { Header } from "./Header";
import { useToastAlert } from "../lib/toast";

export const Layout = ({ isAuthenticated = false, children }) => {
  useToastAlert();

  return (
    <div className="bg-slate-50 min-h-screen">
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header isAuthenticated={isAuthenticated} />

      <main>
        <ToastContainer autoClose={8000} />
        <div className="mx-32 my-6">{children}</div>
      </main>
    </div>
  );
};
