
import Link from 'next/link';

import { useRouter } from 'next/router';
import React from 'react';

import { BiHome, BiMedal, BiLogOut } from 'react-icons/bi';

import styles from '../styles/components/SideBar.module.css';

export function SideBar() {
  const router = useRouter();

  const isActive = (validPath: string) => {
    return router.pathname === validPath
      ? styles.siderBaractive
      : styles.siderBarNotActive;
  };

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.logo}>
        <img src="/icons/logo.svg" alt="Logo" />
      </div>
      <ul>
        <li className={isActive('/')}>
          <a href="/"><BiHome /></a>
        </li>
        <li className={isActive('/leaderboard')}>
          <a href="/leaderboard"><BiMedal /></a>
        </li>
      </ul>

      <p><a href="/logout"><BiLogOut /></a></p>
    </div>
  );
}
