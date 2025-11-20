import PageHeader from '../components/PageHeader'

export default function News() {
  const posts = [
    { title: 'Open House Weekend', date: 'June 10', excerpt: 'Join us for campus tours and meet our teachers.' },
    { title: 'New ICT Lab', date: 'May 22', excerpt: 'We opened a modern computer lab to support coding and digital literacy.' },
    { title: 'Sports Day Highlights', date: 'April 15', excerpt: 'A fun day of teamwork, sportsmanship, and excellent performances.' },
  ]

  return (
    <main>
      <PageHeader title="News & Updates" subtitle="Announcements, events, and stories from our community." />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="p-6 rounded-xl border bg-white">
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{p.date}</p>
              <p className="text-slate-700 mt-2">{p.excerpt}</p>
              <a href="#" className="mt-3 inline-block text-[#0A2146] font-semibold">Read More</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
