"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Contate from "./Contate";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContato, setShowContato] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { id: 1, label: "Home", target: "home" },
    { id: 2, label: "Certificados", target: "certificados" },
    { id: 3, label: "Projetos", target: "projetos" },
    { id: 4, label: "Contato", target: "contato" },
  ];


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    if (showContato) {
      const timer = setTimeout(() => setShowContato(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showContato]);

  return (
    <>
      <header className="bg-gradient-to-r from-indigo-500 via-slate-900 to-indigo-900 text-white fixed w-full z-50 shadow-lg border-indigo-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div
            className="text-xl font-extrabold tracking-widest text-indigo-200 cursor-pointer font-mono"
            onClick={() => scrollToSection("home")}
          >
            'C@r.S'
          </div>

          <nav className="hidden md:flex items-center space-x-12 tracking-wide">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  link.label === "Contato"
                    ? setShowContato(!showContato)
                    : scrollToSection(link.target);
                }}
                className={`relative text-white font-mono text-lg transition-colors hover:text-indigo-200 pb-1 ${activeSection === link.target
                  ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-indigo-400"
                  : ""
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-800 p-4 space-y-3 font-mono"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  link.label === "Contato"
                    ? setShowContato(!showContato)
                    : scrollToSection(link.target);
                  setIsOpen(false);
                }}
                className={`block text-white hover:text-indigo-300 transition-colors w-full text-left ${activeSection === link.target ? "border-b-2 border-indigo-400" : ""
                  }`}
              >
                {link.label}
              </button>
            ))}
          </motion.nav>
        )}
      </header>

      {/* ✅ Tipando a prop 'show' como boolean */}
      <Contate show={showContato} />
    </>
  );
}
