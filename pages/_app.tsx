/* eslint-disable react-hooks/rules-of-hooks */
import '../styles/style.css';

import { AppProps } from 'next/app';
import { AuthProvider } from '../auth/useAuth';

import Container from '../components/Container';

function MyApp({ Component, pageProps }: AppProps): any {
  return (
    <AuthProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </AuthProvider>
  );
}

export default MyApp;
