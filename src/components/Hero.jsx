import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A2146] text-white">
      <AnimatedBackground />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.5),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.4),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="uppercase tracking-wider text-white/70 text-sm">Successgate International School</p>
          <motion.h1
            className="mt-3 text-4xl sm:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            Raising An Excellent Productive Generation.
          </motion.h1>
          <motion.p
            className="mt-5 text-white/80 text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A modern bilingual school where students thrive in French and English, guided by experienced educators in a safe, supportive environment.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            <Link to="/admissions" className="px-6 py-3 rounded-md bg-white text-[#0A2146] font-semibold shadow hover:shadow-md transition">Enroll Today</Link>
            <Link to="/programs" className="px-6 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 font-semibold">Explore Programs</Link>
            <a href="#highlights" className="px-6 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 font-semibold">Learn More</a>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="absolute -inset-6 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl blur-xl" />
          <img src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1600&auto=format&fit=crop" alt="Happy students in classroom" className="relative rounded-2xl shadow-2xl border border-white/10" />
        </motion.div>
      </div>

      {/* gently floating badges */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-6 hidden md:flex gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {["Bilingual", "STEM", "Arts", "Sports"].map((t, i) => (
          <motion.span
            key={t}
            className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs backdrop-blur border border-white/10"
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4 + i, ease: 'easeInOut' }}
          >
            {t}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
