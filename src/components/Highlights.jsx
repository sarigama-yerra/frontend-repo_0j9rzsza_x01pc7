import { BookOpen, Languages, ShieldCheck, Users } from 'lucide-react'
import MotionFadeIn from './MotionFadeIn'

export default function Highlights() {
  const items = [
    { icon: BookOpen, title: 'Academic Excellence', desc: 'High standards, inquiry-based learning, and measurable outcomes.' },
    { icon: Languages, title: 'Bilingual Programs', desc: 'French & English across all levels with practical immersion.' },
    { icon: Users, title: 'Experienced Teachers', desc: 'Caring, qualified staff committed to student success.' },
    { icon: ShieldCheck, title: 'Safe & Supportive', desc: 'Secure campus and a nurturing environment for growth.' },
  ]
  return (
    <section id="highlights" className="py-20 bg-white relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_20%_0,rgba(8,26,57,0.06),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <MotionFadeIn key={title} delay={idx * 0.08}>
              <div className="group p-6 rounded-xl border border-slate-200 bg-white/70 backdrop-blur hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-[#0A2146] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#0A2146]/20">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="text-slate-600 text-sm mt-2">{desc}</p>
              </div>
            </MotionFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
