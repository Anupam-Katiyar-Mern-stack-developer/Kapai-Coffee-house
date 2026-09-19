import { motion } from "motion/react";
import {
  FaArrowRight,
  FaMugHot,
  FaClock,
  FaUtensils,
} from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-[#F4EBDD]
        py-20 sm:py-24 lg:py-32
      "
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-[25%] h-[380px] w-[380px] rounded-full bg-[#D6B995]/25 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#C6A47D]/15 blur-[130px]" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid items-center
            gap-14

            lg:grid-cols-[1.02fr_0.98fr]
            lg:gap-20
          "
        >
          {/* LEFT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Small decorative label */}
            <div
              className="
                absolute
                -top-5 right-4
                z-20

                hidden
                rounded-full
                border border-[#6B4F3A]/10
                bg-[#FFF8EF]
                px-4 py-2

                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6B4F3A]

                shadow-[0_10px_30px_rgba(91,63,43,0.08)]

                sm:block
                lg:right-[-25px]
              "
            >
              Coffee · Food · Conversations
            </div>

            {/* Image */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]

                border border-[#6B4F3A]/10
                bg-[#E8D8C3]

                shadow-[0_30px_80px_rgba(91,63,43,0.12)]
              "
            >
              <motion.img
                src="/images/about/about_kapai.webp"
                alt="Kapai Coffee House & Bistro"
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  h-[450px]
                  w-full
                  object-cover

                  sm:h-[560px]
                  lg:h-[690px]
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#3D2A1E]/50
                  via-transparent
                  to-transparent
                "
              />

              {/* Image Number */}
              <div
                className="
                  absolute left-5 top-5
                  rounded-full
                  border border-white/20
                  bg-[#F4EBDD]/85
                  px-3 py-1.5

                  text-[8px]
                  font-semibold
                  tracking-[0.18em]
                  text-[#6B4F3A]

                  backdrop-blur-lg
                "
              >
                01 / KAPAI
              </div>
            </div>

            {/* Floating Coffee Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              className="
                absolute
                bottom-4 left-4 right-4

                rounded-[20px]
                border border-white/40
                bg-[#F4EBDD]/92
                p-5

                shadow-[0_16px_45px_rgba(63,42,29,0.16)]
                backdrop-blur-xl

                sm:bottom-7
                sm:left-7
                sm:right-auto
                sm:max-w-[300px]
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-[#6B4F3A]
                    text-sm
                    text-[#FFF8EF]
                  "
                >
                  <FaMugHot />
                </div>

                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold uppercase
                      tracking-[0.18em]
                      text-[#9A8472]
                    "
                  >
                    Our Coffee
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-[#3D2A1E]">
                    100% Arabica
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-4
                  text-xs
                  leading-6
                  text-[#746052]
                  sm:text-sm
                "
              >
                Thoughtfully selected beans, carefully brewed for balance,
                depth and flavour.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#6B4F3A]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#6B4F3A]
                "
              >
                The Kapai Story
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-6
                max-w-2xl

                text-[clamp(2.7rem,6vw,5.7rem)]
                font-medium
                leading-[0.93]
                tracking-[-0.055em]
                text-[#3D2A1E]
              "
            >
              Coffee made for

              <span className="block text-[#7A5941]">
                moments that stay.
              </span>
            </h2>

            {/* Decorative line */}
            <div className="mt-8 h-px w-full max-w-xl bg-[#6B4F3A]/10" />

            {/* Paragraphs */}
            <div
              className="
                mt-7
                max-w-xl
                space-y-4
                text-sm
                leading-7
                text-[#746052]

                sm:text-base
              "
            >
              <p>
                Kapai brings together thoughtfully brewed coffee, comforting
                food and a relaxed space where conversations can stretch a
                little longer.
              </p>

              <p>
                From slow brews and bold espresso to handcrafted iced coffees,
                every cup is built around flavour, balance and a genuine love
                for coffee.
              </p>
            </div>

            {/* Stats */}
            <div
              className="
                mt-9
                grid
                grid-cols-1
                gap-3

                sm:grid-cols-3
              "
            >
              <Stat
                icon={<FaMugHot />}
                value="100%"
                label="Arabica Beans"
              />

              <Stat
                icon={<FaClock />}
                value="18 Hr"
                label="Cold Brew"
              />

              <Stat
                icon={<FaUtensils />}
                value="All Day"
                label="Bistro Menu"
              />
            </div>

            {/* CTA Row */}
            <div
              className="
                mt-9
                flex flex-wrap
                items-center
                gap-6
              "
            >
              <motion.a
                href="#menu"
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                className="
                  inline-flex
                  items-center gap-4
                  rounded-full

                  bg-[#6B4F3A]
                  px-6 py-4

                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#FFF8EF]

                  shadow-[0_12px_30px_rgba(107,79,58,0.17)]

                  transition-colors
                  hover:bg-[#533B2B]
                "
              >
                Discover Our Menu

                <motion.span
                  variants={{
                    hover: {
                      x: 5,
                      rotate: -45,
                    },
                  }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.a>

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.17em]
                  text-[#9A8472]
                "
              >
                Crafted in Kanpur
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="
        group
        rounded-[20px]

        border border-[#6B4F3A]/10
        bg-[#FFF8EF]/55

        p-4

        shadow-[0_8px_25px_rgba(80,55,38,0.04)]

        transition-all duration-300

        hover:border-[#6B4F3A]/20
        hover:bg-[#E8D8C3]/70
        hover:shadow-[0_12px_30px_rgba(80,55,38,0.08)]

        sm:p-5
      "
    >
      <div
        className="
          flex h-9 w-9
          items-center justify-center

          rounded-full
          bg-[#E8D8C3]

          text-xs
          text-[#6B4F3A]

          transition-colors duration-300

          group-hover:bg-[#6B4F3A]
          group-hover:text-[#FFF8EF]
        "
      >
        {icon}
      </div>

      <p
        className="
          mt-5
          text-xl
          font-medium
          tracking-[-0.03em]
          text-[#3D2A1E]

          sm:text-2xl
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          text-[8px]
          uppercase
          tracking-[0.16em]
          text-[#8D7868]
        "
      >
        {label}
      </p>
    </motion.div>
  );
}