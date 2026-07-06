"use client";

import { FEATURES } from "@/data/constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Features() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-y divide-gray-200 bg-indigo-50/40 p-6 rounded-3xl backdrop-blur-sm border border-indigo-100/50"
    >
      {FEATURES.map((f) => (
        <motion.div
          key={f.label}
          variants={itemVariants}
          className="flex flex-col items-center p-2"
        >
          <span className="text-2xl">
            <f.icon />
          </span>
          <span className="font-semibold text-gray-700">{f.label}</span>
          <span className="text-xs text-gray-500">{f.desc}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
