import React, { type FormEvent, useState } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
  };

  return (
    <footer className="w-full max-w-full overflow-x-hidden bg-teal-950 text-teal-100 font-sans border-t border-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section: Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-10 border-b border-teal-800/60">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">
              Subscribe
            </h2>
            <p className="mt-2 text-base text-teal-100">
              Join our newsletter to stay up to date on latest information.
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full min-w-0 px-4 py-3 text-base rounded-md border border-teal-600/50 text-gray-900 bg-teal-50/95 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 text-base font-semibold text-[#0D998B] bg-white hover:bg-teal-50 rounded-md shrink-0 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0D998B] focus:ring-white"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-teal-200">
              By subscribing you agree with our{" "}
              <a
                href="/privacy"
                className="underline hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        {/* Middle Section: Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-teal-800/60">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Address</h3>
            <address className="not-italic text-sm text-teal-100/90 leading-relaxed">
              House B1,
              <br />
              Rose Gardens Courts,
              <br />
              Rangers Avenue, Enugu.
              <br />
              Nigeria.
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@avvicmfb.com"
                  className="hover:text-white transition-colors break-all"
                >
                  info@avvicmfb.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348149316300"
                  className="hover:text-white transition-colors"
                >
                  +234 814 931 6300
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Let's Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Let's Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal & License */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-teal-200">
          <div className="space-y-1">
            <p>© 2026 Avvic MFB. All rights reserved.</p>
            <p className="text-teal-200/80">
              Fully Licensed by the{" "}
              <strong className="text-white font-semibold">CBN</strong> |
              Deposits Insured by{" "}
              <strong className="text-white font-semibold">NDIC</strong>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of service
            </a>
            <a
              href="/whistleblowing"
              className="hover:text-white transition-colors"
            >
              Whistleblowing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
