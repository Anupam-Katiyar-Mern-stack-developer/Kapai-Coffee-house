import { motion } from "motion/react";
import {
  FaArrowRight,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
  FaClock,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

export default function Visit() {
  const address =
    "117/H-1/62A, Near Candy Floss School, Model Town, Pandu Nagar, Kanpur, Uttar Pradesh 208005";

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section
      id="visit"
      className="
        relative overflow-hidden
        bg-[#F4EBDD]
        py-20 sm:py-24 lg:py-32
      "
    >
      {/* Ambient decoration */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[#D6B995]/25 blur-[150px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#C6A47D]/15 blur-[140px]" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
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
                Visit Kapai
              </span>
            </div>

            <h2
              className="
                mt-5
                max-w-3xl
                text-[clamp(2.8rem,6vw,5.8rem)]
                font-medium
                leading-[0.92]
                tracking-[-0.05em]
                text-[#3D2A1E]
              "
            >
              Your next coffee

              <span className="block text-[#7A5941]">
                is waiting.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p
              className="
                max-w-md
                text-sm
                leading-7
                text-[#746052]
                sm:text-base
              "
            >
              Drop in for a quick coffee, settle in for brunch, or stay a
              little longer with your favourite people.
            </p>

            <div className="mt-5 hidden items-center gap-3 sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#6B4F3A]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#8D7868]
                "
              >
                Model Town · Kanpur
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="
            mt-12
            grid gap-5
            lg:grid-cols-[0.85fr_1.45fr]
          "
        >
          {/* INFO CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
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
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              flex flex-col
              overflow-hidden

              rounded-[28px]
              border border-[#6B4F3A]/10
              bg-[#FFF8EF]/75

              p-5

              shadow-[0_20px_60px_rgba(91,63,43,0.08)]

              backdrop-blur-sm

              sm:p-7
              lg:p-8
            "
          >
            {/* Decorative K */}
            <div
              className="
                pointer-events-none
                absolute -right-5 -top-12

                text-[180px]
                font-semibold
                leading-none
                text-[#6B4F3A]/[0.035]
              "
            >
              K
            </div>

            {/* Card Header */}
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#6B4F3A]
                  "
                >
                  Coffee House & Bistro
                </p>

                <span
                  className="
                    rounded-full
                    border border-[#6B4F3A]/10
                    bg-[#E8D8C3]/60
                    px-3 py-1.5

                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#6B4F3A]
                  "
                >
                  Kanpur
                </span>
              </div>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-medium
                  tracking-[-0.04em]
                  text-[#3D2A1E]

                  sm:text-4xl
                "
              >
                Kapai
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-[#8D7868]
                "
              >
                Coffee, food and conversations — all under one roof.
              </p>
            </div>

            {/* Details */}
            <div className="relative mt-8">
              <InfoItem
                icon={<FaLocationDot />}
                label="Location"
              >
                <p className="text-sm leading-6 text-[#665244]">
                  {address}
                </p>
              </InfoItem>

              <InfoItem
                icon={<FaPhone />}
                label="Call Us"
              >
                <a
                  href="tel:+919839270027"
                  className="
                    text-sm
                    text-[#665244]
                    transition-colors
                    hover:text-[#3D2A1E]
                  "
                >
                  +91 98392 70027
                </a>
              </InfoItem>

              <InfoItem
                icon={<FaClock />}
                label="Opening Hours"
                last
              >
                <div>
                  <p className="text-sm font-medium text-[#3D2A1E]">
                    Open Daily
                  </p>

                  <p className="mt-1 text-xs text-[#927D6D]">
                    Approx. 10:00 AM – 11:45 PM
                  </p>
                </div>
              </InfoItem>
            </div>

            {/* CTA */}
            <div
              className="
                relative
                mt-auto
                grid gap-3
                pt-9

                sm:grid-cols-2
                lg:grid-cols-1
                xl:grid-cols-2
              "
            >
              <motion.a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                className="
                  flex
                  items-center
                  justify-between
                  gap-4

                  rounded-full
                  bg-[#6B4F3A]

                  px-5 py-4

                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#FFF8EF]

                  shadow-[0_12px_30px_rgba(107,79,58,0.18)]

                  transition-colors
                  hover:bg-[#533B2B]
                "
              >
                Get Directions

                <motion.span
                  variants={{
                    rest: {
                      x: 0,
                      rotate: 0,
                    },
                    hover: {
                      x: 4,
                      rotate: -45,
                    },
                  }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.a>

              <motion.a
                href="https://wa.me/919839270027"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3

                  rounded-full
                  border border-[#6B4F3A]/15
                  bg-[#E8D8C3]/65

                  px-5 py-4

                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#6B4F3A]

                  transition-colors
                  hover:bg-[#DDC7AA]
                "
              >
                <FaWhatsapp />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
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
              duration: 0.75,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              min-h-[430px]
              overflow-hidden

              rounded-[28px]
              border border-[#6B4F3A]/10
              bg-[#E8D8C3]

              shadow-[0_20px_60px_rgba(91,63,43,0.1)]

              sm:min-h-[500px]
              lg:min-h-[620px]
            "
          >
            <iframe
              title="Kapai Coffee House & Bistro location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                address
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="
                absolute inset-0
                h-full w-full

                contrast-[0.96]
                saturate-[0.78]
                sepia-[0.08]
              "
            />

            {/* Warm Map Tone */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-[#E8D8C3]/[0.07]
              "
            />

            {/* Top badge */}
            <div
              className="
                absolute left-4 top-4
                sm:left-6 sm:top-6
              "
            >
              <div
                className="
                  flex items-center gap-2
                  rounded-full

                  border border-[#6B4F3A]/10
                  bg-[#F4EBDD]/90

                  px-4 py-2

                  shadow-[0_8px_25px_rgba(70,45,28,0.1)]
                  backdrop-blur-xl
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#6B4F3A]" />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#6B4F3A]
                  "
                >
                  Find Kapai
                </span>
              </div>
            </div>

            {/* Floating Address Card */}
            <div
              className="
                absolute
                bottom-4 left-4 right-4

                rounded-[20px]
                border border-white/50
                bg-[#F4EBDD]/92

                p-5

                shadow-[0_15px_45px_rgba(70,45,28,0.14)]
                backdrop-blur-xl

                sm:bottom-6
                sm:left-6
                sm:right-auto
                sm:max-w-[360px]
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex h-10 w-10
                    shrink-0
                    items-center justify-center

                    rounded-full
                    bg-[#6B4F3A]

                    text-sm
                    text-[#FFF8EF]
                  "
                >
                  <FaLocationDot />
                </div>

                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#927D6D]
                    "
                  >
                    Kapai Coffee House & Bistro
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-medium
                      leading-6
                      text-[#3D2A1E]
                    "
                  >
                    Model Town / Pandu Nagar, Kanpur
                  </p>
                </div>
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-4
                  inline-flex
                  items-center gap-2

                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#6B4F3A]

                  transition-colors
                  hover:text-[#3D2A1E]
                "
              >
                Open in Maps
                <FaArrowUpRightFromSquare />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, children, last = false }) {
  return (
    <div
      className={`
        flex items-start gap-4
        py-5

        ${last ? "" : "border-b border-[#6B4F3A]/10"}
      `}
    >
      <motion.div
        whileHover={{
          scale: 1.06,
          y: -2,
        }}
        className="
          flex h-11 w-11
          shrink-0
          items-center justify-center

          rounded-full
          border border-[#6B4F3A]/10
          bg-[#E8D8C3]/70

          text-sm
          text-[#6B4F3A]

          transition-colors
          hover:bg-[#6B4F3A]
          hover:text-[#FFF8EF]
        "
      >
        {icon}
      </motion.div>

      <div className="min-w-0 pt-0.5">
        <p
          className="
            mb-1
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[#9A8472]
          "
        >
          {label}
        </p>

        {children}
      </div>
    </div>
  );
}