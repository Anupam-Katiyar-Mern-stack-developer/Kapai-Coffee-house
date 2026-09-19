import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaExpand, FaXmark } from "react-icons/fa6";

const galleryImages = [
  {
    src: "/images/gallery/gallery_coffee.webp",
    title: "Coffee Moments",
  },
  {
    src: "/images/gallery/gallery_interior.webp",
    title: "The Kapai Space",
  },
  {
    src: "/images/gallery/gallery_slow_brew.webp",
    title: "Slow Brews",
  },
  {
    src: "/images/gallery/gallery_food.webp",
    title: "Good Food",
  },
  {
    src: "/images/gallery/gallery_evening.webp",
    title: "Evening Vibes",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-[#F4EBDD] py-20 sm:py-24 lg:py-32"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -left-28 top-1/3 h-[350px] w-[350px] rounded-full bg-[#D6B995]/25 blur-[130px]" />

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="grid gap-7 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#6B4F3A]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#6B4F3A]">
                  Inside Kapai
                </span>
              </div>

              <h2 className="mt-5 text-[clamp(2.8rem,6vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.05em] text-[#3D2A1E]">
                A space worth
                <span className="block text-[#7A5941]">
                  staying awhile.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#746052] sm:text-base lg:justify-self-end">
              Coffee, food and conversations — a glimpse into the everyday
              moments that make Kapai feel like Kapai.
            </p>
          </div>

          {/* Gallery Grid */}
          <div
            className="
              mt-12
              grid
              auto-rows-[240px]
              grid-cols-1
              gap-3
              sm:grid-cols-2
              md:auto-rows-[220px]
              lg:grid-cols-4
              lg:auto-rows-[250px]
            "
          >
            {galleryImages.map((image, index) => (
              <GalleryCard
                key={image.src}
                image={image}
                index={index}
                onOpen={() => setSelectedImage(image)}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between border-t border-[#6B4F3A]/10 pt-6">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[#927D6D]">
              Coffee · Food · People · Kapai
            </p>

            <a
              href="https://instagram.com/kapaiindia"
              target="_blank"
              rel="noreferrer"
              className="
                relative
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#6B4F3A]
                transition-colors
                hover:text-[#3D2A1E]
              "
            >
              @kapaiindia
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="
              fixed inset-0 z-[200]
              flex items-center justify-center
              bg-[#2D2018]/95
              p-4
              backdrop-blur-xl
              sm:p-8
            "
          >
            <motion.button
              whileHover={{
                rotate: 90,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="
                absolute right-5 top-5 z-20
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-white/15
                bg-[#F4EBDD]
                text-[#3D2A1E]
                shadow-lg
              "
            >
              <FaXmark />
            </motion.button>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-h-[85vh]
                max-w-6xl
                overflow-hidden
                rounded-[24px]
                bg-[#F4EBDD]
                shadow-[0_30px_100px_rgba(0,0,0,0.35)]
              "
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[85vh] w-full object-contain"
              />

              <div
                className="
                  absolute bottom-0 left-0 right-0
                  bg-gradient-to-t
                  from-[#3D2A1E]/90
                  via-[#3D2A1E]/45
                  to-transparent
                  p-6
                "
              >
                <p className="text-lg font-medium text-[#FFF8EF]">
                  {selectedImage.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function GalleryCard({ image, index, onOpen }) {
  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 30,
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
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -5 }}
      onClick={onOpen}
      className={`
        group
        relative
        overflow-hidden
        rounded-[22px]
        border border-[#6B4F3A]/10
        bg-[#E8D8C3]
        text-left
        shadow-[0_10px_30px_rgba(91,63,43,0.06)]
        transition-shadow
        hover:shadow-[0_18px_45px_rgba(91,63,43,0.12)]
        ${image.className || ""}
      `}
    >
      <motion.img
        src={image.src}
        alt={image.title}
        whileHover={{
          scale: 1.06,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[#3D2A1E]/75
          via-[#3D2A1E]/5
          to-transparent
          transition-opacity
          duration-300

          md:opacity-65
          md:group-hover:opacity-90
        "
      />

      {/* Index */}
      <span
        className="
          absolute left-4 top-4
          rounded-full
          bg-[#F4EBDD]/80
          px-2.5 py-1
          text-[8px]
          font-semibold
          tracking-[0.2em]
          text-[#6B4F3A]
          backdrop-blur-md
        "
      >
        0{index + 1}
      </span>

      {/* Expand */}
      <div
        className="
          absolute right-4 top-4
          flex h-9 w-9
          items-center justify-center
          rounded-full
          border border-white/20
          bg-[#F4EBDD]/85
          text-xs
          text-[#6B4F3A]
          backdrop-blur-lg

          opacity-100
          transition-all
          duration-300

          md:translate-y-2
          md:opacity-0
          md:group-hover:translate-y-0
          md:group-hover:opacity-100
        "
      >
        <FaExpand />
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 p-5 sm:p-6">
        <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#E8D8C3]">
          Kapai
        </p>

        <h3 className="mt-1 text-lg font-medium text-[#FFF8EF] sm:text-xl">
          {image.title}
        </h3>
      </div>

      {/* Bottom Hover Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35 }}
        className="
          absolute bottom-0 left-0
          h-[3px] w-full
          origin-left
          bg-[#D6B995]
        "
      />
    </motion.button>
  );
}