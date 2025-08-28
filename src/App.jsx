import About from './pages/About.jsx'

<Route path="/about" element={<About />} />

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Post from './pages/Post.jsx'
import About from './pages/About.jsx'  // <-- import About page

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container-p py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="/about" element={<About />} /> {/* <-- new About route */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
