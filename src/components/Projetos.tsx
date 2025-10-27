"use client";

import { motion } from "framer-motion";
import { projetos } from "../data/certificadosData.ts";

export default function Projetos() {
  // houv falha segura
  const fallbackImage =
    "https://tse1.mm.bing.net/th/id/OIP.626zeWjBGZqaRpgYOdduWgHaEK?pid=Api&P=0&h=180";

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-600 text-white py-16 px-6">
      <h3
        className="text-1xl md:text-1xl font-mono font-bold text-center mb-6"
        id="projetos"
      >
        Projetos
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {projetos.map((proj) => (
          <a
            key={proj.id}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-700 rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center justify-start p-4 cursor-pointer"
            >
              <img
                src={proj.img || fallbackImage}
                alt={proj.titulo}
                className="w-full h-36 md:h-44 lg:h-48 object-cover mb-3 rounded"
                onError={(e) => (e.currentTarget.src = fallbackImage)}
              />

              <h3 className="text-sm md:text-base font-mono font-semibold text-center mb-1 group-hover:text-indigo-400 transition-colors">
                {proj.titulo}
              </h3>
              <p className="text-center text-gray-300 text-xs md:text-sm">
                {proj.instituicao}
              </p>
              <p className="text-center text-gray-400 text-xs md:text-sm mt-1">
                {proj.linguagem}
              </p>
              <p className="text-center text-gray-400 text-xs md:text-sm mt-1">
                {proj.ano}
              </p>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}
