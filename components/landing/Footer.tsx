"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-sm text-gray-400 border-t border-indigo-100/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-2"
    >
      <div className="flex items-center gap-2">
        <span className="font-semibold text-indigo-500">bubblab</span>
        <span>·</span>
        <span>drycleaning & laundry</span>
      </div>
      <div className="flex gap-4">
        <span>© 2026 Bubblab</span>
        <span>|</span>
        <span className="hover:text-indigo-500 cursor-pointer">Terms</span>
        <span>|</span>
        <span className="hover:text-indigo-500 cursor-pointer">Privacy</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
