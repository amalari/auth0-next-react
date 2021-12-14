import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ApolloProvider } from "@apollo/react-hooks";
import { withApollo } from "../lib/withApollo";

const App = ({ Component, pageProps, apollo }) => {
  return (
    <UserProvider>
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    </UserProvider>
  );
};

export default withApollo(App);
