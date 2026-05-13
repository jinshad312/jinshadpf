"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const reviews = [
    { name: "Aisha M.", text: "The most luxurious dental experience I've ever had. The attention to detail is remarkable." },
    { name: "Rahul S.", text: "Transformed my smile completely. The team is incredibly professional and caring." },
    { name: "Sarah K.", text: "Felt like visiting a premium spa rather than a clinic. Highly recommended!" },
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-blue-light/50">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16">
          Patient <span className="text-brand-blue">Stories</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white"
            >
              <div className="flex justify-center gap-1 mb-6 text-brand-green">
                {[1,2,3,4,5].map(star => <Star key={star} size={20} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 mb-8 italic text-lg leading-relaxed">"{review.text}"</p>
              <h5 className="font-bold text-slate-900">{review.name}</h5>
              <p className="text-sm text-slate-500">Verified Patient</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
