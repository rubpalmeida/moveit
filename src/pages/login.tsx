import Head from 'next/head';

import { LoginForm } from '../components/LoginForm';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Move.it</title>
      </Head>
      <LoginForm />
    </>
  );
}
