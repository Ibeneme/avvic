import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  Search,
  Phone,
  ChevronDown,
  Lock,
  Building2,
  Wallet,
  PiggyBank,
  CircleDollarSign,
  ArrowUpRight,
} from "lucide-react";
import avvicImage from "../../assets/image.png";

/* ───────────────── Types & Data ───────────────── */

type ProductItem = {
  name: string;
  desc: string;
  icon: ReactNode;
  href: string;
};

type ProductGroup = {
  title: string;
  items: ProductItem[];
};

type NavbarProps = {
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
};

const iconClass = "w-4 h-4";
const iconBox = "bg-teal-800 text-teal-200 border border-teal-600/60";

const productGroups: ProductGroup[] = [
  {
    title: "Accounts",
    items: [
      {
        name: "Savings Account",
        desc: "Earn interest daily",
        icon: <PiggyBank className={iconClass} />,
        href: "#savings-account",
      },
      {
        name: "Current Account",
        desc: "Free business transfers",
        icon: <Building2 className={iconClass} />,
        href: "#current-account",
      },
    ],
  },
  {
    title: "Investments",
    items: [
      {
        name: "Fixed Deposit",
        desc: "Higher guaranteed returns",
        icon: <CircleDollarSign className={iconClass} />,
        href: "#fixed-deposit",
      },
      {
        name: "Target Savings",
        desc: "Save for specific goals",
        icon: <PiggyBank className={iconClass} />,
        href: "#target-savings",
      },
    ],
  },
  {
    title: "Loans & Cards",
    items: [
      {
        name: "Personal Loan",
        desc: "Quick funds, flexible terms",
        icon: <Wallet className={iconClass} />,
        href: "#personal-loan",
      },
      {
        name: "Debit Card",
        desc: "Accepted nationwide",
        icon: <Wallet className={iconClass} />,
        href: "#debit-card",
      },
    ],
  },
  {
    title: "Channels",
    items: [
      {
        name: "USSD Banking",
        desc: "Dial *737# anytime",
        icon: <Phone className={iconClass} />,
        href: "#ussd-banking",
      },
      {
        name: "Mobile & Web App",
        desc: "Full banking on the go",
        icon: <ArrowUpRight className={iconClass} />,
        href: "#mobile-web-app",
      },
    ],
  },
];

const allProducts = productGroups.flatMap((g) =>
  g.items.map((item) => ({ ...item, group: g.title }))
);

/* ───────────────── Animation ───────────────── */

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { type: "spring", stiffness: 200, damping: 22 },
  },
};

/* ───────────────── Component ───────────────── */

