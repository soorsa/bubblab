/* eslint-disable react/no-unescaped-entities */
// components/SuccessModal.tsx
"use client";

import Button from "@/components/global/Button";
import { useModal } from "@/context/modal.state";
import confetti from "canvas-confetti";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

interface SuccessModalProps {
  message?: string;
  action?: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  message = "Your laundry subscription has been successfully activated.",
  action,
}) => {
  const modal = useModal();
  // Trigger confetti when modal opens
  useEffect(() => {
    // Small delay to let the modal appear before confetti
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#4F46E5", "#7C3AED", "#EC4899", "#F59E0B", "#10B981"],
      });

      // Second burst after a moment
      setTimeout(() => {
        confetti({
          particleCount: 50,
          spread: 100,
          origin: { y: 0.5 },
          colors: ["#3B82F6", "#8B5CF6", "#F472B6"],
        });
      }, 300);
    }, 300);
  }, []);

  return (
    <div
      className={`
          relative
        `}
    >
      {/* Success Animation */}
      <div className="absolute inset-0  z-0 flex justify-center items-center">
        <div className="flex items-center text-emerald-500/30">
          <CheckCircle2 className="w-60 h-60" />
          <div className="">
            <CheckCircle2 className="w-16 h-16" />
            <CheckCircle2 className="w-35 h-35" />
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-gray-900 mt-2">
        Success
      </h2>

      {/* Message */}
      <p className="text-center text-gray-600 mt-2 leading-relaxed">
        {message}
      </p>

      {/* Next Steps */}
      <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-blue-100">
        <h4 className="text-sm font-semibold text-blue-900 flex items-center gap-2">
          <span className="text-blue-500">✨</span>
          What's next?
        </h4>
        <ul className="mt-2 space-y-1.5 text-sm text-blue-800">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            We'll call you to confirm your subscription request shortly
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            Your first pickup will be scheduled
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            You can start enjoying <b className="font-bold">bubblab</b>
          </li>
        </ul>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 relative z-40">
        <Button label="Close" className="bg-gray-200!" onClick={modal.close} />
        <div className="col-span-2">
          <Button
            onClick={action}
            label="Book on WhatsApp"
            className="bg-linear-to-r from-green-500 to-secondary text-white"
            icon={
              <div className="relative h-5 w-5">
                <Image src={`/icons/whatsapp-app.svg`} alt="" fill />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
