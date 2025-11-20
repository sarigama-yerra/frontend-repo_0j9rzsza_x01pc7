import PageHeader from '../components/PageHeader'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="We’d love to hear from you. Reach out with any questions or to book a visit."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className="p-6 rounded-xl border bg-white">
            <h3 className="text-xl font-semibold text-slate-900">Send a Message</h3>
            {!submitted ? (
              <form className="mt-4 grid gap-4" onSubmit={onSubmit}>
                <input required className="border rounded-md px-3 py-2" placeholder="Full Name" />
                <input required type="email" className="border rounded-md px-3 py-2" placeholder="Email" />
                <input className="border rounded-md px-3 py-2" placeholder="Phone" />
                <textarea required className="border rounded-md px-3 py-2" rows={5} placeholder="Your message" />
                <button className="px-6 py-3 rounded-md bg-[#0A2146] text-white font-semibold">Send</button>
              </form>
            ) : (
              <p className="mt-4 text-green-700">Thank you! We will get back to you shortly.</p>
            )}
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-xl border bg-white">
              <h4 className="font-semibold text-slate-900">Contact Details</h4>
              <p className="text-slate-700 mt-2">Address: 123 Excellence Avenue, Abidjan</p>
              <p className="text-slate-700">Email: info@successgate.edu</p>
              <p className="text-slate-700">Phone: +225 01 23 45 67</p>
              <p className="text-slate-700">Office Hours: Mon - Fri, 8:00 - 16:00</p>
            </div>
            <div className="p-6 rounded-xl border bg-white">
              <h4 className="font-semibold text-slate-900 mb-2">Find Us</h4>
              <div className="aspect-video w-full overflow-hidden rounded-md">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.38175766432!2d-4.0305!3d5.3453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfb83d8b5b2ad5f3%3A0x3d0e3a7f5b5f0f4d!2sAbidjan!5e0!3m2!1sen!2sci!4v1610000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
