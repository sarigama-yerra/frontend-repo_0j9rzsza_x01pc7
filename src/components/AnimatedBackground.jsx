import { memo } from 'react'

// Decorative animated gradient blobs for subtle depth
function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#3b82f6]/20 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-[#22d3ee]/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-[#8b5cf6]/20 blur-3xl animate-blob animation-delay-4000" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
    </div>
  )
}

export default memo(AnimatedBackground)
