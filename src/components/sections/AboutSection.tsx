"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const AboutSection = () => {
  const points = [
    "25+ Years of Trust & Excellence",
    "Human-Centered Premium Care",
    "State-of-the-art Technology",
    "Internationally Trained Specialists"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0">
               <img
                 src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                 alt="Doctor caring for patient"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-brand-blue/10"></div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 lg:right-10 bg-white rounded-2xl shadow-xl p-6 border border-slate-50 flex items-center gap-4">
              <span className="text-5xl font-bold text-brand-blue">25+</span>
              <span className="text-sm font-medium text-slate-500 leading-tight">Years of<br/>Excellence</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Redefining <span className="text-brand-blue">Dental Comfort</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Toothsuite, we believe that visiting the dentist shouldn't be daunting.
              We've created an environment that feels less like a clinic and more like a luxury lounge,
              where your comfort is our highest priority.
            </p>

            <div className="space-y-4 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-green w-6 h-6 shrink-0" />
                  <span className="text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-100">
               <p className="text-brand-blue font-medium italic text-lg border-l-4 border-brand-blue pl-4">
                 "Our mission is to bring world-class, emotionally polished healthcare to Kerala."
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
