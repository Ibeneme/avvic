import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  ArrowRight,
  Mail,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";

const NigeriaFlag = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 6 4" className={className} aria-label="Nigeria" role="img">
    <rect width="2" height="4" fill="#008751" />
    <rect x="2" width="2" height="4" fill="#fff" />
    <rect x="4" width="2" height="4" fill="#008751" />
  </svg>
);

const JOB_CATEGORIES = [
  { id: "all", label: "All Roles" },
  { id: "Information Technology (IT)", label: "Engineering & IT" },
  { id: "Human Resources (HR)", label: "HR" },
  { id: "Finance", label: "Finance" },
  { id: "Operations", label: "Operations" },
  { id: "Customer Experience", label: "Customer Experience" },
  { id: "Legal", label: "Legal" },
  { id: "Product Management", label: "Product" },
  { id: "MCC", label: "Marketing & Comms" },
  { id: "Sales / Business Development", label: "Strategy" },
];

const JOBS = [
  {
    title: "UX/UI Designer",
    department: "Information Technology (IT)",
    location: "Enugu",
    type: "Full-time",
    desc: "Responsible for designing and developing user interfaces for web and mobile applications, ensuring a seamless and user-friendly experience. Collaborate with developers and product teams to implement creative design solutions that align with business objectives.",
  },
  {
    title: "UX/UI Designer (Intern)",
    department: "Information Technology (IT)",
    location: "Enugu",
    type: "Internship",
    desc: "Assist in creating and improving user interfaces for web and mobile applications. Support the design team in wireframing, prototyping, and conducting user experience research to enhance usability and aesthetics.",
  },
  {
    title: "UI Developer",
    department: "Information Technology (IT)",
    location: "Enugu",
    type: "Full-time",
    desc: "Develop responsive and visually appealing user interfaces for web and mobile applications. Work closely with the design team to implement UI components that improve user experience and meet performance standards.",
  },
  {
    title: "HR Manager",
    department: "Human Resources (HR)",
    location: "Enugu",
    type: "Full-time",
    desc: "Oversee all HR functions, including recruitment, onboarding, employee relations, and performance management. Ensure compliance with labor laws and develop strategies to foster a positive and productive work environment.",
  },
  {
    title: "HR Intern",
    department: "Human Resources (HR)",
    location: "Enugu",
    type: "Internship",
    desc: "Support the HR team with recruitment, onboarding, documentation, and employee engagement initiatives. Assist in maintaining accurate HR records and learning HR best practices in a professional environment.",
  },
  {
    title: "QA Manager",
    department: "Finance",
    location: "Enugu",
    type: "Full-time",
    desc: "Manage the quality assurance process for financial reports and transactions. Ensure compliance with company policies, identify discrepancies, and work with the finance team to maintain accuracy and transparency.",
  },
  {
    title: "Operations Manager",
    department: "Operations",
    location: "Enugu",
    type: "Full-time",
    desc: "Oversee daily operations to ensure efficiency and productivity. Coordinate cross-departmental activities, manage resources, and implement strategies to optimize workflow and operational performance.",
  },
  {
    title: "Customer Experience Officer",
    department: "Customer Experience",
    location: "Enugu",
    type: "Full-time",
    desc: "Ensure exceptional customer experiences by handling inquiries, resolving complaints, and gathering feedback. Collaborate with teams to enhance service delivery and improve customer satisfaction.",
  },
  {
    title: "Legal Advisor",
    department: "Legal",
    location: "Enugu",
    type: "Full-time",
    desc: "Provide legal guidance and ensure compliance with regulatory requirements. Draft, review, and interpret contracts and agreements while offering advice on legal risks and implications.",
  },
  {
    title: "Product Manager (Junior)",
    department: "Product Management",
    location: "Enugu",
    type: "Full-time",
    desc: "Assist in planning, developing, and managing products throughout their lifecycle. Work closely with design, engineering, and marketing teams to ensure products meet user needs and business goals.",
  },
  {
    title: "MCC Officer",
    department: "MCC",
    location: "Enugu",
    type: "Full-time",
    desc: "Support the marketing and communications team in developing campaigns, managing content, and coordinating media outreach. Assist in maintaining brand consistency across channels.",
  },
  {
    title: "Business Strategy Developer",
    department: "Sales / Business Development",
    location: "Enugu",
    type: "Full-time",
    desc: "Develop strategies to drive business growth and improve market presence. Conduct market research, identify new opportunities, and collaborate with the sales team to achieve revenue targets.",
  },
];

