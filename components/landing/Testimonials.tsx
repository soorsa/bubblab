/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    avatar: "👩‍💼",
    rating: 5,
    text: "Bubblab has been a game-changer for my busy schedule. The subscription plan means I never have to think about laundry — it just happens. The quality is outstanding!",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    avatar: "👨‍💻",
    rating: 5,
    text: "I was skeptical about a laundry subscription, but Bubblab proved me wrong. The pickup is always on time, and my clothes come back perfectly pressed. Highly recommend!",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Fashion Designer",
    avatar: "👩‍🎨",
    rating: 5,
    text: "As someone who works with delicate fabrics, I trust Bubblab with my most expensive pieces. Their dry cleaning is meticulous and eco-friendly. Absolutely love them!",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "David Park",
    role: "Restaurant Owner",
    avatar: "👨‍🍳",
    rating: 4,
    text: "We use Bubblab for all our linen and uniforms. The bulk pickup option saves us so much time and effort. Customer service is always responsive and helpful.",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Full-time Mom",
    avatar: "👩‍👧‍👦",
    rating: 5,
    text: "With two kids, laundry was a nightmare. Now Bubblab handles everything. The monthly subscription is worth every penny. I actually have time for myself again!",
    date: "2 months ago",
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, testimonials.length));
  };

  const showLess = () => {
    setVisibleCount(3);
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;
  const hasLess = visibleCount > 3;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
          ⭐ real reviews
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What our <span className="text-yellow-600">customers</span> say
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Join thousands of happy customers who've reclaimed their time with
          Bubblab.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {visibleTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-xl">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold text-gray-800 text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-gray-400">{testimonial.role}</div>
              </div>
            </div>
            <div className="flex text-yellow-400 text-sm mb-2">
              {"⭐".repeat(testimonial.rating)}
              {"☆".repeat(5 - testimonial.rating)}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              "{testimonial.text}"
            </p>
            <div className="text-xs text-gray-400 mt-3">{testimonial.date}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show more/less buttons */}
      <div className="flex justify-center gap-4 mt-8">
        {hasMore && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={showMore}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md transition"
          >
            Show more reviews +
          </motion.button>
        )}
        {hasLess && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={showLess}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2.5 rounded-full text-sm font-semibold transition"
          >
            Show less
          </motion.button>
        )}
      </div>

      {/* Trust badge */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center items-center gap-6 mt-6 text-sm text-gray-400 flex-wrap"
      >
        <span className="flex items-center gap-1">⭐ 4.9/5 average</span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span className="flex items-center gap-1">🗣️ 2,347+ reviews</span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span className="flex items-center gap-1">🏆 Top rated 2026</span>
      </motion.div>
    </section>
  );
}
