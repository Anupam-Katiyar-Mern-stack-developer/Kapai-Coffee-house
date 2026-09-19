import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FaArrowRight,
  FaBars,
  FaInstagram,
  FaXmark,
} from "react-icons/fa6";

const navLinks = [
  { name: "Story", href: "#about" },
  { name: "Specials", href: "#specials" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
          <motion.nav
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`
              mx-auto flex items-center justify-between
              border backdrop-blur-2xl
              transition-all duration-500

              ${scrolled
                ? `
                    max-w-6xl
                    border-[#6B4F3A]/10
                    bg-[#F4EBDD]/95
                    shadow-[0_15px_45px_rgba(64,43,28,0.12)]
                  `
                : `
                    max-w-[1380px]
                    border-white/40
                    bg-[#F4EBDD]/85
                  `
              }

              h-[62px] rounded-[20px] px-3
              sm:h-[68px] sm:rounded-[24px] sm:px-4
              lg:h-[72px] lg:rounded-full lg:px-6
            `}
          >
            {/* Logo */}
            <a
              href="#home"
              className="flex min-w-0 items-center gap-2.5 sm:gap-3"
            >
              <motion.div
                whileHover={{ rotate: 180, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-full
                  border border-[#8B6A4D]/20
                  bg-[#E8D8C3]
                  text-[11px] font-semibold
                  text-[#4B3425]
                  sm:h-10 sm:w-10
                "
              >
                K
              </motion.div>

              <div>
                <p className="text-[15px] font-semibold tracking-[0.3em] text-[#3D2A1E] sm:text-lg">
                  KAPAI
                </p>

                <p className="hidden text-[7px] uppercase tracking-[0.28em] text-[#8D7868] sm:block">
                  Coffee House & Bistro
                </p>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <NavLink key={link.name} {...link} />
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <motion.a
                href="https://instagram.com/kapaiindia"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full
                  border border-[#8B6A4D]/15
                  bg-[#E8D8C3]/60
                  text-[#6B4F3A]
                  transition
                  hover:bg-[#DDC7AA]
                "
              >
                <FaInstagram size={16} />
              </motion.a>

              <motion.a
                href="#menu"
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                className="
                  flex items-center gap-3
                  rounded-full
                  bg-[#6B4F3A]
                  px-5 py-3
                  text-[13px] font-semibold
                  text-[#FFF8EF]
                  transition-colors
                  hover:bg-[#533B2B]
                "
              >
                Explore Menu

                <motion.span
                  variants={{
                    hover: {
                      x: 4,
                      rotate: -45,
                    },
                  }}
                >
                  <FaArrowRight size={11} />
                </motion.span>
              </motion.a>
            </div>

            {/* Tablet */}
            <div className="hidden items-center gap-2 sm:flex lg:hidden">
              <a
                href="#menu"
                className="
                  rounded-full bg-[#6B4F3A]
                  px-4 py-2.5
                  text-xs font-semibold
                  text-white
                "
              >
                Menu
              </a>

              <MenuButton onClick={() => setMenuOpen(true)} />
            </div>

            {/* Mobile */}
            <div className="sm:hidden">
              <MenuButton onClick={() => setMenuOpen(true)} />
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[100]
              overflow-y-auto
              bg-[#F5EDE2]
              px-4 py-4
              sm:px-7 sm:py-6
            "
          >
            <div className="absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#D6B995]/30 blur-[110px]" />

            <div className="relative mx-auto flex min-h-full max-w-4xl flex-col">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold tracking-[0.32em] text-[#3D2A1E]">
                    KAPAI
                  </p>

                  <p className="mt-1 text-[7px] uppercase tracking-[0.28em] text-[#9A8472]">
                    Coffee House & Bistro
                  </p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-[#6B4F3A]/15
                    bg-[#E9D9C5]
                    text-[#4B3425]
                  "
                >
                  <FaXmark />
                </motion.button>
              </div>

              {/* Links */}
              <div className="my-auto py-14 sm:py-16">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="
                      flex items-center justify-between
                      border-b border-[#6B4F3A]/10
                      py-5
                      text-[clamp(2rem,8vw,4rem)]
                      font-light
                      text-[#3D2A1E]
                    "
                  >
                    {link.name}

                    <span className="text-[9px] text-[#A48365]">
                      0{index + 1}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#menu"
                onClick={() => setMenuOpen(false)}
                whileTap={{ scale: 0.98 }}
                className="
                  mb-3 flex w-full items-center justify-between
                  rounded-full
                  bg-[#6B4F3A]
                  px-6 py-4
                  text-sm font-semibold
                  text-[#FFF8EF]
                "
              >
                Explore Kapai Menu
                <FaArrowRight />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuButton({ onClick }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        border border-[#6B4F3A]/15
        bg-[#E9D9C5]
        text-[#4B3425]
      "
    >
      <FaBars size={14} />
    </motion.button>
  );
}

function NavLink({ name, href }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      className="
        group relative
        px-4 py-3
        text-[13px] font-medium
        text-[#746052]
        transition-colors duration-300
        hover:text-[#3D2A1E]
      "
    >
      <span>{name}</span>

      <motion.span
        variants={{
          rest: {
            scaleX: 0,
          },
          hover: {
            scaleX: 1,
          },
        }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          bottom-[5px]
          left-4 right-4
          h-[1.5px]
          origin-left
          rounded-full
          bg-[#6B4F3A]
        "
      />
    </motion.a>
  );
}