import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Welcome to Successgate</h2>
            <p className="text-slate-700">We are a dynamic international school committed to nurturing confident, creative, and globally minded learners. Through bilingual education in French and English, rigorous academics, and caring mentorship, we prepare students to thrive in a changing world.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop" alt="Classroom" className="rounded-xl border border-slate-200" />
        </div>
      </section>
      <Highlights />
      <Testimonials />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <a href="/admissions" className="p-6 rounded-xl border border-slate-200 hover:shadow-lg transition">
            <h3 className="font-semibold text-slate-900">Admissions</h3>
            <p className="text-sm text-slate-600 mt-2">Learn about our process, requirements, and key dates.</p>
          </a>
          <a href="/programs" className="p-6 rounded-xl border border-slate-200 hover:shadow-lg transition">
            <h3 className="font-semibold text-slate-900">Programs</h3>
            <p className="text-sm text-slate-600 mt-2">Explore learning pathways from Pre-School to Secondary.</p>
          </a>
          <a href="/contact" className="p-6 rounded-xl border border-slate-200 hover:shadow-lg transition">
            <h3 className="font-semibold text-slate-900">Contact</h3>
            <p className="text-sm text-slate-600 mt-2">Get in touch or book a campus visit.</p>
          </a>
        </div>
      </section>
    </main>
  )
}
