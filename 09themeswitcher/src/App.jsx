import { useState } from 'react'
import { ThemeProvider } from './context/theme'
import { Card,ThemesBtn } from './components/index'
import { useEffect } from 'react';

function App() {
  const lightMode = () => setThemeMode("light");
  const darkMode = () => setThemeMode("dark");
  const [themeMode, setThemeMode] = useState("light")

  useEffect(( )=> {
    const htmlElement = document.querySelector('html')
    htmlElement.classList.remove("light","dark");
    htmlElement.classList.add(themeMode)
  }, [themeMode])
  return (
    <>
    <ThemeProvider value = {{themeMode,lightMode,darkMode}}>
      <ThemesBtn />
      <div className="w-full max-w-sm mx-auto">
        <Card />
      </div>

    </ThemeProvider>
    </>
  )
}

export default App
