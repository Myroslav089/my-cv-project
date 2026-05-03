export default function About() {
  return (
    <section className="bg-white p-8 rounded-3xl shadow-xl border border-slate-50">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Profile</h2>
      <p className="text-slate-600 leading-relaxed text-center max-w-2xl mx-auto">
        Я студент 3 курсу Львівської політехніки, мені 20 років. Навчаюся у групі КБ-304. 
        Цікавлюся захистом інформаційних систем, аналізом вразливостей та системами управління інформаційною безпекою.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {['Linux', 'Docker', 'CI/CD', 'Networking'].map(tag => (
          <span key={tag} className="bg-slate-100 text-slate-600 px-6 py-2 rounded-xl text-sm font-medium">{tag}</span>
        ))}
      </div>
    </section>
  );
}