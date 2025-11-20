import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Testimonials from '../components/Testimonials'
import MotionFadeIn from '../components/MotionFadeIn'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-center">
          <MotionFadeIn className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Welcome to Successgate</h2>
            <p className="text-slate-700">We are a dynamic international school committed to nurturing confident, creative, and globally minded learners. Through bilingual education in French and English, rigorous academics, and caring mentorship, we prepare students to thrive in a changing world.</p>
          </MotionFadeIn>
          <MotionFadeIn delay={0.1}>
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop" alt="Classroom" className="rounded-xl border border-slate-200 shadow" />
          </MotionFadeIn>
        </div>
      </section>
      <Highlights />
      <Testimonials />
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_50%_0,rgba(8,26,57,0.05),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[{t:'Admissions',d:'Learn about our process, requirements, and key dates.',h:'/admissions'},{t:'Programs',d:'Explore learning pathways from Pre-School to Secondary.',h:'/programs'},{t:'Contact',d:'Get in touch or book a campus visit.',h:'/contact'}].map((c,i)=> (
            <MotionFadeIn key={c.t} delay={i*0.1}>
              <a href={c.h} className="block p-6 rounded-xl border border-slate-200 bg-white/80 backdrop-blur hover:shadow-xl hover:-translate-y-1 transition-all">
                <h3 className="font-semibold text-slate-900">{c.t}</h3>
                <p className="text-sm text-slate-600 mt-2">{c.d}</p>
              </a>
            </MotionFadeIn>
          ))}
        </div>
      </section>
    </main>
  )
}
