"use client";

import { motion } from "framer-motion";
import Imag from "../../public/assets/dev.png";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 px-6 md:px-20 py-16"
    >

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl mb-6 md:mb-0 md:mr-12 flex-shrink-0"
      >
        <img
          src={Imag}
          alt="Carleone"
          className="w-full h-full object-cover"
        />
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center md:text-left font-mono"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-200 mb-4">
          Olá, eu sou Carlleon S.
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-4 animate-pulse">
          Criando experiências digitais do futuro
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mb-6">
          Transformo ideias em interfaces modernas e interativas, com foco em <span className="text-indigo-300 font-semibold">tecnologia</span>, <span className="text-indigo-300 font-semibold">inovação</span> e <span className="text-indigo-300 font-semibold">design responsivo</span>.
        </p>

        <p className="text-gray-400 text-md md:text-lg">
          Front-End Developer em evolução rumo ao <span className="text-indigo-300 font-semibold">Full-Stack</span>.
        </p>
      </motion.div>
    </section>
  );
}
