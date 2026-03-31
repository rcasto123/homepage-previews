import { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { themes } from "../themes/themeRegistry";

interface ThemeContextValue {
  /** The base path for this theme (e.g., "/v1" or "" when live) */
  basePath: string;
  /** Current theme ID (e.g., "v1") */
  themeId: string;
}

const ThemeContext = createContext<ThemeContextValue>({
  basePath: "",
  themeId: "v1",
});

export function ThemeProvider({ children, themeId }: { children: React.ReactNode; themeId: string }) {
  const location = useLocation();

  const value = useMemo(() => {
    // Check if current path starts with any theme path prefix
    const theme = themes.find((t) => location.pathname.startsWith(t.path));
    return {
      basePath: theme ? theme.path : "",
      themeId,
    };
  }, [location.pathname, themeId]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * Use this hook in any theme component to get the basePath and themeId.
 * Replaces the manual `location.pathname.startsWith("/v1")` pattern.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
