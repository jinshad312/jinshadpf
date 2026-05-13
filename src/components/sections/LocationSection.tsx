"use client";

import { CLINIC_INFO } from "@/constants";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-slate-100">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Visit Our Clinic</h2>
              <p className="text-slate-600">Located in the heart of Kozhikode, our flagship clinic offers easy access and dedicated parking.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Mankavu Branch</h4>
                  <p className="text-slate-600 leading-relaxed">{CLINIC_INFO.branch}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href={`tel:${CLINIC_INFO.phone}`} className="flex items-center justify-center gap-2 bg-brand-blue text-white py-4 px-8 rounded-full font-medium hover:bg-brand-blue/90 transition-all shadow-md flex-1">
                <Phone size={20} /> Call Now
              </a>
              <a href={`https://wa.me/${CLINIC_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-8 rounded-full font-medium hover:bg-[#20b858] transition-all shadow-md flex-1">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="flex-1 h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-inner relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.064214532134!2d75.79247657574586!3d11.256566450155255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6599ba14c6767%3A0xc3191f6305aabaf5!2sToothsuite%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-90"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
