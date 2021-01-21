import { ApolloProvider } from '@apollo/client';
import { client } from '../services/apolloClient';
import { Layout } from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
