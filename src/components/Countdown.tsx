import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer} >
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          type="button"
          className={styles.countdownButton}
        >
          <p>Ciclo Encerrado</p> <span> <CheckCircleIcon /> </span>
        </button>
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                <p>Abandonar Ciclo</p> <span> <CloseIcon /> </span>
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  <p>Iniciar Ciclo</p> <span> <PlayArrowIcon /> </span>
                </button>
              )}
          </>
        )}
    </div>
  );
}
