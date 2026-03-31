"use client";
import { useState } from "react";
import { motion } from "framer-motion";


export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto">
     <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
> <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800 shadow-lg"
      >
        <h3 className="text-xl font-semibold text-white">
          Get in touch
        </h3>

        <input
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-black border border-gray-700 focus:border-green-500 outline-none"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-black border border-gray-700 focus:border-green-500 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="4"
          className="p-3 rounded-lg bg-black border border-gray-700 focus:border-green-500 outline-none"
        />

        <button
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 text-black py-3 rounded-xl font-semibold transition duration-300 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* SUCCESS MESSAGE */}
        {status === "success" && (
          <p className="text-green-400 text-sm text-center">
            ✅ Message sent! I’ll get back to you soon.
          </p>
        )}

        {/* ERROR MESSAGE */}
        {status === "error" && (
          <p className="text-red-400 text-sm text-center">
            ❌ Something went wrong. Try again.
          </p>
        )}
      </form></motion.div>
     
    </div>
  );
}