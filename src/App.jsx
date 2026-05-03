import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Contacts from './components/Contacts'
import Skills from './components/Skills'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 pb-12 font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <aside className="space-y-8">
          <Contacts />
          <Skills />
        </aside>
        <div className="md:col-span-2 space-y-8">
          <About />
          <Experience />
          <Education />
        </div>
      </main>
      <footer className="text-center mt-12 text-slate-400 text-sm">
        <p>© 2026 Долгош М. О. All rights reserved.</p>
      </footer>
    </div>
  )
}