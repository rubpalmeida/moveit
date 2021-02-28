import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  timeProgressPercentage: number;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;
let countupTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const initialTime = 0.1 * 60;

  const [time, setTime] = useState(initialTime);
  const [timeUp, setTimeUp] = useState(0);
  const [isActive, setisActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const timeProgressPercentage = Math.floor((timeUp * 100) / initialTime);

  function startCountdown() {
    setisActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    clearTimeout(countupTimeout);
    setisActive(false);
    setHasFinished(false);
    setTime(initialTime);
    setTimeUp(0);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countupTimeout = setTimeout(() => {
        setTimeUp((timeUp + 1))
      }, 1000)
    }
  }, [isActive, time])


  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setisActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
      timeProgressPercentage,
    }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
