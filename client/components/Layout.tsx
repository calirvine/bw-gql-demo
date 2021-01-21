import styled from "@emotion/styled";
import Link from "next/link";

const HeaderSection = styled.div`
  display: flex;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 30%;
  flex: 1;
  justify-content: space-between;
`;

const H4 = styled.h4`
  margin: 0;
  font-size: 30px;
`;

const HeaderLinks = styled.a`
  &a: {
    display: flex;
    margin: auto;
  }
  display: flex;
  margin: auto;
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
      <HeaderSection>
        <Header>
          <H4>
            <Link href="/">Cheera!</Link>
          </H4>
          <Link href="/" passHref>
            <HeaderLinks>Home</HeaderLinks>
          </Link>
          <Link href="/careers" passHref>
            <HeaderLinks>Careers</HeaderLinks>
          </Link>
        </Header>
      </HeaderSection>

      <main>{children}</main>
    </App>
  );
};

export default Layout;
