// app/contact/page.tsx
"use client";

import { useState } from "react";
import Header from "../components/header";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", description: "" });
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("✅ Your message has been sent! (Demo only, no backend connected)");
    setForm({ name: "", email: "", description: "" });
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <section className="max-w-xl mx-auto p-6 mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full border rounded-lg p-2"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full border rounded-lg p-2"
              placeholder="you@example.com"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              required
              rows={4}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="mt-1 w-full border rounded-lg p-2"
              placeholder="Your message..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>

          {message && <p className="mt-2 text-green-700 text-sm">{message}</p>}
        </form>
      </section>
    </main>
  );
}
