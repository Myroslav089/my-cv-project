export default function Experience() {
  return (
    <section className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Experience</h2>
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <h3 className="text-blue-700 font-bold text-lg">Навчальні проєкти — Кібербезпека</h3>
        <p className="text-slate-400 text-xs italic mb-4">2024 – 2026</p>
        <ul className="text-slate-600 space-y-3 text-sm list-disc list-inside">
          <li>Реалізація алгоритмів шифрування S-DES на Python.</li>
          <li>Налаштування захищених мереж у Linux.</li>
          <li>Аналіз мережевого трафіку та пошук вразливостей.</li>
        </ul>
      </div>
    </section>
  )
}