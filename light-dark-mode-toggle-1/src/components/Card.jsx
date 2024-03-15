import { useEffect, useState } from "react"
import { FaSun, FaMoon } from "react-icons/fa"

const Card = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

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
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.add("light")
      setIsDarkMode(false)
    }
  }

  // manual Theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      localStorage.setItem("theme", "light")
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      localStorage.setItem("theme", "dark")
      setIsDarkMode(true)
    }
  }

  const onClick = () => {
    setIsDarkMode(!isDarkMode)
    themeSwitch()
  }

  return (
    <div className="relative w-full max-w-sm p-8 mx-auto mt-48 border-2 rounded-lg border-border bg-card">
      <div className="absolute text-3xl icons text-icon-color top-10 right-4">
        {!isDarkMode && (
          <span onClick={onClick} className="cursor-pointer sun">
            <FaSun />
          </span>
        )}
        {isDarkMode && (
          <span onClick={onClick} className="cursor-pointer moon">
            <FaMoon />
          </span>
        )}
      </div>
      <h4 className="w-full mt-2 mb-4 text-3xl font-bold text-copy-primary">
        Dark Mode
      </h4>
      <p className="text-copy-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum sed
        blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque
        optio impedit cum voluptatem facilis minima, quasi laborum. Nihil,
        quaerat.
      </p>

      <button className="w-full py-2 mt-8 font-semibold transition-colors rounded-md bg-cta hover:bg-cta-active text-cta-text">
        Sign Up
      </button>
    </div>
  )
}

export default Card
