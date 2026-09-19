import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold"
      >
        KAPAI
      </motion.h1>
    </section>
  );
}