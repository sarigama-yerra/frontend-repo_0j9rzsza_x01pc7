import PageHeader from '../components/PageHeader'

const Step = ({ number, title, text }) => (
  <div className="p-6 rounded-xl border bg-white">
    <div className="w-10 h-10 rounded-full bg-[#0A2146] text-white flex items-center justify-center font-bold">{number}</div>
    <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
    <p className="text-slate-700 mt-1">{text}</p>
  </div>
)

export default function Admissions() {
  return (
    <main>
      <PageHeader
        title="Admissions"
        subtitle="Join our thriving community. Follow these steps to apply."
        image="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid md:grid-cols-4 gap-6">
            <Step number={1} title="Inquiry" text="Submit an inquiry and book a campus visit." />
            <Step number={2} title="Application" text="Complete the application form and upload documents." />
            <Step number={3} title="Assessment" text="Attend placement assessment and interview." />
            <Step number={4} title="Enrollment" text="Receive offer, finalize enrollment, and join us!" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 rounded-xl border bg-white">
              <h3 className="text-xl font-semibold text-slate-900">Requirements</h3>
              <ul className="list-disc pl-5 text-slate-700 mt-3 space-y-2">
                <li>Birth certificate or passport</li>
                <li>Previous school reports</li>
                <li>Immunization record</li>
                <li>Two passport photographs</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border bg-white">
              <h3 className="text-xl font-semibold text-slate-900">Important Dates</h3>
              <ul className="list-disc pl-5 text-slate-700 mt-3 space-y-2">
                <li>Applications open: 1st June</li>
                <li>Assessments: July - August</li>
                <li>Term starts: 15th September</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border bg-white">
              <h3 className="text-xl font-semibold text-slate-900">Tuition & Fees</h3>
              <p className="text-slate-700 mt-2">Please contact our admissions office for the latest fee structure. Placeholder amounts can be provided upon request.</p>
            </div>
            <div className="p-6 rounded-xl border bg-white">
              <h3 className="text-xl font-semibold text-slate-900">Download Center</h3>
              <ul className="mt-2 space-y-2 text-[#0A2146] font-semibold">
                <li><a href="#">Application Form (PDF)</a></li>
                <li><a href="#">Medical Form (PDF)</a></li>
                <li><a href="#">School Calendar (PDF)</a></li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border bg-white">
              <h3 className="text-xl font-semibold text-slate-900">Ready to Apply?</h3>
              <a href="#" className="inline-block mt-3 px-6 py-3 rounded-md bg-[#0A2146] text-white font-semibold">Apply Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
