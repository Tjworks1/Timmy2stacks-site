import { Zap, Target, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <main className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white min-h-screen">

      {/* NAV */}
      <nav className="sticky top-0 bg-black/80 backdrop-blur z-50 flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Timmy2stacks</h1>
        <a href="#contact" className="bg-white text-black px-4 py-2 rounded-lg">
          Get Started
        </a>
      </nav>

      {/* HERO */}
      <section className="relative text-center px-6 mt-20 max-w-4xl mx-auto transition duration-700 ease-in-out">
<div className="absolute inset-0 bg-green-500/10 blur-3xl -z-10"></div>
<h1 className="text-5xl md:text-6xl font-bold leading-tight">
          High-converting Websites for Small Businesses
        </h1>
        <p className="text-green-400 mt-4 font-semibold">
  Built for local businesses • Fast turnaround • No hassle
</p>
        <p className="text-gray-400 mt-6 text-lg">
          I design fast, modern websites that turn visitors into paying customers—no fluff, just results.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-xl font-semibold"
          >
            Start Your Project
          </a>

        </div>

        <p className="text-sm text-gray-500 mt-6">
          ⚡ Limited openings — quick turnarounds available
        </p>

      </section>
      <div className="mt-20 text-center">
  <div className="relative inline-block">
    <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 rounded-full"></div>
    
    <h2 className="text-2xl font-semibold mt-10">
  Meet Your Developer
</h2>
    
    <img
      src="/me.JPG"
      alt="Timmy2stacks"
      className="w-60 h-60 rounded-full mx-auto object-cover border-2 border-green-500 relative"
    />
  </div>

  <p className="text-gray-400 max-w-md mx-auto mt-6">
    Hi — I'm Timmy. I build simple, reliable websites that help local businesses attract more customers and grow revenue.
  </p> 
  
</div>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-20" />
      {/* SOCIAL PROOF */}
      <section className="mt-24 text-center transition duration-700 ease-in-out">
        <p className="text-gray-500">Trusted by local businesses and service providers</p>
        <p className="text-xl mt-2">Bars • Gyms • Contractors • Salons</p>
      </section>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-20" />
      {/* SERVICES */}
      <section className="mt-24 max-w-6xl mx-auto px-6 transition duration-700 ease-in-out">
        <h2 className="text-3xl font-bold text-center mb-12">
          What You Get
        </h2>

        <div className="grid md:grid-cols-3 gap-8 ">
        {[
  {
    icon: <Zap className="text-green-400 mb-4" />,
    title: "Fast Performance",
    desc: "Pages that load instantly and keep visitors engaged",
  },
  {
    icon: <Target className="text-green-400 mb-4" />,
    title: "Conversion-focused Design",
    desc: "Layouts that turn visitors into leads",
  },
  {
    icon: <Shield className="text-green-400 mb-4" />,
    title: "Reliable Support",
    desc: "Ongoing updates and help",
  },
].map((item, i) => (
  <div key={i} className="border border-gray-800 p-6 rounded-2xl hover:border-green-500 hover:scale-105 transition duration-300">
    {item.icon}
    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
    <p className="text-gray-400">{item.desc}</p>
  </div>
))}
        </div>
      </section>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-20" />
      {/* HOW IT WORKS */}
      <section className="mt-24 max-w-5xl mx-auto px-6 text-center transition duration-700 ease-in-out">
        <h2 className="text-3xl font-bold mb-12">Simple Process</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-green-400 text-2xl font-bold">1</p>
            <p className="mt-2 text-gray-400">You tell me what you need</p>
          </div>
          <div>
            <p className="text-green-400 text-2xl font-bold">2</p>
            <p className="mt-2 text-gray-400">I build your website fast</p>
          </div>
          <div>
            <p className="text-green-400 text-2xl font-bold">3</p>
            <p className="mt-2 text-gray-400">You get more customers</p>
          </div>
        </div>
      </section>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-20" />
      <section className="mt-24 text-center transition duration-700 ease-in-out">
  <h2 className="text-3xl font-bold mb-6">Results</h2>
  <p className="text-gray-400 max-w-xl mx-auto">
    I help small businesses get online fast and start attracting customers immediately. My focus is simple: clean design, fast load times, and real results.
  </p>
</section>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-20" />
{/* Testimonial */}
<section className="mt-24 text-center px-6 transition duration-700 ease-in-out">
  <h2 className="text-3xl font-bold mb-8">What Clients Say</h2>

  <div className="max-w-xl mx-auto border border-gray-800 p-6 rounded-2xl">
    <p className="text-gray-400">
      “TJ built my website fast and I started getting customers right away. Super easy to work with.”
    </p>
    <p className="mt-4 text-green-400 font-semibold">
      — Small Business Owner, Apple Valley
    </p>
  </div>
</section>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-20" />
      {/* PRICING */}
      <section className="mt-24 text-center transition duration-700 ease-in-out">
        <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-400 mb-2">Starting at</p>
        <p className="text-6xl font-bold text-green-400">$150</p>

        <p className="text-gray-500 mt-4">
          One-time payment • No hidden fees
        </p>
      </section>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-20" />
      {/* BONUS / UPSELL */}
      <section className="mt-20 max-w-4xl mx-auto px-6 text-center transition duration-700 ease-in-out">
        <h3 className="text-2xl font-semibold mb-6">Extras</h3>

        <div className="grid md:grid-cols-3 gap-6 text-gray-400">
          <p>Logo Design (+$50)</p>
          <p>Google Setup (+$50)</p>
          <p>Monthly Support ($25/mo)</p>
        </div>
      </section>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-20" />
      {/* FINAL CTA */}
      <section id="contact" className="mt-28 text-center pb-20 px-6 transition duration-700 ease-in-out">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Get Your Website?
        </h2>
        <p className="text-gray-400 mb-8">
          Let’s build something that makes you money.
        </p>

        <a
          href="mailto: customer-support@2da97126-19a0-4a42-890d-7671cd2367a3.mail.conversations.godaddy.com"
          className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition duration-300"
        >
          Get More Customers Online?
        </a>
      </section>
          <p className="text-green-400 mb-6 font-semibold text-center">
  Limited spots available this week
</p>

    </main>
    </div>
  );
}
