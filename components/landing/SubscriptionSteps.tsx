/* eslint-disable react/no-unescaped-entities */
"use client";

import { SUBSCRIPTION_STEPS } from "@/data/constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function SubscriptionSteps() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
          how it works
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Laundry made{" "}
          <span className="bg-linear-to-r bg-clip-text to-secondary from-primary via-indigo-600 text-transparent">
            simple & convenient
          </span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Choose your plan, tell us where you are, and we'll handle the rest. No
          payment is required online.
        </p>{" "}
      </motion.div>
      <div className="relative">
        {/* Connecting Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-primary/20 via-primary/30 to-primary/50 transform -translate-y-1/2" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {SUBSCRIPTION_STEPS.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 text-center group"
            >
              {/* Connector line (desktop)
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-indigo-200" />
              )} */}
              <div className="flex flex-col gap-1 p-2 text-white justify-center items-center rounded-full bg-primary h-20 w-20 mx-auto">
                <div className="text-sm font-bold">{step.number}</div>
                <step.icon size={45} />
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
