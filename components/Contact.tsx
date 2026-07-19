"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

const contactItems = [
  {
    label: "Email",
    value: "pusukuripranithrao24@gmail.com",
    href: "mailto:pusukuripranithrao24@gmail.com",
    icon: "📧",
  },
  {
    label: "Phone",
    value: "+91 7330935912",
    href: "tel:+917330935912",
    icon: "📱",
  },
  {
    label: "GitHub",
    value: "github.com/pranithrao24",
    href: "https://github.com/pranithrao24",
    icon: "💻",
  },
  {
    label: "LinkedIn",
    value: "Pranith Rao",
    href: "https://www.linkedin.com/in/pranith-rao-1a4460318",
    icon: "💼",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_kg4t4ba",
        "template_lq4ncml",
        form,
        "Ul0b8EsXwqLts-YBc"
      );

      setStatus("Message sent successfully.");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("Unable to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Let&apos;s build something meaningful
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Reach out for internships, freelance projects, collaborations, or
            software development opportunities.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm font-bold text-cyan-400">
                    {item.label}
                  </p>
                  <p className="mt-1 break-all font-semibold text-slate-300">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={sendEmail}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-9"
          >
            <h3 className="text-2xl font-black text-white">
              Send me a message
            </h3>

            <p className="mt-3 text-slate-400">
              Fill in the form and I will respond as soon as possible.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <textarea
                required
                rows={6}
                name="message"
                placeholder="Tell me about your opportunity or project"
                className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none focus:border-cyan-400 sm:col-span-2"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-2xl bg-cyan-400 px-6 py-4 font-black text-slate-950 transition hover:bg-cyan-300 disabled:opacity-60 sm:col-span-2"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </div>

            {status && (
              <p className="mt-5 rounded-xl bg-cyan-400/10 px-4 py-3 text-center text-sm font-bold text-cyan-300">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}