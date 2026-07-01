"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setStatus("");

    try {
      const result = await emailjs.sendForm(
        "service_kg4t4ba",
        "template_lq4ncml",
        form,
        "Ul0b8EsXwqLts-YBc"
      );

      console.log(result);

      setStatus("✅ Message sent successfully!");

      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-extrabold text-white">
          Let's Connect
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-bold text-white">
            Get in Touch
          </h3>

          <p className="mt-5 text-slate-300">
            Feel free to contact me regarding internships,
            freelance work, collaborations or project discussions.
          </p>

          <div className="mt-8 space-y-4 text-slate-300">
            <p>📧 pusukuripranithrao24@gmail.com</p>
            <p>📱 7330935912</p>
            <p>📍 Warangal, Telangana</p>
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="mb-4 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="mb-4 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
          />

          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your Message"
            className="mb-4 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="mt-5 text-center text-cyan-400">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}