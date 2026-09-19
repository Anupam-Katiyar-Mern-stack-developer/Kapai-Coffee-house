import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowDown,
} from "react-icons/fa6";

const slides = [
  {
    id: 1,
    image: "/images/hero/hero_coffee.webp",
    eyebrow: "Kapai Coffee House & Bistro",
    title: "Coffee, Crafted\nWith Character.",
    description:
      "Bold brews, slow mornings and conversations that deserve a little more time.",
    button: "Explore Coffee",
    link: "#menu",
  },
  {
    id: 2,
    image: "/images/hero/hero_ambience.webp",
    eyebrow: "Made for slow moments",
    title: "More Than\nJust Coffee.",
    description:
      "From handcrafted brews to comforting plates, every visit has its own flavour.",
    button: "Discover Menu",
    link: "#menu",
  },
  {
    id: 3,
    image: "/images/hero/hero_food.webp",
    eyebrow: "Your neighbourhood coffee space",
    title: "Come For Coffee.\nStay For The Vibe.",
    description:
      "A warm little escape in Kanpur for coffee, food and everything in between.",
    button: "Visit Kapai",
    link: "#visit",
  },
];

const SLIDE_DURATION = 9000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);

    if (paused) return;

    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    startTimer();

    return () => clearInterval(timerRef.current);
  }, [paused, activeSlide]);

  useEffect(() => {
    const handleVisibility = () => {
      setPaused(document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const changeSlide = (index) => {
    setImageLoaded(false);
    setActiveSlide(index);
  };

  const nextSlide = () => {
    changeSlide((activeSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide((activeSlide - 1 + slides.length) % slides.length);
  };

  const slide = slides[activeSlide];

  return (
    <section
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#F4EBDD]
      "
    >
      {/* Background */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[#F4EBDD]" />

          <motion.img
            src={slide.image}
            alt={slide.eyebrow}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              console.error("Hero image failed:", slide.image);
              e.currentTarget.src =
                "/images/hero/hero_coffee.webp";
            }}
            initial={{
              opacity: 0,
              scale: 1.04,
            }}
            animate={{
              opacity: imageLoaded ? 1 : 0,
              scale: 1,
            }}
            transition={{
              opacity: {
                duration: 0.8,
              },
              scale: {
                duration: 9,
                ease: "linear",
              },
            }}
            className="
              absolute inset-0
              h-full w-full
              object-cover
              object-center
            "
          />

          {/* Light Premium Overlay */}
          <div className="absolute inset-0 bg-[#F4EBDD]/2" />

          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-[#F4EBDD]/95
              via-[#F4EBDD]/65
              to-[#F4EBDD]/10
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#E8D8C3]/70
              via-transparent
              to-[#F4EBDD]/25
            "
          />
        </motion.div>
      </AnimatePresence>

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute left-[10%] top-[30%]
          z-[1]
          h-[320px] w-[320px]
          rounded-full
          bg-[#D6B995]/20
          blur-[120px]
        "
      />

      {/* Content */}
      <div
        className="
          relative z-10
          mx-auto
          flex
          min-h-[100svh]
          max-w-[1400px]
          items-end
          px-4
          pb-28
          pt-28

          sm:px-6
          sm:pb-32

          md:items-center
          md:pb-20
          md:pt-36

          lg:px-8
        "
      >
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-4xl"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.6,
                }}
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#6B4F3A]" />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#6B4F3A]

                    sm:text-[10px]
                    sm:tracking-[0.28em]
                  "
                >
                  {slide.eyebrow}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.12,
                  duration: 0.75,
                }}
                className="
                  whitespace-pre-line
                  text-[clamp(3rem,8vw,7.3rem)]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.055em]
                  text-[#3D2A1E]
                "
              >
                {slide.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.28,
                  duration: 0.65,
                }}
                className="
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#746052]

                  sm:text-base
                "
              >
                {slide.description}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
                className="
                  mt-7
                  flex flex-wrap
                  items-center
                  gap-4
                "
              >
                <motion.a
                  href={slide.link}
                  whileHover="hover"
                  whileTap={{ scale: 0.97 }}
                  className="
                    flex items-center gap-4
                    rounded-full
                    bg-[#6B4F3A]
                    px-5 py-3.5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#FFF8EF]

                    shadow-[0_10px_30px_rgba(107,79,58,0.16)]

                    transition-colors
                    hover:bg-[#533B2B]

                    sm:px-6
                    sm:py-4
                  "
                >
                  {slide.button}

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

                <a
                  href="#about"
                  className="
                    hidden
                    items-center
                    gap-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#746052]

                    transition-colors
                    hover:text-[#3D2A1E]

                    sm:flex
                  "
                >
                  Discover Kapai
                  <FaArrowDown />
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Controls */}
      <div
        className="
          absolute
          bottom-5 left-0
          z-20
          w-full

          sm:bottom-7
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            items-center
            justify-between
            gap-4
            px-4

            sm:px-6
            lg:px-8
          "
        >
          {/* Progress */}
          <div className="flex items-center gap-3">
            {slides.map((item, index) => {
              const active = activeSlide === index;

              return (
                <button
                  key={item.id}
                  onClick={() => changeSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="relative flex h-8 items-center"
                >
                  <span
                    className={`
                      relative block
                      h-[2px]
                      overflow-hidden
                      rounded-full
                      bg-[#6B4F3A]/20
                      transition-all duration-500

                      ${
                        active
                          ? "w-12 sm:w-16"
                          : "w-5 sm:w-6"
                      }
                    `}
                  >
                    {active && (
                      <motion.span
                        key={`progress-${activeSlide}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: SLIDE_DURATION / 1000,
                          ease: "linear",
                        }}
                        className="
                          absolute inset-0
                          origin-left
                          bg-[#6B4F3A]
                        "
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Counter */}
          <div
            className="
              hidden
              items-center
              gap-3
              text-[10px]
              tracking-[0.2em]
              text-[#927D6D]

              md:flex
            "
          >
            <span className="font-semibold text-[#6B4F3A]">
              0{activeSlide + 1}
            </span>

            <span className="h-px w-10 bg-[#6B4F3A]/20" />

            <span>0{slides.length}</span>
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <ControlButton
              onClick={prevSlide}
              label="Previous slide"
            >
              <FaArrowLeft />
            </ControlButton>

            <ControlButton
              onClick={nextSlide}
              label="Next slide"
            >
              <FaArrowRight />
            </ControlButton>
          </div>
        </div>
      </div>

      {/* Desktop side text */}
      <div
        className="
          absolute
          right-7
          top-1/2
          z-20
          hidden
          -translate-y-1/2
          rotate-90

          xl:block
        "
      >
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-[#6B4F3A]/45
          "
        >
          Coffee · Food · Conversations
        </p>
      </div>
    </section>
  );
}

function ControlButton({ children, onClick, label }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      whileHover={{
        scale: 1.06,
      }}
      whileTap={{ scale: 0.9 }}
      className="
        flex h-10 w-10
        items-center
        justify-center
        rounded-full

        border border-[#6B4F3A]/15
        bg-[#F4EBDD]/80

        text-xs
        text-[#6B4F3A]

        shadow-[0_8px_25px_rgba(80,55,38,0.08)]
        backdrop-blur-xl

        transition-colors

        hover:border-[#6B4F3A]/30
        hover:bg-[#E8D8C3]

        sm:h-11
        sm:w-11
      "
    >
      {children}
    </motion.button>
  );
}