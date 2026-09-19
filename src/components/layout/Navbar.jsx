import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaArrowRight,
  FaBars,
  FaXmark,
  FaInstagram,
} from "react-icons/fa6";

const navLinks = [
  { name: "Experience", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 z-50 w-full px-4 pt-4 md:px-8"
      >
        <motion.nav
          animate={{
            maxWidth: scrolled ? "1100px" : "1350px",
            backgroundColor: scrolled
              ? "rgba(20,18,15,0.88)"
              : "rgba(20,18,15,0.45)",
          }}
          transition={{ duration: 0.5 }}
          className="
            mx-auto flex h-[72px] items-center justify-between
            rounded-full border border-white/10
            px-5 md:px-7
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          "
        >
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full border border-white/20
                text-xs text-white
              "
            >
              K
            </motion.div>

            <div>
              <span className="block text-lg font-semibold tracking-[0.35em] text-white">
                KAPAI
              </span>

              <span className="hidden text-[8px] uppercase tracking-[0.35em] text-white/40 sm:block">
                Coffee House & Bistro
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavItem key={link.name} {...link} />
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <motion.a
              href="https://instagram.com/kapaiindia"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-white/10
                text-white/70 transition
                hover:border-white/30 hover:text-white
              "
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href="#menu"
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              className="
                group flex items-center gap-3
                rounded-full bg-[#E9D6B4]
                px-5 py-3 text-sm font-medium
                text-[#1b1814]
              "
            >
              Explore Menu

              <motion.span
                variants={{
                  hover: { x: 4, rotate: -45 },
                }}
                transition={{ duration: 0.25 }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full border border-white/15
              text-white lg:hidden
            "
          >
            <FaBars />
          </button>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[100]
              bg-[#15120f]/95
              px-6 py-6
              backdrop-blur-2xl
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold tracking-[0.3em] text-white">
                  KAPAI
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/40">
                  Coffee House & Bistro
                </p>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-full border border-white/15
                  text-white
                "
              >
                <FaXmark />
              </button>
            </div>

            <div className="mt-20">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  className="
                    group flex items-center justify-between
                    border-b border-white/10
                    py-5 text-4xl font-light text-white
                  "
                >
                  {link.name}

                  <motion.span
                    className="text-sm text-[#E9D6B4]"
                    whileHover={{ x: 6 }}
                  >
                    0{index + 1}
                  </motion.span>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#menu"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
                mt-10 flex items-center justify-between
                rounded-full bg-[#E9D6B4]
                px-6 py-4 font-medium text-[#1b1814]
              "
            >
              Explore Kapai Menu

              <FaArrowRight />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({ name, href }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      className="
        relative overflow-hidden
        rounded-full px-4 py-3
        text-sm text-white/65
        transition-colors hover:text-white
      "
    >
      <span>{name}</span>

      <motion.span
        variants={{
          rest: { width: 0, opacity: 0 },
          hover: { width: "45%", opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
        className="
          absolute bottom-1 left-1/2
          h-[1px] -translate-x-1/2
          bg-[#E9D6B4]
        "
      />
    </motion.a>
  );
}