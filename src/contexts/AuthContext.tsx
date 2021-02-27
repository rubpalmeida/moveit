import { createContext, ReactNode, useState } from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
}

interface AuthPorviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthPorvider({ children }: AuthPorviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <AuthContext.Provider
      value={
        isAuthenticated
      }
    >

      {children}

    </AuthContext.Provider>
  );
}
