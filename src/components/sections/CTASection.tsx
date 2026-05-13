"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue"></div>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full filter blur-[80px] translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/20 rounded-full filter blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Begin Your <br/> Smile Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied patients who have discovered the luxury of premium dental care at Toothsuite.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-slate-50 w-full sm:w-auto rounded-full px-10 h-16 text-lg font-semibold shadow-2xl hover:scale-105 transition-all">
              Schedule Consultation
            </Button>
            <span className="text-white/60 font-medium">or</span>
            <a href="tel:+919746488838" className="text-white hover:text-brand-green-light font-semibold text-xl transition-colors border-b-2 border-white/30 hover:border-white pb-1">
              Call +91 97464 88838
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
