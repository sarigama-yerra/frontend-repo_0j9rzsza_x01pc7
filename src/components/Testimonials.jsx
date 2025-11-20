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
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">What Parents and Students Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <blockquote key={i} className="p-6 rounded-xl bg-white border border-slate-200">
              <p className="text-slate-700">“{q.text}”</p>
              <footer className="mt-4 text-sm font-semibold text-slate-900">{q.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
