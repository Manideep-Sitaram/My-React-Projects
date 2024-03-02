import { createContext,useContext } from "react";

const ThemeContext = createContext({
    themeMode : "light",
    lightTheme : () => {},
    darkTheme : () => {}
});

export const ThemeProvider = ThemeContext.Provider;

function useTheme() {
    return useContext(ThemeContext)
}

export default useTheme;