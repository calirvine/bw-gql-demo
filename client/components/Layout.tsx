import styled from '@emotion/styled';
import Link from 'next/link';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  max-width: 20%;
  justify-content: space-between;
`;

const H4 = styled.h4`
  margin: 0;
`;

const App = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <App>
      <Header>
        <H4>
          <Link href="/">Cheera!</Link>
        </H4>
        <Link href="/">Home</Link>
        <Link href="/careers">Careers</Link>
      </Header>
      <main>{children}</main>
    </App>
  );
};
