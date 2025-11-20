import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

export default function PageHeader({ title, subtitle, image }) {
  return (
    <section className="relative overflow-hidden bg-[#0A2146] text-white">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-end gap-10">
        <div className="flex-1">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="mt-3 text-white/80 max-w-2xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        {image && (
          <motion.img
            src={image}
            alt=""
            className="hidden md:block w-72 h-44 object-cover rounded-xl border border-white/10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          />
        )}
      </div>
    </section>
  )
}
