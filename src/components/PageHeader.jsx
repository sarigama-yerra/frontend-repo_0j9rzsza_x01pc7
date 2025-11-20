export default function PageHeader({ title, subtitle, image }) {
  return (
    <section className="relative overflow-hidden bg-[#0A2146] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-end gap-10">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
          {subtitle && <p className="mt-3 text-white/80 max-w-2xl">{subtitle}</p>}
        </div>
        {image && (
          <img src={image} alt="" className="hidden md:block w-72 h-44 object-cover rounded-xl border border-white/10 shadow-2xl" />
        )}
      </div>
    </section>
  )
}
