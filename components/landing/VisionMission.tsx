"use client";

import { motion } from "framer-motion";
import { Eye, Globe2, Handshake, Heart, Rocket, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
          our purpose
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Vision & <span className="text-indigo-600">Mission</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-linear-to-br from-indigo-50 to-white p-8 rounded-3xl shadow-2xs border border-indigo-100/50"
        >
          <div className="mb-4 text-secondary">
            <div className="text-3xl">
              <Eye size={40} />
            </div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To become the most trusted and convenient laundry service in every
            neighborhood, redefining how people experience freshness — making
            laundry effortless, sustainable, and accessible to everyone.
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
              🌱 sustainable
            </span>
            <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
              🏡 local
            </span>
            <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
              ⚡ effortless
            </span>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-linear-to-br from-purple-50 to-white p-8 rounded-3xl shadow-2xs border border-purple-100/50"
        >
          <div className="text-indigo-600 mb-4">
            <div className="">
              <Target size={40} />
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To deliver exceptional laundry care through smart subscription
            plans, eco-friendly practices, and a seamless pickup-delivery
            experience — giving our customers more time for what truly matters.
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
              🧺 quality care
            </span>
            <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
              ♻️ eco-friendly
            </span>
            <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
              ⏱️ time-saving
            </span>
          </div>
        </motion.div>
      </div>

      {/* Core values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: Heart, label: "Customer first" },
          { icon: Globe2, label: "Sustainability" },
          { icon: Rocket, label: "Innovation" },
          { icon: Handshake, label: "Trust & transparency" },
        ].map((value) => (
          <div
            key={value.label}
            className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-100/50"
          >
            <value.icon />
            <div className="text-sm font-medium text-gray-700 mt-1">
              {value.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
