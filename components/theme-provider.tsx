import { createContext, useContext, ReactNode } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  }
};

const defaultTheme: Theme = {
  colors: {
    primary: "#000000",
    secondary: "#ffffff",
  }
};

const ThemeContext = createContext<Theme>(defaultTheme);

type ThemeProviderProps = {
  children: ReactNode;
  value?: Theme;
};

export const ThemeProvider = ({ children, value }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={value ?? defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
