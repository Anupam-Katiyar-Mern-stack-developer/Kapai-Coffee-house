import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FaArrowRight,
  FaMugHot,
  FaPizzaSlice,
  FaUtensils,
} from "react-icons/fa6";
import restaurantData from "@/data/data.json";

const categories = ["Kapai Specials", "Slow Brews", "Pizza (10 inch)"];

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const menu = restaurantData[0]?.menu_sections || [];

  const section = menu.find(
    (item) => item.section === activeCategory
  );

  const items = section?.items?.slice(0, 6) || [];

  return (
    <section
      id="menu"
      className="
        relative overflow-hidden
        bg-[#F4EBDD]
        py-20 sm:py-24 lg:py-32
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute right-[-130px] top-[18%]
          h-[380px] w-[380px]
          rounded-full
          bg-[#D6B995]/25
          blur-[140px]
        "
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="
            flex flex-col gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
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
                From Our Menu
              </span>
            </div>

            <h2
              className="
                mt-5
                max-w-3xl
                text-[clamp(2.7rem,6vw,5.8rem)]
                font-medium
                leading-[0.93]
                tracking-[-0.05em]
                text-[#3D2A1E]
              "
            >
              Crafted for every

              <span className="block text-[#7A5941]">
                kind of craving.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-sm leading-7
              text-[#746052]
              sm:text-base
            "
          >
            From signature coffees and slow brews to handcrafted pizzas,
            discover some of Kapai&apos;s favourites.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="
            mt-10
            flex gap-2
            overflow-x-auto
            border-b border-[#6B4F3A]/10
            pb-4

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                whileTap={{ scale: 0.97 }}
                className={`
                  flex shrink-0
                  items-center gap-2
                  rounded-full
                  border
                  px-5 py-3

                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.13em]

                  transition-all duration-300

                  ${
                    active
                      ? `
                        border-[#6B4F3A]
                        bg-[#6B4F3A]
                        text-[#FFF8EF]
                        shadow-[0_8px_24px_rgba(107,79,58,0.16)]
                      `
                      : `
                        border-[#6B4F3A]/15
                        bg-[#FFF8EF]/55
                        text-[#746052]

                        hover:border-[#6B4F3A]/30
                        hover:bg-[#E8D8C3]
                        hover:text-[#3D2A1E]
                      `
                  }
                `}
              >
                <span className="text-[11px]">
                  {getCategoryIcon(category)}
                </span>

                {category}
              </motion.button>
            );
          })}
        </div>

        {/* Category Heading */}
        <div className="mt-9 flex items-center justify-between gap-5">
          <div>
            <p
              className="
                text-[9px]
                font-semibold uppercase
                tracking-[0.2em]
                text-[#9A8472]
              "
            >
              Currently Viewing
            </p>

            <h3
              className="
                mt-1
                text-xl
                font-medium
                tracking-[-0.025em]
                text-[#3D2A1E]

                sm:text-2xl
              "
            >
              {activeCategory}
            </h3>
          </div>

          <span
            className="
              hidden
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-[#9A8472]

              sm:block
            "
          >
            {items.length} selections
          </span>
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-6
              grid gap-3
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {items.map((item, index) => (
              <MenuCard
                key={`${item.name}-${index}`}
                item={item}
                index={index}
                category={activeCategory}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom */}
        <div
          className="
            mt-12
            flex flex-col gap-6

            border-t border-[#6B4F3A]/10
            pt-8

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-semibold uppercase
                tracking-[0.18em]
                text-[#9A8472]
              "
            >
              There&apos;s more
            </p>

            <p
              className="
                mt-2
                max-w-lg
                text-sm
                leading-6
                text-[#746052]
              "
            >
              Coffees, frappes, coolers, pasta, breads, shakes and more are
              waiting on the complete Kapai menu.
            </p>
          </div>

          {/* Prominent CTA */}
          <motion.a
            href="#full-menu"
            whileHover="hover"
            whileTap={{
              scale: 0.97,
            }}
            className="
              inline-flex
              w-fit
              shrink-0
              items-center gap-5
              rounded-full

              bg-[#6B4F3A]
              px-6 py-4

              text-[10px]
              font-semibold uppercase
              tracking-[0.15em]
              text-[#FFF8EF]

              shadow-[0_12px_30px_rgba(107,79,58,0.18)]

              transition-colors
              hover:bg-[#533B2B]

              sm:px-7
            "
          >
            View Full Menu

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
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item, index, category }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.055,
        duration: 0.45,
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[20px]

        border border-[#6B4F3A]/10
        bg-[#FFF8EF]/55

        px-5 py-5

        transition-all duration-300

        hover:border-[#6B4F3A]/20
        hover:bg-[#E8D8C3]/55
        hover:shadow-[0_12px_35px_rgba(91,63,43,0.07)]

        sm:px-6
        sm:py-6
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          {/* Strength */}
          {item.strength ? (
            <span
              className="
                inline-flex
                rounded-full
                border border-[#6B4F3A]/10
                bg-[#E8D8C3]/50
                px-2.5 py-1

                text-[7px]
                font-semibold uppercase
                tracking-[0.14em]
                text-[#6B4F3A]
              "
            >
              {item.strength}
            </span>
          ) : (
            <span
              className="
                text-[8px]
                font-semibold uppercase
                tracking-[0.16em]
                text-[#9A8472]
              "
            >
              Kapai Selection
            </span>
          )}

          {/* Name */}
          <h3
            className="
              mt-3
              text-lg
              font-medium
              leading-snug
              tracking-[-0.025em]
              text-[#3D2A1E]

              sm:text-xl
            "
          >
            {item.name}
          </h3>
        </div>

        {/* Category Icon */}
        <div
          className="
            flex h-10 w-10
            shrink-0
            items-center justify-center

            rounded-full
            border border-[#6B4F3A]/10
            bg-[#E8D8C3]/55

            text-sm
            text-[#6B4F3A]

            transition-all duration-300

            group-hover:border-[#6B4F3A]/20
            group-hover:bg-[#6B4F3A]
            group-hover:text-[#FFF8EF]
          "
        >
          {getCategoryIcon(category)}
        </div>
      </div>

      {/* Description */}
      <p
        className="
          mt-3
          line-clamp-2
          min-h-[48px]

          text-xs
          leading-6
          text-[#746052]

          sm:text-[13px]
        "
      >
        {item.description ||
          item.description_lines?.join(" • ") ||
          item.option_text ||
          "Thoughtfully prepared at Kapai."}
      </p>

      {/* Price Row */}
      <div
        className="
          mt-5
          flex items-end
          justify-between
          gap-4

          border-t border-[#6B4F3A]/10
          pt-4
        "
      >
        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.16em]
            text-[#A18B79]
          "
        >
          Made at Kapai
        </span>

        <span
          className="
            whitespace-nowrap
            text-lg
            font-semibold
            tracking-[-0.02em]
            text-[#6B4F3A]
          "
        >
          {formatPrice(item)}
        </span>
      </div>

      {/* Hover Bottom Line */}
      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          absolute bottom-0 left-0
          h-[2px] w-full
          origin-left
          bg-[#6B4F3A]
        "
      />
    </motion.article>
  );
}

function getCategoryIcon(category) {
  if (category === "Pizza (10 inch)") {
    return <FaPizzaSlice />;
  }

  if (category === "Slow Brews") {
    return <FaMugHot />;
  }

  return <FaUtensils />;
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

  if (item.raw_price) {
    return `₹${item.raw_price}`;
  }

  return "";
}