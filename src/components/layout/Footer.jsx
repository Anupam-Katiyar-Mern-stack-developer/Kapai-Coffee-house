import { motion } from "motion/react";
import {
  FaArrowUp,
  FaInstagram,
  FaWhatsapp,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const footerLinks = [
  { name: "Story", href: "#about" },
  { name: "Specials", href: "#specials" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Visit", href: "#visit" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#F4EBDD] text-[#3D2A1E]">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-[320px] w-[320px] rounded-full bg-[#D8B995]/20 blur-[120px]" />

      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr_0.9fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full
                  border border-[#6B4F3A]/15
                  bg-[#E8D8C3]
                  text-xs font-semibold
                  text-[#4B3425]
                "
              >
                K
              </motion.div>

              <div>
                <h2 className="text-xl font-semibold tracking-[0.32em]">
                  KAPAI
                </h2>

                <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-[#8D7868]">
                  Coffee House & Bistro
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#746052]">
              Thoughtfully brewed coffee, comforting food and a warm space made
              for conversations worth staying for.
            </p>

            <div className="mt-7 flex gap-3">
              <SocialButton
                href="https://instagram.com/kapaiindia"
                label="Instagram"
              >
                <FaInstagram />
              </SocialButton>

              <SocialButton
                href="https://wa.me/919839270027"
                label="WhatsApp"
              >
                <FaWhatsapp />
              </SocialButton>
            </div>
          </div>

          {/* Links */}
          <div>
            <FooterTitle>Explore</FooterTitle>

            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Visit */}
          <div>
            <FooterTitle>Visit Kapai</FooterTitle>

            <div className="mt-5 space-y-5">
              <a
                href="#visit"
                className="
                  flex items-start gap-3
                  text-sm leading-6 text-[#746052]
                  transition-colors
                  hover:text-[#3D2A1E]
                "
              >
                <FaLocationDot className="mt-1 shrink-0 text-[#6B4F3A]" />

                <span>
                  Model Town / Pandu Nagar
                  <br />
                  Kanpur, Uttar Pradesh
                </span>
              </a>

              <a
                href="tel:+919839270027"
                className="
                  flex items-center gap-3
                  text-sm text-[#746052]
                  transition-colors
                  hover:text-[#3D2A1E]
                "
              >
                <FaPhone className="text-[#6B4F3A]" />
                +91 98392 70027
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <FooterTitle>Good Coffee Awaits</FooterTitle>

            <p className="mt-5 text-sm leading-7 text-[#746052]">
              Explore handcrafted coffees, slow brews and all-day favourites.
            </p>

            <motion.a
              href="#menu"
              whileHover={{ x: 4 }}
              className="
                mt-6 inline-flex items-center gap-3
                rounded-full
                bg-[#6B4F3A]
                px-5 py-3
                text-[10px] font-semibold
                uppercase tracking-[0.14em]
                text-[#FFF8EF]
                transition-colors
                hover:bg-[#533B2B]
              "
            >
              Explore Menu
              <span>→</span>
            </motion.a>
          </div>
        </div>

        {/* Big Kapai Text
        <div className="mt-16 overflow-hidden border-t border-[#6B4F3A]/10 pt-10">
          <motion.h3
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              select-none
              text-center
              text-[clamp(4rem,17vw,13rem)]
              font-semibold
              leading-[0.8]
              tracking-[-0.07em]
              text-[#E5D4BF]
            "
          >
            KAPAI
          </motion.h3>
        </div> */}

        {/* Bottom */}
        <div
          className="
            mt-10 flex flex-col gap-5
            border-t border-[#6B4F3A]/10
            pt-6
            text-[10px]
            uppercase tracking-[0.14em]
            text-[#927D6D]

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© {new Date().getFullYear()} Kapai Coffee House & Bistro</p>

          <div className="flex items-center justify-between gap-6">
            <span>Kanpur, India</span>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                border border-[#6B4F3A]/15
                bg-[#E8D8C3]
                text-[#6B4F3A]
                transition
                hover:bg-[#DDC7AA]
              "
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }) {
  return (
    <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6B4F3A]">
      {children}
    </h4>
  );
}

function FooterLink({ href, children }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      className="
        relative w-fit
        py-1
        text-sm
        text-[#746052]
        transition-colors
        hover:text-[#3D2A1E]
      "
    >
      {children}

      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.25 }}
        className="
          absolute bottom-0 left-0
          h-px w-full
          origin-left
          bg-[#6B4F3A]
        "
      />
    </motion.a>
  );
}

function SocialButton({ href, label, children }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.94 }}
      className="
        flex h-11 w-11 items-center justify-center
        rounded-full
        border border-[#6B4F3A]/15
        bg-[#E8D8C3]
        text-[#6B4F3A]
        transition-colors
        hover:bg-[#DDC7AA]
      "
    >
      {children}
    </motion.a>
  );
}