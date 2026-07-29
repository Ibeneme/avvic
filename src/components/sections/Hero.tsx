import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Bell,
  Eye,
  EyeOff,
  Plus,
  Check,
} from "lucide-react";

/* Nigeria flag */
const NigeriaFlag = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 6 4" className={className} aria-label="Nigeria" role="img">
    <rect width="2" height="4" fill="#008751" />
    <rect x="2" width="2" height="4" fill="#fff" />
    <rect x="4" width="2" height="4" fill="#008751" />
  </svg>
);

/* ─── Animated number helper ───────────────────────────────────── */
function useAnimatedNumber(target: number, duration = 700) {
  const [display, setDisplay] = useState(target);
  const prev = useRef(target);

  useEffect(() => {
    const start = prev.current;
    const diff = target - start;
    if (diff === 0) return;

    const startTime = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(start + diff * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    prev.current = target;
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return display;
}

/* ─── Phone Mockup ─────────────────────────────────────────────── */
const PhoneMockup = () => {
  const [balance, setBalance] = useState(3200);
  const [hidden, setHidden] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const animatedBalance = useAnimatedNumber(balance);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  const addMoney = (amount = 500) => {
    if (isAdding) return;
    setIsAdding(true);
    setBalance((b) => b + amount);
    showToast(`+₦${amount.toLocaleString("en-NG")} saved`);
    setTimeout(() => setIsAdding(false), 800);
    resetIdle();
  };

  const resetIdle = () => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      // gentle auto-demo
      addMoney(Math.random() > 0.5 ? 500 : 1000);
    }, 5200);
  };

  useEffect(() => {
    resetIdle();
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px] select-none">
      {/* Soft glow */}
      <div className="absolute -inset-8 bg-emerald-500/15 blur-3xl rounded-full pointer-events-none" />

      {/* Phone frame */}
      <div className="relative rounded-[2.6rem] bg-[#1a1a1a] p-[10px] shadow-2xl shadow-black/40">
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-8 rounded-l-full bg-[#2a2a2a]" />
        <div className="absolute -left-[3px] top-36 w-[3px] h-12 rounded-l-full bg-[#2a2a2a]" />
        <div className="absolute -right-[3px] top-32 w-[3px] h-16 rounded-r-full bg-[#2a2a2a]" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.15rem] bg-[#0c0c0c] aspect-[9/19.2]">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 w-[92px] h-[28px] bg-black rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] ring-1 ring-white/10" />
          </div>

          {/* Status bar */}
          <div className="absolute top-0 inset-x-0 h-12 z-20 flex items-end justify-between px-6 pb-1.5">
            <span className="text-[12px] font-semibold text-white tracking-tight">
              9:41
            </span>
            <div className="flex items-center gap-1.5">
              <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
                <rect x="0" y="7" width="3" height="4" rx="0.6" />
                <rect x="4.2" y="5" width="3" height="6" rx="0.6" />
                <rect x="8.4" y="2.5" width="3" height="8.5" rx="0.6" />
                <rect x="12.6" y="0" width="3" height="11" rx="0.6" />
              </svg>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="white">
                <path d="M7.5 9.2a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6zM1.2 5.4a8.5 8.5 0 0112.6 0l-1.2 1.2a6.7 6.7 0 00-10.2 0L1.2 5.4zM3.6 7.6a5 5 0 017.8 0L10.2 8.8a3.3 3.3 0 00-5.4 0L3.6 7.6z" />
              </svg>
              <div className="flex items-center gap-0.5">
                <div className="w-[22px] h-[11px] rounded-[3px] border border-white/80 p-[1.5px]">
                  <div className="h-full w-[70%] rounded-[1.5px] bg-white" />
                </div>
                <div className="w-[1.5px] h-[4px] rounded-r-full bg-white/60" />
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="absolute inset-0 pt-14 px-5 pb-6 flex flex-col text-white overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-[17px] font-semibold tracking-tight">
                  Good morning, Ada
                </p>
                <p className="text-[13px] text-white/50 mt-0.5">
                  Welcome to Avvic
                </p>
              </div>
              <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform">
                <Bell className="w-4 h-4 text-white/80" />
              </button>
            </div>

            {/* Balance card */}
            <div className="rounded-2xl bg-[#1c1c1e] p-4 mb-5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[12px] text-white/50">Your balance</p>
                <button
                  onClick={() => {
                    setHidden((h) => !h);
                    resetIdle();
                  }}
                  className="p-1 -mr-1 rounded-full active:scale-90 transition-transform"
                  aria-label={hidden ? "Show balance" : "Hide balance"}
                >
                  {hidden ? (
                    <EyeOff className="w-3.5 h-3.5 text-white/40" />
                  ) : (
                    <Eye className="w-3.5 h-3.5 text-white/40" />
                  )}
                </button>
              </div>

              <div className="h-9 mb-4 flex items-center">
                <AnimatePresence mode="wait">
                  {hidden ? (
                    <motion.p
                      key="hidden"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="text-[28px] font-semibold tracking-widest text-white/70"
                    >
                      ••••••
                    </motion.p>
                  ) : (
                    <motion.p
                      key="visible"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="text-[28px] font-semibold tracking-tight tabular-nums"
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      ₦{animatedBalance.toLocaleString("en-NG")}
                      <span className="text-[18px] text-white/50">.00</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                onClick={() => addMoney(500)}
                whileTap={{ scale: 0.96 }}
                disabled={isAdding}
                className="w-full py-2.5 rounded-full bg-white text-black text-[13px] font-semibold relative overflow-hidden disabled:opacity-80"
              >
                <AnimatePresence mode="wait">
                  {isAdding ? (
                    <motion.span
                      key="saving"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center justify-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Saved
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      Add money
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Success toast inside the phone */}
              <AnimatePresence>
                {toast && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 24 }}
                    className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-emerald-500 text-white text-[12px] font-semibold flex items-center gap-2 shadow-lg"
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    {toast}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cards section */}
            <div className="flex items-center justify-between mb-3">
              <p className="text-[14px] font-semibold">Your cards</p>
              <button className="flex items-center gap-1 text-[12px] text-white/50 font-medium active:scale-95 transition-transform">
                <Plus className="w-3.5 h-3.5" />
                New card
              </button>
            </div>

            {/* Card stack */}
            <div className="relative h-[118px]">
              {/* Back card */}
              <div className="absolute right-0 top-3 w-[72%] h-[100px] rounded-2xl bg-emerald-800/80 border border-emerald-600/40 rotate-3 origin-bottom-right" />

              {/* Front debit card */}
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="absolute left-0 top-0 w-[78%] h-[110px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, #1E5D42 0%, #0F3D2B 100%)",
                }}
              >
                {/* Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ctext x='4' y='18' font-family='system-ui' font-size='10' font-weight='700'%3EAVVIC%3C/text%3E%3Ctext x='4' y='38' font-family='system-ui' font-size='10' font-weight='700'%3EAVVIC%3C/text%3E%3Ctext x='4' y='58' font-family='system-ui' font-size='10' font-weight='700'%3EAVVIC%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                <div className="relative h-full p-3.5 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-[18px] font-bold tracking-tight text-white">
                      A.
                    </span>
                    <div className="flex -space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-red-500/90" />
                      <div className="w-5 h-5 rounded-full bg-amber-400/80" />
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] text-white/60 mb-0.5">
                        Debit card
                      </p>
                      <p className="text-[12px] font-medium tracking-widest text-white/90">
                        •••• 4568
                      </p>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 text-[10px] font-medium text-white backdrop-blur-sm">
                      <Eye className="w-2.5 h-2.5" />
                      Details
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Animation variants ───────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 130, damping: 18 },
  },
};

/* ─── Hero ─────────────────────────────────────────────────────── */
export const HeroPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F8F7] text-slate-900 font-sans selection:bg-emerald-600 selection:text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[680px] bg-gradient-to-b from-[#E3F2EE]/75 via-[#F6F8F7]/25 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-16 left-6 w-80 h-80 sm:w-96 sm:h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-24 right-4 w-72 h-72 sm:w-96 sm:h-96 bg-teal-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 sm:pt-14 lg:pt-20 lg:pb-32">
        <motion.div
          className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 xl:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Left */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-sm mb-6"
            >
              <span className="px-2 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-wide">
                New
              </span>
              <span>Your Smart Banking Companion</span>
              <span className="w-px h-3 bg-slate-200" />
              <NigeriaFlag className="w-4 h-3 rounded-[1px] overflow-hidden" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-extrabold tracking-tight text-slate-900 max-w-xl leading-[1.1]"
            >
              The Ultimate Digital Banking &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
                Savings App
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-lg text-slate-600 max-w-md leading-relaxed"
            >
              Empowering you to take charge of your financial future with
              intuitive tools, high yields, and personalized insights.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5"
            >
              <motion.a
                href="#signup"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-lg shadow-slate-900/15 hover:bg-slate-800 transition-colors"
              >
                <span>Get Avvic App</span>
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </span>
              </motion.a>

              <motion.a
                href="#features"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-800 text-sm font-semibold border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors"
              >
                Explore Features
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-4.5 py-2.5 rounded-full border border-slate-200/80 shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>CBN Licensed & NDIC Insured</span>
            </motion.div>
          </div>

          {/* Right — interactive phone */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end w-full"
          >
            <PhoneMockup />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default HeroPage;