const ETHICS = [
  {
    label: "Innovation",
    icon: Sparkles,
    desc: "Challenging the status quo with clever tech",
  },
  {
    label: "Professionalism",
    icon: Award,
    desc: "Taking pride in the craft and output",
  },
  {
    label: "Respect",
    icon: Users,
    desc: "Listening deeply, backing each other up",
  },
  {
    label: "Transparency",
    icon: ShieldCheck,
    desc: "Keeping things honest, open, and clear",
  },
  {
    label: "Collaboration",
    icon: TrendingUp,
    desc: "Building better things together than apart",
  },
  {
    label: "Accountability",
    icon: Briefcase,
    desc: "Owning our wins and our mistakes",
  },
];

export const CareersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredJobs =
    selectedCategory === "all"
      ? JOBS
      : JOBS.filter((job) => job.department === selectedCategory);

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
              <NigeriaFlag className="w-3.5 h-3.5 rounded-xs" /> African
              Financial Landscape
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] max-w-4xl">
            We equip you to{" "}
            <span className="underline decoration-emerald-500 decoration-wavy decoration-2">
              do more
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
            We are a team, making a difference in the financial landscape in
            Africa. Avvic MFB places a premium on talented, creative and driven
            individuals who share in our ideals and are motivated to achieve our
            strategic objectives.
          </p>
        </motion.div>
      </section>

      {/* Narrative Section: Continuing Development */}
      <section className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 my-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Growth & Culture
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 mt-1">
              Continuing team development
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              We ensure that your personal development is at its peak, so that
              you can do more. We are keen on development processes that ensure
              a work environment that fosters creativity, collaboration,
              consistent personal development, and an increasing opportunity to
              make impact.
            </p>
          </div>
        </div>
      </section>

      {/* Work Ethics Grid */}
      <section className="max-w-5xl mx-auto my-16">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            Principles
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 mt-1">
            Our Work Ethics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ETHICS.map((eth, i) => {
            const Icon = eth.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    {eth.label}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{eth.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Job Openings Section - Re-imagined Modern Bento / Card Grid Layout */}
      <section id="openings" className="max-w-5xl mx-auto my-20">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Open Positions
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 mt-1">
              Job Openings
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-lg">
              If you like to Do More, then Avvic is for you, check the openings
              below to see where you fit in.
            </p>
          </div>
          <div className="text-xs font-bold text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200 self-start md:self-auto shadow-sm">
            Showing {filteredJobs.length} active roles
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {JOB_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Modern 2-Column Grid Layout for Jobs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence>
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={`${job.title}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-emerald-500/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full pointer-events-none -z-0 opacity-40 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50/80 px-3 py-1 rounded-full border border-emerald-100">
                      {job.department}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        <MapPin className="w-3 h-3 text-emerald-600" />{" "}
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        <Clock className="w-3 h-3 text-slate-400" /> {job.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors mb-3">
                    {job.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {job.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Avvic MFB Team
                  </span>
                  <a
                    href="#apply"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold group-hover:bg-emerald-600 transition-colors shadow-sm"
                  >
                    <span>Apply Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Catch-all Email Box */}
        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 text-center shadow-sm">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
            Didn't find a role that fits you?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
            Send Us An Email anyway and let us know where you fit in Thanks.
          </p>
          <a
            href="mailto:careers@avvicmfb.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-md"
          >
            <Mail className="w-4 h-4" />
            <span>Send Us An Email</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
