"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

type ContateProps = {
  show: boolean;
};

export default function Contate({ show }: ContateProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-10 right-10 bg-white p-4 rounded-xl shadow-2xl flex items-center space-x-3 z-50 cursor-pointer hover:scale-105 transition-transform font-mono"
        >
          <FaLinkedin className="text-blue-700 w-6 h-6" />
          <a
            href="https://www.linkedin.com/in/carleone-santos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 font-semibold hover:text-blue-700 transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
