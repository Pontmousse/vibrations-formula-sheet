"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-york-red/15 bg-gradient-to-br from-white via-white to-york-red/5 px-4 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-york-red/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-navy/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-york-red via-york-red-light to-york-red" />

      <div className="relative max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-york-red/20 bg-york-red/10 px-3 py-1 text-xs font-semibold text-york-red">
          <Sparkles className="h-3.5 w-3.5" />
          MECH 4502 · Vibrations
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-2xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-tight"
        >
          MECH 4502 Vibrations Formula Navigator
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          Explore formulas by topic, concept, assumptions, and problem type.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="mt-6 flex items-center gap-2 text-sm text-slate-500"
        >
          <BookOpen className="h-4 w-4 text-york-red" />
          Navigate by chapter, concept, and problem type.
        </motion.div>
      </div>
    </section>
  );
}
