import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Cpu,
  HeartHandshake,
} from "lucide-react";

const NigeriaFlag = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 6 4" className={className} aria-label="Nigeria" role="img">
    <rect width="2" height="4" fill="#008751" />
    <rect x="2" width="2" height="4" fill="#fff" />
    <rect x="4" width="2" height="4" fill="#008751" />
  </svg>
);

const BOARD_MEMBERS = [
  {
    name: "Prof. Paschal Iloegbu",
    role: "Chairman",
    initials: "PI",
  },
  {
    name: "Obioma Akpagbula",
    role: "Managing Director",
    initials: "OA",
  },
  {
    name: "Uchenna Chukwueke",
    role: "Non-Executive Director",
    initials: "UC",
  },
  {
    name: "Samuel Oseafiana",
    role: "Non-Executive Director",
    initials: "SO",
  },
  {
    name: "Odera Ogbodo",
    role: "Non-Executive Director",
    initials: "OO",
  },
  {
    name: "Dr. Chijioke Nneji",
    role: "Non-Executive Director",
    initials: "CN",
  },
  {
    name: "Dr. Ifeanyi Onwuka",
    role: "Independent Non-Executive Director",
    initials: "IO",
  },
];

const VALUES = [
  {
    title: "People Development",
    desc: "We invest in the growth and development of our people, customers and the communities we serve. When people thrive, businesses and societies prosper.",
    icon: Users,
  },
  {
    title: "Global Best Practice",
    desc: "We uphold the highest standards, ensuring transparency and global best practice in every transaction and relationship.",
    icon: Globe,
  },
  {
    title: "Technology Driven Innovation",
    desc: "We harness cutting-edge digital solutions to simplify banking and enhance transaction efficiency. We deliver smarter financial services tailored to modern needs.",
    icon: Cpu,
  },
  {
    title: "Client Satisfaction",
    desc: "We prioritize exceptional customer experience, redefining service expectations by providing reliable, accessible, and responsive financial solutions.",
    icon: HeartHandshake,
  },
];

export const AboutPage: React.FC = () => {
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
              <NigeriaFlag className="w-3.5 h-3.5 rounded-xs" /> About Avvic MFB
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] max-w-4xl">
            We are a bank, set to help you do{" "}
            <span className="underline decoration-emerald-500 decoration-wavy decoration-2">
              exceedingly more
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
            At Avvic MFB, we provide you with unique opportunities for finance,
            investment, business and personal growth.
          </p>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 my-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Our Identity
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 mt-1">
              Who We Are
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              We are redefining banking for the modern age. Our bank seamlessly
              integrates technology and personalized customer care to provide
              unparalleled financial solutions. As a futuristic institution,
              Avvic MFB leverages the advancements in digital banking to offer
              convenient, secure, and efficient services to our valued
              customers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="max-w-5xl mx-auto my-20">
        <div className="mb-10 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Governance
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 mt-1">
            Our Leadership
          </h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-2">
            Board of Directors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BOARD_MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex items-center gap-4 group hover:border-emerald-500/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 font-extrabold text-lg shrink-0">
                {member.initials}
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-extrabold text-slate-900 truncate group-hover:text-emerald-700 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 truncate mt-0.5">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="max-w-5xl mx-auto my-20">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Core Principles
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 mt-1">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Experience Banner */}
      <section className="max-w-5xl mx-auto my-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <h3 className="text-2xl sm:text-3xl font-black mb-2 relative z-10">
          Be part of the Avvic experience
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto relative z-10">
          Join thousands of individuals and businesses growing with Avvic
          Microfinance Bank.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
