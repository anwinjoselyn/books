import Head from 'next/head';

import Header from './Header';
import Sidebar from './Sidebar';
// import { Loading } from './';
import LoginForm from './forms/LoginForm';

import useRequireAuth from '../auth/useRequireAuth';

export default function Container({ children }: { children: React.ReactNode }) {
  const auth = useRequireAuth();

  return (
    <div className="flex bg-bg-light">
      <Head>
        <title>To Do App with Next.js, Firebase {`&`} Tailwind CSS</title>
        <meta
          name="title"
          property="og:title"
          content="To Do App with Next.js, Firebase & Tailwind CSS"
          key="title"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6 ...">
        <Header />
        <div className="p-3">{auth.user ? children : <LoginForm />}</div>
      </div>
    </div>
  );
}
