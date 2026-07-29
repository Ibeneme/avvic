import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  Wallet,
  PiggyBank,
  CircleDollarSign,
  ChevronRight,
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 180, damping: 22 },
    },
  };

  const features = [
    {
      icon: <PiggyBank className="w-5 h-5" />,
      title: "Smart Savings",
      desc: "Flexible deposits and competitive rates that help you grow your money every day.",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
      href: "#smart-savings",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "SME Financing",
      desc: "Tailored funding to help your business expand and scale with confidence.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      href: "#sme-financing",
    },
    {
      icon: <CircleDollarSign className="w-5 h-5" />,
      title: "Fast Loans",
      desc: "Quick approvals and flexible repayment plans for personal or business needs.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      href: "#fast-loans",
    },
    {
      icon: <Wallet className="w-5 h-5" />,
      title: "Payments & Transfers",
      desc: "Send and receive money instantly with bank-grade security across Nigeria.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      href: "#payments",
    },
  ];

  const badges = [
    "CBN Licensed",
    "NDIC Insured",
    "Bank-Grade Security",
    "Secure Payments",
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-teal-50/30 to-white text-gray-900 font-sans overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-[11px] font-semibold tracking-wide uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Banking Built for Growth
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-gray-900 leading-[1.15] mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-teal-800 to-teal-500 bg-clip-text text-transparent">
              manage & grow
            </span>{" "}
            your money
          </h2>
          <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
            Smart savings, flexible loans, SME financing and seamless payments —
            all in one secure platform.
          </p>
        </motion.div>

        {/* 4 equal cards – same style as Smart Savings */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              className="group relative rounded-3xl overflow-hidden bg-teal-950 text-white"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/75 to-teal-950/25" />
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-end h-full min-h-[260px] sm:min-h-[280px] p-6 sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-teal-100/90 leading-relaxed mb-5 max-w-sm">
                  {item.desc}
                </p>

                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:gap-2.5 transition-all"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {badges.map((badge) => (
            <motion.div
              key={badge}
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-teal-100 text-xs font-semibold text-teal-900"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
