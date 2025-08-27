import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = saved ? saved === 'dark' : prefers
    setEnabled(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggle = () => {
    const next = !enabled
    setEnabled(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button onClick={toggle} className="px-3 py-1 rounded-xl border border-gray-300/60 dark:border-gray-700/60 hover:bg-gray-100 dark:hover:bg-gray-800">
      {enabled ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
