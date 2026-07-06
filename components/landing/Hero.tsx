"use client";

import Button from "@/components/global/Button";
import { motion } from "framer-motion";
import { ArrowRight, CalendarClock } from "lucide-react";
import { useEffect, useState } from "react";

const STATS = [
  { label: "Happy customers", value: "20k" },
  { label: "Support", value: "24/7" },
  { label: "Customer rating", value: "⭐4.7/5" },
];

export default function Hero() {
  const [animatedTextIndex, setAnimatedTextIndex] = useState(0);

  // const animatedTexts = [
  //   "Your time matter",
  //   "No worries",
  //   "No stress",
  //   "Fast delivery",
  // ];
  const animatedTexts = [
    {
      text1: "Your time matter",
      text2: "do something else",
    },
    {
      text1: "No stress",
      text2: "clean clothes",
    },
    {
      text1: "No worries",
      text2: "fresh laundry",
    },
    {
      text1: "Fast delivery",
      text2: "fresh laundry",
    },
  ];
  // Change animated text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedTextIndex(
        (prevIndex) => (prevIndex + 1) % animatedTexts.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="space-y-6"
      >
        <div className="inline-block bg-indigo-200/60 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm">
          ✦ monthly subscription
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <div className="animate-fade-in-down" key={animatedTextIndex}>
            {animatedTexts[animatedTextIndex].text1},
          </div>
          <span className="text-indigo-600">fresh laundry.</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-md">
          Subscribe & enjoy unlimited pickups, premium dry cleaning, and free
          delivery. No hidden fees — cancel anytime.
        </p>
        <div className="grid sm:grid-cols-2 gap-2 pt-2">
          <Button
            type="link"
            link="#subscription"
            label="Get Started"
            className="bg-secondary! text-white sm:text-lg"
            rightIcon={<ArrowRight size={20} />}
          />
          <Button
            label="Schedule pickup"
            type="link"
            link="#pickup"
            icon={<CalendarClock size={20} />}
            className="sm:text-lg"
          />
        </div>
        <div className="flex justify-center sm:justify-between gap-10">
          {STATS.map((item, i) => (
            <div className="" key={i}>
              <div className="text-xl font-extrabold text-indigo-600">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative h-100 sm:h-full"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 w-72 h-72 md:w-80 md:h-80 rounded-full bg-indigo-200/30 backdrop-blur-sm flex items-center justify-center border-4 border-indigo-100/50 shadow-xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-80 h-80 md:w-90 md:h-90 rounded-full bg-indigo-600/30 backdrop-blur-sm flex items-center justify-center border-4 border-indigo-100/50 shadow-xl"
        ></motion.div>
      </motion.div>
    </section>
  );
}
