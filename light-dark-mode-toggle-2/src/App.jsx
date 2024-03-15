import { useEffect, useState } from "react"
import { FaSun, FaMoon } from "react-icons/fa"

function App() {
  // dark mode state
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // Initial Theme Check
  useEffect(() => {
    themeCheck()
  }, [])

  const themeCheck = () => {
    const userTheme = localStorage.getItem("theme")
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
    if (localStorage.theme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark")
      setIsDarkTheme(true)
    } else {
      document.documentElement.classList.add("light")
      setIsDarkTheme(false)
    }
  }

  // manual Theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      localStorage.setItem("theme", "light")
      setIsDarkTheme(false)
    } else {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      localStorage.setItem("theme", "dark")
      setIsDarkTheme(true)
    }
  }

  const onClick = () => {
    setIsDarkTheme(!isDarkTheme)
    themeSwitch()
  }

  return (
    <div className="flex items-center justify-center h-screen px-8 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-[600px] max-h-1/2 shadow-md p-6 rounded-md bg-white dark:bg-slate-700 dark:text-white">
        <div className="flex items-start mb-4 sm:items-center">
          <h1 className="flex-1 text-4xl">Dark/Light Mode</h1>

          {!isDarkTheme && (
            <span
              onClick={onClick}
              className="text-3xl text-black cursor-pointer sun dark:text-white"
            >
              <FaSun />
            </span>
          )}

          {isDarkTheme && (
            <span
              onClick={onClick}
              className="text-3xl text-black cursor-pointer moon dark:text-white"
            >
              <FaMoon />
            </span>
          )}
        </div>
        <p className="mb-4 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          necessitatibus aliquam quia molestias magnam culpa, repellendus omnis
          sed ea doloremque aliquid laboriosam assumenda voluptas optio placeat
          ad illum quos? Blanditiis?
        </p>
        <button className="px-4 py-2 text-white bg-black rounded-md">
          Learn More!
        </button>
      </div>
    </div>
  )
}

export default App
