"use client";

import { motion } from "framer-motion";
import { certificados } from "../data/certificadosData.ts";

export default function Certificados() {
  return (
    <section
      id="certificados"
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white py-12 px-4 md:px-12"
    >
      <h1 className="text-1xl md:text-1xl font-mono font-bold text-center mb-6">
        Certificados
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
        {certificados.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 0 15px rgba(99, 102, 241, 0.7), 0 0 30px rgba(99, 102, 241, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-slate-800 rounded-xl shadow-md transition-all flex flex-col items-center justify-start p-3 cursor-pointer hover:border hover:border-indigo-400"
          >
            <img
              src={cert.imagem}
              alt={cert.titulo}
              className="w-full h-24 md:h-28 object-contain mb-2 rounded"
            />
            <h3 className="text-sm md:text-base font-mono font-semibold text-center mb-1 group-hover:text-indigo-400 transition-colors">
              {cert.titulo}
            </h3>
            <p className="text-center text-gray-300 text-xs md:text-sm">{cert.instituicao}</p>
            <p className="text-center text-gray-400 text-xs md:text-sm mt-0.5">{cert.ano}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
