"use client";

import ContactForm from "@/components/ContactForm";
import { Zap, Target, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white min-h-screen overflow-x-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_60%)] pointer-events-none"></div>

      {/* NAV */}
      <nav className="sticky top-0 bg-black/70 backdrop-blur border-b border-white/10 z-50">
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <h1 className="text-xl font-bold tracking-tight">
            Timmy<span className="text-green-400">2</span>stacks
          </h1>

          <a
            href="#contact"
            className="bg-green-500 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Get More Customers
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative text-center px-6 mt-28 max-w-4xl mx-auto">

        <div className="absolute inset-0 bg-green-500/10 blur-3xl -z-10"></div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Get a Website That Actually Brings You Customers
        </h1>

        <p className="text-green-400 mt-4 font-semibold">
          Built for local businesses • Fast turnaround • No hassle
        </p>

        <p className="text-gray-400 mt-6 text-lg">
          I design fast, modern websites that turn visitors into paying customers.
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="bg-green-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-green-400 hover:scale-105 transition shadow-lg"
          >
            Get More Customers
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          ⚡ Limited openings this week
        </p>
      </section>

      {/* TRUST STRIP */}
      <section className="mt-16 text-center">
        <p className="text-gray-500">
          ✔ Fast turnaround • ✔ No monthly fees • ✔ Built for results
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Helping businesses in Apple Valley & Hesperia grow online
        </p>
      </section>

      {/* PROFILE */}
      <section className="mt-24 text-center px-6">
        <h2 className="text-2xl font-semibold mb-6">Meet Your Developer</h2>

        <div className="relative inline-block">
          <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 rounded-full"></div>

          <img
            src="/me.jpg"
            alt="Timmy2stacks"
            className="w-56 h-56 rounded-full mx-auto object-cover border border-green-500 relative hover:scale-105 transition"
          />
        </div>

        <p className="text-gray-400 max-w-md mx-auto mt-6">
          I help small businesses get online fast and turn visitors into real customers.
        </p>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-24" />

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="text-green-400 mb-4" />,
              title: "Fast Performance",
              desc: "Pages load instantly and keep visitors engaged.",
            },
            {
              icon: <Target className="text-green-400 mb-4" />,
              title: "Built to Convert",
              desc: "Layouts designed to turn clicks into customers.",
            },
            {
              icon: <Shield className="text-green-400 mb-4" />,
              title: "Reliable Support",
              desc: "Ongoing help so your site keeps performing.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] hover:scale-105 transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mt-32 text-center px-6">
        <h2 className="text-3xl font-bold mb-12">Simple Process</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            "Tell me what you need",
            "I build it fast",
            "You start getting customers",
          ].map((step, i) => (
            <div key={i}>
              <p className="text-green-400 text-2xl font-bold">{i + 1}</p>
              <p className="text-gray-400 mt-2">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MONEY SECTION */}
      <section className="mt-32 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          Your Website Should Pay For Itself
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          One new customer can cover the cost of your website. Everything after that is profit.
        </p>

        <p className="text-green-400 mt-6 font-semibold">
          Built to generate calls, bookings, and sales
        </p>
      </section>

      {/* TESTIMONIAL */}
      <section className="mt-32 text-center px-6">
        <div className="max-w-xl mx-auto bg-white/5 border border-white/10 p-6 rounded-2xl">
          <p className="text-gray-400">
            “Timmy built my website fast and I started getting customers right away.”
          </p>
          <p className="mt-4 text-green-400 font-semibold">
            — Small Business Owner, Apple Valley
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="mt-32 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-400">Starting at</p>

        <p className="text-6xl font-bold text-green-400 mt-2">$150</p>

        <p className="text-gray-500 mt-4">
          One-time payment • No hidden fees
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-32 pb-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build Your Website
        </h2>

        <ContactForm />

        <p className="text-green-400 mt-6 font-semibold">
          Limited spots available this week
        </p>

        <p className="text-red-400 text-sm mt-2">
          Only 2 spots left
        </p>
      </section>

      {/* FLOATING CTA */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 bg-green-500 text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        Get Customers
      </a>

    </main>
  );
}
