import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUp, Wallet, Globe } from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 110, damping: 18 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 16 },
    },
  };

  // Savings bar chart heights (px)
  const bars = [48, 80, 144, 112, 64];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans text-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            variants={itemVariants}
            className="text-xs font-semibold tracking-widest text-teal-700 uppercase"
          >
            Why choose us
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
          >
            One platform for all your banking needs
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed"
          >
            Grow your savings, borrow on your terms, and move money — all in one
            place.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* ========== Card 1: Savings ========== */}
          <motion.div
            className="lg:col-span-4 bg-teal-950 text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[420px]"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-teal-50">
                Accelerate your savings
              </h3>
              <p className="mt-2 text-xs text-teal-200/80 leading-relaxed">
                Earn competitive returns with automated High-Yield Savings
                Vaults.
              </p>
            </div>

            <div className="mt-8 relative flex flex-col items-center">
              <motion.div
                className="mb-6 bg-teal-900 border border-teal-700/60 px-4 py-1.5 rounded-full"
                variants={itemVariants}
                whileHover={{ scale: 1.06 }}
              >
                <span className="text-sm font-semibold text-teal-200">
                  ₦12,000,000
                </span>
              </motion.div>

              <div className="flex items-end justify-center gap-3 w-full h-36">
                {bars.map((h, i) => {
                  const featured = i === 2;
                  return (
                    <motion.div
                      key={i}
                      className={`w-8 rounded-t-md ${
                        featured
                          ? "w-10 bg-gradient-to-t from-teal-500 to-teal-300 flex items-center justify-center"
                          : "bg-teal-800/70"
                      }`}
                      variants={itemVariants}
                      style={{ height: h }}
                    >
                      {featured && (
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowUp className="w-5 h-5 text-teal-950 stroke-[3]" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ========== Card 2: Loans ========== */}
          <motion.div
            className="lg:col-span-4 bg-teal-50/60 border border-teal-100 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[420px]"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-teal-950">
                Loans that meet you halfway
              </h3>
              <p className="mt-2 text-xs text-teal-800/70 leading-relaxed">
                Borrow against your savings or income, with clear terms and no
                hidden charges.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-6">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-teal-950 flex items-center justify-center"
                variants={itemVariants}
                whileHover={{ rotate: -4, scale: 1.05 }}
              >
                <Wallet className="w-9 h-9 text-teal-200" />
              </motion.div>

              <motion.div
                className="w-full bg-white border border-teal-100 rounded-2xl p-4 shadow-sm shadow-teal-900/5"
                variants={itemVariants}
              >
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Loan amount</span>
                  <span className="font-semibold text-gray-900">₦500,000</span>
                </div>
                <div className="mt-3 h-1.5 w-full rounded-full bg-teal-100 overflow-hidden">
                  <motion.div
                    className="h-full bg-teal-600 rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "70%" }}
                    transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Approval time</span>
                  <span className="font-semibold text-teal-700">
                    Under 5 mins
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ========== Card 3: Transfers ========== */}
          <motion.div
            className="lg:col-span-4 bg-teal-950 text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[420px]"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-teal-50">
                Send money, within Nigeria and beyond
              </h3>
              <p className="mt-2 text-xs text-teal-200/80 leading-relaxed">
                Instant transfers to any bank, with enterprise-grade reliability
                wherever you&apos;re sending.
              </p>
            </div>

            <div className="relative mt-8 h-48 w-full flex items-center justify-center">
              <motion.div
                className="opacity-15 text-teal-100"
                variants={itemVariants}
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="w-28 h-28 stroke-1" />
              </motion.div>

              <motion.div
                className="absolute top-2 left-0 bg-white text-gray-900 p-3 rounded-2xl flex items-center gap-3 shadow-lg shadow-black/10"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold text-xs">
                  CO
                </div>
                <div>
                  <p className="text-xs text-gray-500">Sent to Chidi</p>
                  <p className="text-sm font-bold">₦250,000</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-2 right-0 flex items-center gap-2 bg-teal-900 border border-teal-700/60 px-3 py-2 rounded-full"
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
              >
                <span className="text-lg leading-none">🇳🇬</span>
                <span className="text-xs font-medium text-teal-200">
                  Instant • Confirmed
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
