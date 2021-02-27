import React from 'react';

import { SideBar } from '../components/SideBar';
import { AuthPorvider } from '../contexts/AuthContext';

import '../styles/global.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthPorvider>
      {router.pathname !== '/login' && <SideBar />}
      <Component {...pageProps} />
    </AuthPorvider>
  );
}

export default MyApp
