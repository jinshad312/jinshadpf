"use client";

import { motion } from "framer-motion";

export const BeforeAfterSection = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformations That Speak
          </h2>
          <p className="text-lg text-slate-400">
            Witness the art of smile design. Real stories of confidence restored through our premium care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[16/10] relative">
                {/* Using placeholders for before/after */}
                <img
                  src={`https://images.unsplash.com/photo-1590623258529-${item === 1 ? '1c6c06eb6404' : '3d43ab8c847a'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt="Smile Transformation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <h4 className="text-xl font-bold mb-1">Veneers & Whitening</h4>
                    <p className="text-sm text-slate-300">Complete smile makeover</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
                    View Case
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
