import { Link, NavLink } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  const active = ({ isActive }) =>
    isActive ? 'text-sky-500 font-semibold' : 'hover:text-sky-500'

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/70 dark:border-gray-800/70 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="container-p py-3 flex items-center gap-4">
        <Link to="/" className="text-xl font-bold">🚀 Showcase</Link>
        <nav className="ml-auto flex items-center gap-6">
          <NavLink to="/" className={active}>Home</NavLink>
          <NavLink to="/about" className={active}>About Me</NavLink>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  )
}
