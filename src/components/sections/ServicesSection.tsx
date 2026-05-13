"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/constants";
import { Sparkles, ArrowRight } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-brand-blue-light/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Premium Dental Services
          </h2>
          <p className="text-lg text-slate-600">
            Discover our comprehensive range of specialized treatments, delivered with precision and luxury care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden"
            >
              {/* Subtle hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-blue-light rounded-xl flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 transition-transform duration-300">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-brand-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
