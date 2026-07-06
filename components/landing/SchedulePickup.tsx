/* eslint-disable react/no-unescaped-entities */
"use client";

import Button from "@/components/global/Button";
import PickupModal from "@/components/landing/PickupModal";
import { useModal } from "@/context/modal.state";
import { motion } from "framer-motion";
import { CalendarRange, MessageCircle, PhoneCall } from "lucide-react";

export default function SchedulePickup() {
  const modal = useModal();
  return (
    <motion.div
      id="pickup"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ boxShadow: "0 0 30px rgba(99, 102, 241, 0.15)" }}
      className="bg-white/60 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-xl border border-white/70 transition-all"
    >
      <div className="sm:flex items-center space-y-6 sm:space-x-6">
        <div className="flex items-start sm:items-center gap-4 flex-1">
          <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
            <CalendarRange size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Schedule a pickup
            </h3>
            <p className="text-gray-500 text-sm">
              Choose a date & we'll come to you ◾ subscription or one-time.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
          <Button
            label="Schedule now"
            icon={<CalendarRange size={18} />}
            onClick={() => {
              modal.open({
                content: <PickupModal />,
                goBack: modal.close,
                title: "Schedule a pickup",
              });
            }}
            className="bg-secondary! text-white px-6 rounded-xl font-semibold sm:w-fit!"
          />
          <Button
            label="Schedule on WhatsApp"
            rightIcon={<MessageCircle size={18} />}
            className="bg-green-500! text-white sm:w-fit! px-6 rounded-xl"
          />
          <Button
            label="Call us"
            icon={<PhoneCall size={18} />}
            className="sm:w-fit! px-6 rounded-xl bg-indigo-600! text-white"
          />
        </div>
      </div>
    </motion.div>
  );
}
