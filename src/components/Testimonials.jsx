import MotionFadeIn from './MotionFadeIn'

export default function Testimonials() {
  const quotes = [
    {
      name: 'Aïcha, Parent',
      text:
        'Our daughter has blossomed here. The bilingual program and caring teachers make a real difference.',
    },
    {
      name: 'David, Student',
      text:
        'I love the clubs and projects. We learn by doing and it is fun every day!',
    },
    {
      name: 'Marie, Parent',
      text:
        'Safe campus, excellent academics, and a supportive community. We highly recommend the school.',
    },
  ]

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_80%_0,rgba(8,26,57,0.06),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">What Parents and Students Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <MotionFadeIn key={i} delay={i * 0.1}>
              <blockquote className="p-6 rounded-xl bg-white/80 backdrop-blur border border-slate-200/70 hover:shadow-xl transition-all hover:-translate-y-1">
                <p className="text-slate-700">“{q.text}”</p>
                <footer className="mt-4 text-sm font-semibold text-slate-900">{q.name}</footer>
              </blockquote>
            </MotionFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
