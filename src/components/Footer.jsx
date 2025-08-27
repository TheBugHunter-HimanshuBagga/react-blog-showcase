export default function Footer() {
  return (
    <footer className="border-t border-gray-200/70 dark:border-gray-800/70">
      <div className="container-p py-6 text-sm flex flex-col sm:flex-row gap-2 justify-between">
        <p>© {new Date().getFullYear()} Showcase. Built with React + Tailwind.</p>
        <p className="opacity-75">Deploy-ready for Vercel/Netlify</p>
      </div>
    </footer>
  )
}
