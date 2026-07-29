import { useState, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";
import { Send, ArrowUpRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setIsSubmitting(false);
    setSubmitted(true);
    setFullName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* ───────── Hero ───────── */}
      <section className="relative h-[280px] overflow-hidden sm:h-[340px] lg:h-[400px]">
        {/* Background — swap src for your own asset if preferred */}
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/85 via-teal-900/70 to-teal-950/50" />

        {/* Vertical label */}
        <span
          className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40 sm:right-8 lg:block"
          style={{ writingMode: "vertical-rl" }}
        >
          Contacts
        </span>

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Contacts
          </motion.h1>

          {/* Breadcrumb pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
          >
            <span className="text-slate-400">Home</span>
            <span className="text-slate-300">›</span>
            <span className="text-teal-800">Contacts</span>
          </motion.div>
        </div>
      </section>

      {/* ───────── Main content ───────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16"
        >
          {/* Left — copy + details */}
          <div>
            <motion.p
              variants={itemVariants}
              className="mb-3 text-xs font-medium tracking-wide text-slate-400"
            >
              / get in touch /
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="max-w-md text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl"
            >
              We are always ready to help you and answer your questions
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base"
            >
              Be part of the Avvic experience. Reach out for support, account
              enquiries, or partnership opportunities — our team is here for
              you.
            </motion.p>

            {/* Info grid */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"
            >
              <div>
                <p className="text-sm font-bold text-slate-900">Call Center</p>
                <a
                  href="tel:+2348149316300"
                  className="mt-2 block text-sm text-slate-500 transition-colors hover:text-teal-700"
                >
                  +234 814 931 6300
                </a>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">Our Location</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  House B1, Rose Gardens Courts,
                  <br />
                  Rangers Avenue, Enugu. Nigeria
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">Email</p>
                <a
                  href="mailto:info@avvicmfb.com"
                  className="mt-2 block text-sm text-slate-500 transition-colors hover:text-teal-700"
                >
                  info@avvicmfb.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — form card */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-slate-100/80 p-6 sm:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <Send className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Message sent
                </h3>
                <p className="mt-2 max-w-xs text-sm text-slate-500">
                  Thanks for reaching out. We’ll get back to you within one
                  business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-teal-700 hover:text-teal-900"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-900">
                  Get In Touch
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Tell us how we can help — account support, products, or
                  general enquiries.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="fullName" className="sr-only">
                      Full name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full name"
                      className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="sr-only">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Subject"
                      className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      className="w-full resize-none border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 inline-flex items-center gap-2 rounded-full bg-teal-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-900 disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* ───────── Map ───────── */}
      <section className="w-full">
        <div className="relative h-[320px] w-full overflow-hidden bg-slate-100 sm:h-[380px] lg:h-[420px]">
          <iframe
            title="Avvic Microfinance Bank — Enugu"
            src="https://maps.google.com/maps?q=Rose+Gardens+Courts+Rangers+Avenue+Enugu+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-full w-full border-0 grayscale contrast-[0.95]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
