import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, GraduationCap } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programs', label: 'Programs' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/student-life', label: 'Student Life' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'bg-white text-[#0A2146]' : 'text-white/90 hover:bg-white/10'
  }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0A2146]/90 text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-md">
              <GraduationCap className="w-6 h-6 text-[#0A2146]" />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-bold">Successgate</p>
              <p className="text-xs text-white/80">International School</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} className={linkClass} end={n.to === '/'}>
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/admissions"
              className="ml-3 inline-flex items-center px-4 py-2 rounded-md bg-white text-[#0A2146] font-semibold hover:bg-white/90 transition-colors"
            >
              Enroll Today
            </Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-1">
              {navItems.map((n) => (
                <NavLink key={n.to} to={n.to} className={linkClass} onClick={() => setOpen(false)} end={n.to === '/'}>
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-[#0A2146] font-semibold"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
