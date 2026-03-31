import { createContext, useContext } from 'react';

interface ThemeContextType {
  basePath: string;
  themeName: string;
}

const ThemeContext = createContext<ThemeContextType>({
  basePath: '',
  themeName: '',
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => useContext(ThemeContext);
