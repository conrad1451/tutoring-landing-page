// app/page.tsx
// CHQ: Gemini AI refactored

import Link from "next/link";
import { testimonials } from "./data/testimonials";
import { subjects } from "./data/subjects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200 px-6 py-4 flex justify-between items-center max-w-6xl w-full mx-auto">
        <span className="text-xl font-bold tracking-tight text-blue-700">
          CS & Math Tutoring
        </span>
        <nav className="space-x-6 text-sm font-semibold text-slate-700 hidden md:block">
          <a href="#subjects" className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-sm transition-colors">
            Subjects
          </a>
          <a href="#about" className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-sm transition-colors">
            About
          </a>
          <a href="#testimonials" className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-sm transition-colors">
            Results
          </a>
        </nav>
        <a
          href="#book"
          className="bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-colors"
        >
          Book a Call
        </a>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 space-y-20">
        {/* Intro Section */}
        <section className="text-center py-12 max-w-3xl mx-auto space-y-6">
          <span className="inline-block bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            1-on-1 Online Math & CS Tutoring
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Master Math and Computer Science with Confidence & Clarity
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Struggling with Algebra, AP Calculus, or Computer Science? Get clarity and guidance compatible with your learning style so you can dispel confusion and deeply understand what you're studying.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#book"
              className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:bg-blue-800 transition-all text-center">
                Schedule a Consultation
            </a>
            <a
              href="#subjects"
              className="border border-slate-300 text-slate-800 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all text-center"
            >
              Explore Subjects
            </a>
          </div>
        </section>

        {/* Subjects Section */}
        <section id="subjects" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Core Expertise</h2>
            <p className="text-slate-600">Targeted instruction for high school and college courses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subjects.map((item) => (
              <div 
                key={item.id} 
                className="p-6 border border-slate-200 rounded-2xl bg-slate-50 space-y-3"
              >
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="about" className="space-y-6 border-t border-slate-200 pt-16">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Why Students Succeed</h2>
            <p className="text-slate-700 leading-relaxed">
              Technical subjects don't have to be overwhelming. My tutoring approach focuses on breaking down complex proofs, code, and formulas into simple, intuitive concepts.
            </p>
          </div>
          <ul className="grid md:grid-cols-3 gap-4 text-sm text-slate-800">
            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-blue-700 font-bold text-lg" aria-hidden="true">✓</span> 
              <span>Personalized learning plans designed around school syllabi</span>
            </li>
            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-blue-700 font-bold text-lg" aria-hidden="true">✓</span> 
              <span>Interactive digital whiteboard for clear step-by-step problem solving</span>
            </li>
            <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-blue-700 font-bold text-lg" aria-hidden="true">✓</span> 
              <span>Flexible online scheduling fitting busy student routines</span>
            </li>
          </ul>
        </section>

        {/* Testimonials List Section */}
        <section id="testimonials" className="space-y-8 border-t border-slate-200 pt-16">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Record</h2>
            <p className="text-slate-600">See what past students have achieved through targeted 1-on-1 tutoring.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4"
              >
                <blockquote className="text-slate-800 text-sm leading-relaxed">
                  {item.quote}
                </blockquote>
                <div>
                  {item.author && <p className="text-sm font-semibold text-slate-900">{item.author}</p>}
                  <p className="text-xs font-medium text-blue-800">
                    {item.role} {item.subject && `• ${item.subject}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking CTA Section */}
        <section id="book" className="bg-slate-900 text-white p-10 md:p-14 rounded-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Elevate Your Math & CS Skills?</h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Book a complimentary 20-minute consultation to discuss your goals and create a plan for academic success.
          </p>
          <div>
            <a
              href="https://forms.gle/PMwhc6FBrQ1GJJ9MA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
            >
              Get in Touch Today
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Conrad Hansen-Quartey Tutoring. All rights reserved.
      </footer>
    </div>
  );
}