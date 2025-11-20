import { motion } from 'framer-motion'

export default function MotionFadeIn({ as: Tag = 'div', delay = 0, y = 16, children, className = '' }) {
  return (
    <motion.div
      as={Tag}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
