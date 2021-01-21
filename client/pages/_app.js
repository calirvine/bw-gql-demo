import { ApolloProvider } from "@apollo/client";
import dynamic from "next/dynamic";

import { client } from "../services/apolloClient";
import "../styles/globals.css";

const Layout = dynamic(() => import("../components/Layout"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
