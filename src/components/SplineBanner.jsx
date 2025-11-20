import { Suspense } from 'react'
import Spline from '@splinetool/react-spline'

export default function SplineBanner() {
  // Public demo scene from Spline community (light decorative 3D)
  const scene = 'https://prod.spline.design/2H7g7mD8mJk8b2nc/scene.splinecode'
  return (
    <section className="relative bg-gradient-to-b from-[#0A2146] to-[#0A2146] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur">
        <div className="aspect-[16/6] w-full">
          <Suspense fallback={<div className="h-full w-full grid place-items-center text-white/70">Loading 3D…</div>}>
            <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
