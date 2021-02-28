import { useRouter } from 'next/router';

import styles from '../styles/components/LoginForm.module.css';

export function LoginForm() {
  const router = useRouter();

  function handleRedirectToUser() {
    router.push('/')
  }

  return (
    <main className={styles.container}>
      <div className={styles.symbol}>
        <img src="/icons/symbol.svg" alt="Symbol" />
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.logo}>
          <img src="/icons/logo.svg" alt="Logo" />
        </div>

        <div className={styles.login}>
          <strong>Bem-Vindo</strong>

          <p>
            <img src="/icons/github32-light.png" alt="Github Icon" />
            <span>Faça login com seu Github para começar</span>
          </p>

          <div className={styles.inputContainer}>
            <input type="text" placeholder="Digite seu Username" />
            <button type="button" onClick={handleRedirectToUser}><img src="/icons/arrow.svg" alt="Arrow" /></button>
          </div>
        </div>
      </div>
    </main>
  )
}
