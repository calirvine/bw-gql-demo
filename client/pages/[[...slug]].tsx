import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { PageQuery, PageQueryVariables } from './__generated__/PageQuery';

export const PAGE_QUERY = gql`
  query PageQuery($slug: String!) {
    getPageBySlug(slug: $slug) {
      sections {
        __typename
      }
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const { data, loading, error } = useQuery<PageQuery, PageQueryVariables>(
    PAGE_QUERY,
    {
      variables: {
        slug: router.asPath,
      },
    }
  );

  return (
    <>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
