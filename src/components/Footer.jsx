export default function Footer() {
  return (
    <footer className="mt-16 bg-[#081A39] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">Successgate International School</h3>
          <p className="text-sm">Raising An Excellent Productive Generation.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/admissions" className="hover:text-white">Admissions</a></li>
            <li><a href="/programs" className="hover:text-white">Programs</a></li>
            <li><a href="/student-life" className="hover:text-white">Student Life</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">123 Excellence Avenue, Abidjan</p>
          <p className="text-sm">Email: info@successgate.edu</p>
          <p className="text-sm">Phone: +225 01 23 45 67</p>
          <p className="text-sm">Office Hours: Mon - Fri, 8:00 - 16:00</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Portals</h4>
          <div className="space-y-2">
            <a href="#" className="inline-block bg-white text-[#0A2146] font-semibold px-4 py-2 rounded-md">Parent Portal</a>
            <a href="#" className="inline-block bg-white text-[#0A2146] font-semibold px-4 py-2 rounded-md">Student Portal</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-center text-white/60">
          © {new Date().getFullYear()} Successgate International School. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
