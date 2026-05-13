"use client";

import { motion } from "framer-motion";
import { Shield, Heart, Zap, Award } from "lucide-react";

export const WhyUsSection = () => {
  const reasons = [
    { icon: Zap, title: "Advanced Technology", desc: "Equipped with the latest global dental innovations for painless treatments." },
    { icon: Award, title: "Experienced Doctors", desc: "Our specialists bring decades of international expertise." },
    { icon: Heart, title: "Comfortable Treatment", desc: "A spa-like environment ensuring zero anxiety and maximum comfort." },
    { icon: Shield, title: "Family Trust", desc: "Generations of families trust our transparent and ethical care." },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Why Choose <span className="text-brand-blue">Toothsuite</span>?
              </h2>
              <p className="text-lg text-slate-600">
                We blend luxury hospitality with world-class healthcare to deliver an unmatched dental experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {reasons.map((reason, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-brand-green-light flex items-center justify-center text-brand-green">
                      <reason.icon size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{reason.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Modern Clinic Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
