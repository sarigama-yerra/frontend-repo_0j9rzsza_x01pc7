import PageHeader from '../components/PageHeader'

export default function About() {
  return (
    <main>
      <PageHeader
        title="About Us"
        subtitle="Discover our mission, vision, values, and bilingual commitment."
        image="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h2>
            <p className="text-slate-700">To nurture excellence and productivity in every learner through a balanced, future-ready education that integrates bilingual proficiency, character development, and academic rigor.</p>
            <h3 className="mt-8 text-xl font-semibold text-slate-900">Our Vision</h3>
            <p className="text-slate-700">To be a leading international school recognized for outstanding outcomes, innovation, and a caring community that empowers students to lead and serve.</p>
            <h3 className="mt-8 text-xl font-semibold text-slate-900">Core Values</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li>Excellence</li>
              <li>Integrity</li>
              <li>Respect</li>
              <li>Creativity</li>
              <li>Service</li>
            </ul>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop" alt="Campus" className="rounded-xl border border-slate-200" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Principal’s Welcome</h2>
            <p className="text-slate-700">Welcome to Successgate International School. We are honored to partner with families to cultivate confident, compassionate, and capable learners. Our bilingual approach opens doors to global opportunities, while our caring environment ensures every child is known and supported.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Bilingual Education</h2>
            <p className="text-slate-700">From early years to secondary, students learn in both French and English, building fluency and cross-cultural competence. Instruction includes immersion, conversation practice, and project-based learning that integrates languages into real-world contexts.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Story</h2>
          <p className="text-slate-700">Successgate International School was founded to provide a world-class, values-driven education for the next generation of leaders. Over the years, we’ve grown into a vibrant community with modern facilities, dedicated staff, and a record of academic success.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <img className="rounded-xl border" src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMaWJyYXJ5fGVufDB8MHx8fDE3NjM2MDU1MDN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Library" />
            <img className="rounded-xl border" src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc3Jvb218ZW58MHwwfHx8MTc2MzYwNTUwM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Classroom" />
            <img className="rounded-xl border" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" alt="Hallway" />
          </div>
        </div>
      </section>
    </main>
  )
}
