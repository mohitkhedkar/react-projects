import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="pb-16 flex flex-col items-center">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Tech Stack
      </motion.h2>

      {/* Icon Row */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-center gap-8"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="flex items-center justify-center"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="flex items-center justify-center"
        >
          <SiTailwindcss className="text-5xl text-blue-600" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
