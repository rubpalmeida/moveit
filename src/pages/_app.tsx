import React, { useContext } from 'react';

import { SideBar } from '../components/SideBar';

import '../styles/global.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {router.pathname !== '/login' && <SideBar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
