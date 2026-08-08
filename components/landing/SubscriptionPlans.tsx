"use client";

import Button from "@/components/global/Button";
import JoinPlanModal from "@/components/landing/JoinPlanModal";
import { useModal } from "@/context/modal.state";
import { PLANS } from "@/data/constants";
import { formatPrice } from "@/utils/format.utils";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function SubscriptionPlans() {
  const modal = useModal();
  const joinPlan = (plan: (typeof PLANS)[0]) => {
    modal.open({
      content: <JoinPlanModal plan={plan} />,
      title: `Subscribe ${plan.name} Plan`,
      size: "w-sm sm:w-xl",
      goBack: modal.close,
    });
  };
  return (
    <div id="subscription" className="space-y-12">
      <div className="text-center">
        <h3 className="text-2xl sm:text-4xl font-bold">
          Our Subscription Plans
        </h3>
        <div className="text-secondary/70 text-sm sm:text-base">
          choose you the plan that best fits your needs from our available
          plans.
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {PLANS.map((plan, index) => (
          <motion.div
            key={plan.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className={`cursor-pointer flex flex-col backdrop-blur-sm p-6 rounded-3xl shadow-2xs hover:shadow-lg relative ${
              plan.popular ? "bg-primary/10" : "bg-white/70"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-4 py-1 rounded-full flex items-center gap-1">
                <Sparkles fill="white" size={13} />
                <span>most popular</span>
              </span>
            )}
            <div className="text-center w-fit mx-auto">
              <h3 className="text-3xl font-bold mt-3 text-gray-800">
                {plan.name} Plan
              </h3>
              <div className="flex items-end justify-center">
                <span className={`text-2xl font-bold text-${plan.color}-600`}>
                  {formatPrice(plan.price)}
                </span>
                <div className="text-2xl font-bold">/</div>
                <div className="">monthly</div>
              </div>
            </div>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-gray-600 w-fit mx-auto border-t border-primary/40 pt-5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle2 size={16} /> <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              label={`Choose Plan`}
              onClick={() => joinPlan(plan)}
              className={`${
                plan.popular
                  ? "bg-linear-to-r from-secondary to-primary text-white"
                  : "border border-secondary/50"
              } mt-4`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
