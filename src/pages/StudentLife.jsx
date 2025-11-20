import PageHeader from '../components/PageHeader'

export default function StudentLife() {
  return (
    <main>
      <PageHeader
        title="Student Life"
        subtitle="Vibrant clubs, sports, arts, and community projects in a bilingual environment."
        image="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Clubs & Societies', text: 'Debate, coding, languages, entrepreneurship, and more.' },
              { title: 'Sports', text: 'Football, athletics, basketball, and inter-school competitions.' },
              { title: 'Arts & Music', text: 'Choir, band, drama, visual arts, and cultural showcases.' },
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-xl border bg-white">
                <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="text-slate-700 mt-2">{c.text}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Events Gallery</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map((i) => (
                <img key={i} className="rounded-xl border" src={`https://picsum.photos/seed/school-${i}/600/400`} alt="Event" />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img className="rounded-xl border" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop" alt="Daily life" />
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Bilingual Daily Life</h3>
              <p className="text-slate-700 mt-2">Students practice French and English through lessons, assemblies, and everyday interactions, building fluency and confidence.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
