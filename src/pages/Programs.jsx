import PageHeader from '../components/PageHeader'
import { Baby, School, BookOpen, Users, Code2, Music2, Palette, Medal, Briefcase } from 'lucide-react'

const ProgramCard = ({ title, age, desc, highlights }) => (
  <div className="p-6 rounded-xl border border-slate-200 bg-white">
    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
    <p className="text-sm text-slate-600 mt-1">{age}</p>
    <p className="text-slate-700 mt-3">{desc}</p>
    <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-1">
      {highlights.map((h) => (
        <li key={h}>{h}</li>
      ))}
    </ul>
  </div>
)

export default function Programs() {
  return (
    <main>
      <PageHeader
        title="Programs"
        subtitle="From early years to secondary, with strong bilingual pathways and skills for the future."
        image="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid md:grid-cols-3 gap-6">
            <ProgramCard
              title="Pre-School"
              age="Ages 2-4"
              desc="Play-based learning that builds curiosity, language, and social-emotional skills."
              highlights={["Foundational French & English", "Creative play", "Fine & gross motor skills"]}
            />
            <ProgramCard
              title="Nursery School"
              age="Ages 4-5"
              desc="Structured early learning with early literacy, numeracy, and exploration."
              highlights={["Phonics & early reading", "Hands-on math", "Bilingual songs & stories"]}
            />
            <ProgramCard
              title="Primary School"
              age="Grades 1-6"
              desc="Core academics with project-based learning and French-English integration."
              highlights={["STEM projects", "Reading & writing workshops", "Civic education"]}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ProgramCard
              title="Junior School"
              age="Grades 7-9"
              desc="Broader curriculum with study skills, languages, and leadership opportunities."
              highlights={["Lab sciences", "Advanced French & English", "Student leadership"]}
            />
            <ProgramCard
              title="Secondary School"
              age="Grades 10-12"
              desc="Exam readiness, critical thinking, and pathways to university and careers."
              highlights={["Exam preparation", "Research & presentations", "Career guidance"]}
            />
            <ProgramCard
              title="Skill Development"
              age="All Levels"
              desc="Clubs and programs that build creativity and 21st-century skills."
              highlights={["ICT & Coding", "Music & Arts", "Entrepreneurship & Leadership"]}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[Code2, Music2, Palette, Medal, Briefcase, Users].map((Icon, i) => (
              <div key={i} className="flex items-center justify-center p-6 rounded-xl bg-white border">
                <Icon className="w-8 h-8 text-[#0A2146]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
