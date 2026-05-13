"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-green-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm mb-6 tracking-wide uppercase">
            Luxury Smile Studio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Crafting <span className="text-brand-blue">World-Class</span> Smiles in Kerala.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Experience premium dental care where advanced technology meets unparalleled comfort. Your journey to a perfect smile begins here.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full px-8 w-full sm:w-auto h-14 text-lg shadow-lg hover:shadow-xl transition-all">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto h-14 text-lg border-brand-blue text-brand-blue hover:bg-brand-blue-light transition-all">
              Explore Services
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center md:justify-start gap-8">
             <div className="flex -space-x-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Patient" className="w-full h-full object-cover" />
                  </div>
                ))}
             </div>
             <div className="text-sm">
               <p className="font-semibold text-slate-800">5,000+ Smiles</p>
               <p className="text-slate-500">Transformed with care</p>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[3/4]">
             {/* Using a premium high quality placeholder image */}
             <img
               src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
               alt="Premium Dental Care"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Premium Ambience</p>
                    <p className="text-sm text-slate-500">Relaxing & Comfortable</p>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
