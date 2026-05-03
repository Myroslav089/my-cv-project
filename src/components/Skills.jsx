export default function Skills() {
  const skills = ["Networking", "ISO 27001", "MySQL", "Python", "Bash", "Linux"];
  return (
    <section className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
      <h2 className="text-base font-bold text-slate-800 border-b border-blue-500 mb-2">Навички</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map(s => <span key={s} className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[11px]">{s}</span>)}
      </div>
    </section>
  )
}