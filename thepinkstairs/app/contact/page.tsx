"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="bg-white text-gray-800">
      {/* INTRO */}
      <section className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-gray-700">
              Have a question, want to collaborate, or looking for a way to get
              involved with{" "}
              <span className="text-pink-600 font-semibold">The Pink Stairs</span>?
              Send us a message and we&apos;ll get back to you as soon as we can.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-pink-100 bg-white px-6 py-8 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-pink-600 mb-4">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border border-pink-100 px-3 py-2 text-sm shadow-sm focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border border-pink-100 px-3 py-2 text-sm shadow-sm focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                  placeholder="you@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border border-pink-100 px-3 py-2 text-sm shadow-sm focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border border-pink-100 px-3 py-2 text-sm shadow-sm focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                  placeholder="Tell us a bit more..."
                />
              </div>

              {/* Status + Button */}
              <div className="pt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-pink-600 transition-colors disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-green-600">
                    Thank you! Your message has been sent.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
