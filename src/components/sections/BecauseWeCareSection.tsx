
import { motion, type Variants } from "framer-motion";
import {
  PiggyBank,
  ShieldCheck,
  Zap,
  Smartphone,
  ArrowUpRight,
  Globe,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const pillars = [
  {
    title: "Invest",
    description:
      "High-yield options built for everyday Nigerians. Start small and grow steadily over time.",
    theme: "dark" as const,
    visual: "invest",
  },
  {
    title: "Save",
    description:
      "Set clear goals, automate deposits, and let your money work without the stress.",
    theme: "light" as const,
    visual: "save",
  },
  {
    title: "Transact",
    description:
      "Send, receive, and pay instantly — secure, seamless, and always available.",
    theme: "dark" as const,
    visual: "transact",
  },
];

const trustItems = [
  { icon: ShieldCheck, label: "Bank-grade security" },
  { icon: Zap, label: "Instant transfers" },
  { icon: Smartphone, label: "Always with you" },
];

export const BecauseWeCareSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              variants={itemVariants}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Because we care
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Introducing the{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                Avvic Mobile App
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg"
            >
              Your all-in-one financial companion. Invest, save, and move money
              seamlessly — right from your phone.
            </motion.p>

            {/* Trust row */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500"
            >
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-emerald-600" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Feature cards */}
          <motion.div
            variants={itemVariants}
            className="mt-14 grid w-full gap-5 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-shadow duration-300 sm:p-7 ${
                  pillar.theme === "dark"
                    ? "bg-[#0B3D2E] text-white shadow-lg shadow-emerald-900/10"
                    : "bg-emerald-50/80 text-slate-900 shadow-sm"
                }`}
              >
                {/* Text */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold leading-snug tracking-tight sm:text-[1.35rem]">
                    {pillar.title}
                  </h3>
                  <p
                    className={`mt-2.5 text-sm leading-relaxed ${
                      pillar.theme === "dark"
                        ? "text-emerald-100/80"
                        : "text-slate-500"
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* Visuals */}
                <div className="mt-auto">
                  {pillar.visual === "invest" && <InvestVisual />}
                  {pillar.visual === "save" && <SaveVisual />}
                  {pillar.visual === "transact" && <TransactVisual />}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ───────────────── Card Visuals ───────────────── */

function InvestVisual() {
  return (
    <div className="relative flex h-40 items-end justify-center gap-2.5 px-2">
      {/* Floating badge */}
      <div className="absolute left-1/2 top-2 z-10 -translate-x-1/2 rounded-full bg-emerald-500 px-3.5 py-1 text-xs font-semibold text-white shadow-md">
        High Yield
      </div>

      {/* Bars */}
      {[28, 40, 72, 48, 36].map((h, i) => (
        <div
          key={i}
          className="relative w-8 rounded-t-md bg-emerald-800/60"
          style={{ height: `${h}%` }}
        >
          {i === 2 && (
            <>
              <div className="absolute inset-0 rounded-t-md bg-emerald-400" />
              <div className="absolute -top-5 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-emerald-400 text-emerald-950">
                <ArrowUpRight className="h-3 w-3" strokeWidth={3} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function SaveVisual() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Piggy / wallet icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-900 text-emerald-300">
        <PiggyBank className="h-7 w-7" strokeWidth={1.75} />
      </div>

      {/* Goal card */}
      <div className="w-full rounded-2xl bg-white px-4 py-3.5 shadow-sm">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">Savings goal</span>
          <span className="font-semibold text-slate-900">₦500,000</span>
        </div>

        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-emerald-100">
          <div className="h-full w-3/5 rounded-full bg-emerald-500" />
        </div>

        <div className="mt-2.5 flex items-center justify-between text-sm">
          <span className="text-slate-500">Auto-deposit</span>
          <span className="font-semibold text-emerald-600">Weekly</span>
        </div>
      </div>
    </div>
  );
}

function TransactVisual() {
  return (
    <div className="relative flex h-40 flex-col items-center justify-center">
      {/* Transfer toast */}
      <div className="absolute left-0 top-3 z-10 flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-md">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
          AV
        </div>
        <div className="leading-tight">
          <p className="text-[11px] text-slate-500">Sent successfully</p>
          <p className="text-sm font-semibold text-slate-900">₦250,000</p>
        </div>
      </div>

      {/* Globe */}
      <Globe className="mt-6 h-24 w-24 text-emerald-700/30" strokeWidth={1} />

      {/* Status badge */}
      <div className="absolute bottom-2 right-0 flex items-center gap-1.5 rounded-full bg-emerald-800 px-3 py-1.5 text-[11px] font-medium text-emerald-100">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Instant · Confirmed
      </div>
    </div>
  );
}

export default BecauseWeCareSection;
