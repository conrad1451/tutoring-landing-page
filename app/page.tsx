// app/page.tsx
// CHQ: Gemini AI refactored

import Link from "next/link";
import { testimonials } from "./data/testimonials";
import { subjects } from "./data/subjects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100 px-6 py-4 flex justify-between items-center max-w-6xl w-full mx-auto">
        <span className="text-xl font-bold tracking-tight text-indigo-600">CS & Math Tutoring</span>
        <nav className="space-x-6 text-sm font-medium text-gray-600 hidden md:block">
          <a href="#subjects" className="hover:text-indigo-600 transition-colors">Subjects</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Results</a>
        </nav>
        <a
          href="#book"
          className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Book a Call
        </a>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 space-y-20">
        {/* Intro Section */}
        <section className="text-center py-12 max-w-3xl mx-auto space-y-6">
          <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            1-on-1 Online Math Tutoring
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Master Math with Confidence & Clarity
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Struggling with Algebra or AP Calculus? Get personalized, step-by-step guidance tailored to your learning style so you can raise your grades and conquer test anxiety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#book"
              className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-xl shadow-sm hover:bg-indigo-700 transition-all text-center"
            >
              Schedule a Consultation
            </a>
            <a
              href="#subjects"
              className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-all text-center"
            >
              Explore Subjects
            </a>
          </div>
        </section>

        {/* Subjects Section */}
        <section id="subjects" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Subjects</h2>
            {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Core Expertise</h2> */}
            {/* <p className="text-gray-600">Targeted instruction for high school and college math courses.</p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subjects.map((item) => (
              <div 
                key={item.id} 
                className="p-6 border border-gray-100 rounded-2xl bg-gray-50/50 space-y-3"
              >
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="about" className="space-y-6 border-t border-gray-100 pt-16">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">Why Students Succeed</h2>
            <p className="text-gray-600 leading-relaxed">
              Math doesn't have to be overwhelming. My tutoring approach focuses on breaking down complex proofs and formulas into simple, intuitive concepts.
            </p>
          </div>
          <ul className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            <li className="flex items-start gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <span className="text-indigo-600 font-bold">✓</span> 
              <span>Personalized learning plans designed around school syllabi</span>
            </li>
            <li className="flex items-start gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <span className="text-indigo-600 font-bold">✓</span> 
              <span>Interactive digital whiteboard for clear step-by-step problem solving</span>
            </li>
            <li className="flex items-start gap-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <span className="text-indigo-600 font-bold">✓</span> 
              <span>Flexible online scheduling fitting busy student routines</span>
            </li>
          </ul>
        </section>

        {/* Testimonials List Section */}
        <section id="testimonials" className="space-y-8 border-t border-gray-100 pt-16">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Record</h2>
            <p className="text-gray-600">See what past students have achieved through targeted 1-on-1 tutoring.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="bg-indigo-50/60 p-6 rounded-2xl border border-indigo-100 flex flex-col justify-between space-y-4"
              >
                <blockquote className="text-gray-800 text-sm leading-relaxed">
                  {/* "{item.quote}" */}
                  {item.quote}
                </blockquote>
                <div>
                  <p className="text-sm font-semibold text-indigo-950">{item.author}</p>
                  <p className="text-xs text-indigo-700">
                    {item.role} {item.subject && `• ${item.subject}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking CTA Section */}
        <section id="book" className="bg-indigo-600 text-white p-10 md:p-14 rounded-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Elevate Your Math Skills?</h2>
          <p className="text-indigo-100 max-w-xl mx-auto">
            Book a complimentary 20-minute consultation to discuss your goals and create a plan for academic success.
          </p>
          <div>
            <a
              href="mailto:contact@example.com"
              className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-xl shadow hover:bg-indigo-50 transition-colors"
            >
              Get in Touch Today
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Conrad Hansen-Quartey Tutoring. All rights reserved.
      </footer>
    </div>
  );
}