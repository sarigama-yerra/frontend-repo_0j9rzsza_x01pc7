import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Admissions from './pages/Admissions'
import StudentLife from './pages/StudentLife'
import Contact from './pages/Contact'
import News from './pages/News'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Announcement bar */}
      <div className="bg-[#081A39] text-white text-sm text-center py-2">
        Admissions for the 2025/26 school year are open. <a className="underline font-semibold" href="/admissions">Apply Now</a>
      </div>

      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
