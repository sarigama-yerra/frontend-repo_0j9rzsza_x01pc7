import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A2146] text-white">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.5),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.4),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-wider text-white/70 text-sm">Successgate International School</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">Raising An Excellent Productive Generation.</h1>
          <p className="mt-5 text-white/80 text-lg">A modern bilingual school where students thrive in French and English, guided by experienced educators in a safe, supportive environment.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/admissions" className="px-6 py-3 rounded-md bg-white text-[#0A2146] font-semibold">Enroll Today</Link>
            <Link to="/programs" className="px-6 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 font-semibold">Explore Programs</Link>
            <a href="#highlights" className="px-6 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 font-semibold">Learn More</a>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1600&auto=format&fit=crop" alt="Happy students in classroom" className="rounded-2xl shadow-2xl border border-white/10" />
        </div>
      </div>
    </section>
  )
}
