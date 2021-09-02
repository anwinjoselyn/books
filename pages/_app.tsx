/* eslint-disable react-hooks/rules-of-hooks */
import '../styles/style.css';

import { AppProps } from 'next/app';

import Container from '../components/Container';

function MyApp({ Component, pageProps }: AppProps): any {
    return (
        <Container>
          <Component {...pageProps} />
        </Container>
    );
}

export default MyApp;
