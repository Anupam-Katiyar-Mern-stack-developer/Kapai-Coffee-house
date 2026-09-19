import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";
import restaurantData from "@/data/data.json";

const specialImages = {
  "Iced Coconut Vietnamese":
    "/images/specials/iced_coconut_vietnamese.webp",

  "Black Mojito":
    "/images/specials/black_mojito.webp",

  "Zesty Iced Mocha":
    "/images/specials/zesty_iced_mocha.webp",

  "Pomegranate Cold Brew":
    "/images/specials/pomegranate_cold_brew.webp",

  "Spiced Mocha":
    "/images/specials/spiced_mocha.webp",

  "Virgin Irish Coffee":
    "/images/specials/virgin_irish_coffee.webp",

  "Tiramisu Cortado":
    "/images/specials/tiramisu_cortado.webp",

  "Inverted Cappuccino":
    "/images/specials/inverted_cappuccino.webp",
};

export default function Specials() {
  const menu = restaurantData[0]?.menu_sections || [];

  const specials =
    menu.find(
      (section) => section.section === "Kapai Specials"
    )?.items || [];

  const featured = specials.slice(0, 4);

  return (
    <section
      id="specials"
      className="
        relative overflow-hidden
        bg-[#F4EBDD]
        py-20 sm:py-24 lg:py-32
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute -right-32 top-20
          h-[350px] w-[350px]
          rounded-full
          bg-[#D6B995]/25
          blur-[130px]
        "
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#6B4F3A]" />

              <span
                className="
                  text-[9px]
                  font-semibold uppercase
                  tracking-[0.25em]
                  text-[#6B4F3A]
                "
              >
                Kapai Signatures
              </span>
            </div>

            <h2
              className="
                mt-5
                text-[clamp(2.8rem,6vw,5.8rem)]
                font-medium
                leading-[0.92]
                tracking-[-0.05em]
                text-[#3D2A1E]
              "
            >
              Not your usual

              <span className="block text-[#7A5941]">
                coffee order.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-sm leading-7
              text-[#746052]
              sm:text-base
              lg:justify-self-end
            "
          >
            Signature creations with bold espresso, unexpected flavours and a
            little bit of Kapai personality.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-12
            grid gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {featured.map((item, index) => (
            <SpecialCard
              key={item.name}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-end">
          <motion.a
            href="#menu"
            initial="rest"
            whileHover="hover"
            className="
              relative
              inline-flex items-center gap-4
              pb-2
              text-[10px]
              font-semibold uppercase
              tracking-[0.16em]
              text-[#6B4F3A]
            "
          >
            Explore All Specials

            <motion.span
              variants={{
                rest: {
                  x: 0,
                  rotate: 0,
                },

                hover: {
                  x: 5,
                  rotate: -45,
                },
              }}
            >
              <FaArrowRight />
            </motion.span>

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
              }}
              className="
                absolute bottom-0 left-0
                h-px w-full
                origin-left
                bg-[#6B4F3A]
              "
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function SpecialCard({ item, index }) {
  const image =
    specialImages[item.name] ||
    "/images/specials/special_fallback.webp";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        overflow-hidden
        rounded-[26px]

        border border-[#6B4F3A]/10
        bg-[#FFF8EF]

        shadow-[0_10px_30px_rgba(91,63,43,0.06)]

        transition-shadow
        duration-300

        hover:shadow-[0_20px_55px_rgba(91,63,43,0.14)]
      "
    >
      {/* Product Image */}
      <div
        className="
          relative
          h-[180px]
          overflow-hidden

          sm:h-[200px]
          lg:h-[200px]
        "
      >
        <motion.img
          src={image}
          alt={item.name}
          loading="lazy"
          whileHover={{
            scale: 1.07,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            h-full w-full
            object-cover
          "
        />

        {/* Image overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#3D2A1E]/55
            via-transparent
            to-transparent
          "
        />

        {/* Number */}
        <span
          className="
            absolute right-4 top-4
            rounded-full
            bg-[#F4EBDD]/90
            px-3 py-1.5

            text-[8px]
            font-semibold
            tracking-[0.18em]
            text-[#6B4F3A]

            backdrop-blur-md
          "
        >
          0{index + 1}
        </span>

        {/* Strength */}
        {item.strength && (
          <span
            className="
              absolute bottom-4 left-4
              rounded-full

              border border-white/20
              bg-[#F4EBDD]/90

              px-3 py-1.5

              text-[8px]
              font-semibold uppercase
              tracking-[0.13em]
              text-[#6B4F3A]

              backdrop-blur-md
            "
          >
            {item.strength}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="relative p-5 sm:p-6">
        <p
          className="
            text-[8px]
            font-semibold uppercase
            tracking-[0.18em]
            text-[#9A8472]
          "
        >
          Kapai Original
        </p>

        <h3
          className="
            mt-3
            text-xl
            font-medium
            leading-tight
            tracking-[-0.03em]
            text-[#3D2A1E]

            sm:text-2xl
          "
        >
          {item.name}
        </h3>

        <p
          className="
            mt-3
            line-clamp-3
            min-h-[72px]
            text-xs
            leading-6
            text-[#746052]

            sm:text-sm
          "
        >
          {item.description}
        </p>

        {/* Price */}
        <div
          className="
            mt-2
            flex items-end justify-between
            border-t border-[#6B4F3A]/10
            pt-2
          "
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-[#b99b83]
              font-semibold
              text-center
            "
          >
            Signature Drink
          </span>

          <span
            className="
              text-xl
              font-semibold
              text-[#6B4F3A]
            
            "
          >
            {formatPrice(item)}
          </span>
        </div>

        {/* Hover line */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileHover={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            absolute bottom-0 left-0
            h-[3px] w-full
            origin-left
            bg-[#6B4F3A]
          "
        />
      </div>
    </motion.article>
  );
}

function formatPrice(item) {
  if (typeof item.price === "number") {
    return `₹${item.price}`;
  }

  if (item.price?.regular) {
    return `₹${item.price.regular} / ₹${item.price.large}`;
  }

  if (item.price_values?.length) {
    return item.price_values
      .map((price) => `₹${price}`)
      .join(" / ");
  }

  return item.raw_price ? `₹${item.raw_price}` : "";
}