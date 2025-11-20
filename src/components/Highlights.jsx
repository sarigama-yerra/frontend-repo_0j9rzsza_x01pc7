import { BookOpen, Languages, ShieldCheck, Users } from 'lucide-react'

export default function Highlights() {
  const items = [
    { icon: BookOpen, title: 'Academic Excellence', desc: 'High standards, inquiry-based learning, and measurable outcomes.' },
    { icon: Languages, title: 'Bilingual Programs', desc: 'French & English across all levels with practical immersion.' },
    { icon: Users, title: 'Experienced Teachers', desc: 'Caring, qualified staff committed to student success.' },
    { icon: ShieldCheck, title: 'Safe & Supportive', desc: 'Secure campus and a nurturing environment for growth.' },
  ]
  return (
    <section id="highlights" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#0A2146] text-white flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="text-slate-600 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
