import React from "react";
import { motion } from "framer-motion";
import {
  PiggyBank,
  TrendingUp,
  Building2,
  CreditCard,
  PhoneCall,
  ChevronRight,
} from "lucide-react";

const NigeriaFlag = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 6 4" className={className} aria-label="Nigeria" role="img">
    <rect width="2" height="4" fill="#008751" />
    <rect x="2" width="2" height="4" fill="#fff" />
    <rect x="4" width="2" height="4" fill="#008751" />
  </svg>
);

const PRODUCTS = [
  {
    title: "Savings",
    desc: "Easily manage your finances with our savings account, quick, safe, and reliable.",
    icon: PiggyBank,
  },
  {
    title: "FD-Investments",
    desc: "Stay ahead of the market and enjoy high returns on your fixed deposit.",
    icon: TrendingUp,
  },
  {
    title: "Loans",
    desc: "Thanks to our loan, you can now access money to fulfill your dreams.",
    icon: Building2,
  },
  {
    title: "Debit Card",
    desc: "You can go cashless with the debit card that is linked to your account.",
    icon: CreditCard,
  },
  {
    title: "USSD Banking",
    desc: "You can do more with a code, no access to the internet required.",
    icon: PhoneCall,
  },
];

export const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F4F7F6] text-slate-900 font-sans selection:bg-emerald-600 selection:text-white py-12 px-4 sm:px-6">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto pt-12 pb-16 text-left">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">
            <span>Enugu, Nigeria</span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <NigeriaFlag className="w-3.5 h-3.5 rounded-xs" /> Avvic MFB
              Solutions
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] max-w-4xl">
            Our{" "}
            <span className="underline decoration-emerald-500 decoration-wavy decoration-2">
              Products
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
            Game changing products designed to enable you do more. With
            solutions ranging from digital banking to offline banking channels,
            to loans and investments, our products have been carefully curated
            to meet your various unique needs.
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="max-w-5xl mx-auto my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between group hover:border-emerald-500/50 transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors mb-3">
                    {prod.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {prod.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <a
                    href="#learn-more"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Experience Banner */}
      <section className="max-w-5xl mx-auto my-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <h3 className="text-2xl sm:text-3xl font-black mb-2 relative z-10">
          Be part of the Avvic experience
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto relative z-10">
          Take control of your finances today with products built to help you
          excel.
        </p>
      </section>
    </div>
  );
};

export default ProductsPage;