export default function Navbar({ currentRoute, setCurrentRoute }: NavbarProps) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [query, setQuery] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const productsButtonRef = useRef<HTMLButtonElement>(null);

  /* Effects */
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isProductsOpen) {
        setIsProductsOpen(false);
        productsButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [isProductsOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileProductsOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAllMenus = useCallback(() => {
    setIsProductsOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
    setQuery("");
  }, []);

  const navigate = useCallback(
    (route: string) => {
      setCurrentRoute(route);
      closeAllMenus();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [setCurrentRoute, closeAllMenus]
  );

  const filteredProducts =
    query.trim().length > 0
      ? allProducts.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.desc.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  const navLinkClass = (route: string) =>
    `px-2.5 xl:px-4 py-2 text-xs xl:text-sm font-semibold rounded-full transition-colors duration-200 ${
      currentRoute === route
        ? "bg-teal-100 text-teal-950"
        : "text-gray-700 hover:text-teal-950 hover:bg-teal-50/60"
    }`;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-teal-950 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 w-full font-sans">
        {/* Trust strip */}
        <div className="w-full overflow-hidden bg-teal-950 text-teal-200/80">
          <div className="mx-auto flex h-8 max-w-7xl items-center justify-between gap-2 px-3 text-[10px] font-medium sm:h-9 sm:px-6 sm:text-xs lg:px-8">
            <div className="flex min-w-0 items-center gap-1.5 sm:gap-4">
              <span className="flex min-w-0 items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-teal-400 sm:h-4 sm:w-4" />
                <span className="truncate">
                  <span className="hidden sm:inline">
                    Licensed by the CBN · Deposits insured by NDIC
                  </span>
                  <span className="sm:hidden">CBN licensed · NDIC insured</span>
                </span>
              </span>
              <span className="hidden text-teal-700 md:inline">·</span>
              <span className="hidden shrink-0 tabular-nums text-teal-300 md:inline">
                USD/NGN ≈ 1,530.40
              </span>
            </div>
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <a
                href="tel:+2348149316300"
                className="flex items-center gap-1 rounded transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 sm:gap-1.5"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <span className="hidden md:inline">0814 931 6300</span>
              </a>
              <button
                type="button"
                onClick={() => navigate("contact")}
                className="hidden rounded transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 sm:inline"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="w-full border-b border-teal-100 bg-white/95 backdrop-blur-md">
          <div
            className={`mx-auto flex max-w-7xl items-center justify-between px-3 transition-[height] duration-300 ease-out sm:px-6 lg:px-8 ${
              isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-[4.5rem] lg:h-20"
            }`}
          >
            {/* Logo */}
            <button
              type="button"
              onClick={() => navigate("home")}
              className="group flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
            >
              <img
                src={avvicImage}
                alt="Avvicbank"
                className="h-8 w-auto max-w-[88px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:max-w-[112px] lg:h-12"
              />
            </button>

            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-0.5 lg:flex xl:gap-2"
              aria-label="Primary"
            >
              <button
                type="button"
                onClick={() => navigate("home")}
                className={navLinkClass("home")}
              >
                Home
              </button>

              {/* Products dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  ref={productsButtonRef}
                  onClick={() => setIsProductsOpen((v) => !v)}
                  aria-expanded={isProductsOpen}
                  aria-haspopup="true"
                  aria-controls="products-menu"
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-2 text-xs font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 xl:px-4 xl:text-sm ${
                    isProductsOpen || currentRoute === "products"
                      ? "border border-teal-200 bg-teal-100/70 text-teal-950"
                      : "text-gray-700 hover:bg-teal-50/60 hover:text-teal-950"
                  }`}
                >
                  Products
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ease-out ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isProductsOpen && (
                  <motion.div
                    id="products-menu"
                    role="menu"
                    aria-label="Products"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute left-1/2 top-full z-50 mt-3 w-[min(92vw,640px)] max-w-[calc(100vw-1.5rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-teal-800 bg-teal-950 shadow-2xl shadow-teal-950/40"
                  >
                    {/* Search */}
                    <div className="border-b border-teal-800 bg-teal-900/60 p-3">
                      <div className="flex items-center gap-2 rounded-xl border border-teal-700 bg-teal-900 px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-teal-400">
                        <Search className="h-4 w-4 shrink-0 text-teal-300" />
                        <input
                          type="search"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Search products..."
                          className="min-w-0 w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-teal-400/70"
                          aria-label="Search products"
                          autoComplete="off"
                        />
                      </div>

                      {query.trim().length > 0 && (
                        <div className="mt-2 max-h-40 space-y-1 overflow-y-auto overscroll-contain">
                          {filteredProducts.length === 0 ? (
                            <p className="px-2 py-1.5 text-xs text-teal-300/80">
                              No products match “{query}”.
                            </p>
                          ) : (
                            filteredProducts.map((item) => (
                              <button
                                key={item.name}
                                type="button"
                                role="menuitem"
                                onClick={() => navigate("products")}
                                className="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left transition-colors hover:bg-teal-800/80"
                              >
                                <div
                                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconBox}`}
                                >
                                  {item.icon}
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-bold text-white">
                                    {item.name}
                                  </p>
                                  <p className="truncate text-xs text-teal-300/80">
                                    {item.group} · {item.desc}
                                  </p>
                                </div>
                              </button>
                            ))
                          )}
                        </div>
                      )}
                    </div>

                    {/* Product grid */}
                    {query.trim().length === 0 && (
                      <div className="grid max-h-[min(20rem,calc(100dvh-12rem))] grid-cols-2 gap-2 overflow-y-auto overscroll-contain p-3">
                        {productGroups.map((group) => (
                          <div
                            key={group.title}
                            className="rounded-xl border border-teal-800 bg-teal-900/50 p-2.5"
                          >
                            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-teal-300">
                              {group.title}
                            </p>
                            <div className="space-y-1">
                              {group.items.map((item) => (
                                <button
                                  key={item.name}
                                  type="button"
                                  role="menuitem"
                                  onClick={() => navigate("products")}
                                  className="group flex w-full gap-2 rounded-lg border border-transparent p-1.5 text-left transition-all hover:border-teal-700 hover:bg-teal-800/60"
                                >
                                  <div
                                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${iconBox}`}
                                  >
                                    {item.icon}
                                  </div>
                                  <div className="min-w-0">
                                    <p className="truncate text-xs font-bold text-white group-hover:text-teal-200">
                                      {item.name}
                                    </p>
                                    <p className="line-clamp-1 text-[10px] leading-snug text-teal-300/70">
                                      {item.desc}
                                    </p>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-2 border-t border-teal-800 bg-teal-900/70 px-4 py-2.5">
                      <p className="truncate text-[11px] font-medium text-teal-200">
                        CBN licensed · NDIC insured
                      </p>
                      <button
                        type="button"
                        onClick={() => navigate("products")}
                        className="whitespace-nowrap text-[11px] font-semibold text-teal-300 transition-colors hover:text-white"
                      >
                        View all →
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              <button
                type="button"
                onClick={() => navigate("careers")}
                className={navLinkClass("careers")}
              >
                Careers
              </button>
              <button
                type="button"
                onClick={() => navigate("about")}
                className={navLinkClass("about")}
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => navigate("contact")}
                className={navLinkClass("contact")}
              >
                Contact
              </button>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-2 lg:flex xl:gap-4">
              <span className="hidden items-center gap-1.5 whitespace-nowrap text-xs font-medium text-gray-500 xl:flex">
                <Lock className="h-3.5 w-3.5 shrink-0 text-teal-700" />
                256-bit encrypted
              </span>
              <a
                href="#login"
                className="whitespace-nowrap rounded-full border border-teal-200/80 px-3.5 py-2.5 text-xs font-semibold text-teal-950 transition-colors duration-200 hover:bg-teal-50 xl:px-5"
              >
                Login
              </a>
              <motion.a
                href="#open-account"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-teal-950 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-teal-950/20 transition-colors hover:bg-teal-900 xl:px-6"
              >
                Open Account
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center rounded-2xl border border-teal-100 bg-teal-50 p-2 text-teal-950 transition-colors hover:bg-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:p-2.5 lg:hidden"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden border-b border-teal-100 bg-white shadow-2xl lg:hidden"
          >
            <div className="max-h-[calc(100dvh-3.5rem)] space-y-3 overflow-y-auto overscroll-contain px-3 py-5 sm:space-y-4 sm:px-6 sm:py-6">
              <div className="flex items-center gap-2 rounded-2xl border border-teal-100 bg-teal-50/60 px-3 py-2.5 text-[11px] font-medium text-teal-900 sm:px-4 sm:py-3 sm:text-xs">
                <ShieldCheck className="h-4 w-4 shrink-0 text-teal-700" />
                <span>Licensed by CBN · NDIC insured · 256-bit encrypted</span>
              </div>

              <button
                type="button"
                onClick={() => navigate("home")}
                className={`block w-full rounded-2xl px-3 py-2.5 text-left text-sm font-bold transition-colors sm:px-4 sm:py-3 ${
                  currentRoute === "home"
                    ? "bg-teal-100 text-teal-950"
                    : "text-gray-900 hover:bg-teal-50"
                }`}
              >
                Home
              </button>

              {/* Mobile products */}
              <div>
                <button
                  onClick={() => setIsMobileProductsOpen((v) => !v)}
                  aria-expanded={isMobileProductsOpen}
                  aria-controls="mobile-products"
                  className="flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-bold text-gray-900 transition-colors hover:bg-teal-50 sm:px-4 sm:py-3"
                >
                  Products
                  <ChevronDown
                    className={`h-4 w-4 text-teal-700 transition-transform duration-300 ${
                      isMobileProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileProductsOpen && (
                  <div
                    id="mobile-products"
                    className="mt-2 grid grid-cols-1 gap-2 pl-1 sm:grid-cols-2 sm:pl-2"
                  >
                    {productGroups.map((group) => (
                      <div key={group.title} className="space-y-1">
                        <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-teal-700">
                          {group.title}
                        </p>
                        <div className="space-y-0.5">
                          {group.items.map((item) => (
                            <button
                              key={item.name}
                              type="button"
                              onClick={() => navigate("products")}
                              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left transition-colors hover:bg-teal-50/80"
                            >
                              <div
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${iconBox}`}
                              >
                                {item.icon}
                              </div>
                              <div className="min-w-0">
                                <p className="truncate text-xs font-bold text-teal-950">
                                  {item.name}
                                </p>
                                <p className="truncate text-[11px] text-gray-500">
                                  {item.desc}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {(
                [
                  { label: "Careers", route: "careers" },
                  { label: "About Us", route: "about" },
                  { label: "Contact", route: "contact" },
                ] as const
              ).map(({ label, route }) => (
                <button
                  key={route}
                  type="button"
                  onClick={() => navigate(route)}
                  className={`block w-full rounded-2xl px-3 py-2.5 text-left text-sm font-bold transition-colors sm:px-4 sm:py-3 ${
                    currentRoute === route
                      ? "bg-teal-100 text-teal-950"
                      : "text-gray-900 hover:bg-teal-50"
                  }`}
                >
                  {label}
                </button>
              ))}

              <div className="flex flex-col gap-3 border-t border-teal-100 pb-2 pt-3 sm:pt-4">
                <a
                  href="#login"
                  onClick={closeAllMenus}
                  className="w-full rounded-full border border-teal-200 bg-teal-50 py-3 text-center text-xs font-bold text-teal-950"
                >
                  Login
                </a>
                <a
                  href="#open-account"
                  onClick={closeAllMenus}
                  className="w-full rounded-full bg-teal-950 py-3 text-center text-xs font-bold text-white shadow-lg"
                >
                  Open Account
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
