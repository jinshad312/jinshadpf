import { CLINIC_INFO } from "@/constants";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tight text-brand-blue">
                toothsuit<span className="inline-block transform rotate-180">e</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Premium luxury healthcare designed for your comfort. Experience the world-class smile studio in Kerala.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-brand-blue hover:shadow-md transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-6 tracking-wide text-sm uppercase">Quick Links</h4>
            <ul className="space-y-4">
              {["About Us", "Services", "Before & After", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="text-slate-500 hover:text-brand-blue transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-6 tracking-wide text-sm uppercase">Treatments</h4>
            <ul className="space-y-4">
              {["Smile Designing", "Dental Veneers", "Aligners", "Dental Implants", "Root Canal"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-500 hover:text-brand-blue transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-6 tracking-wide text-sm uppercase">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500 text-sm">
                <MapPin size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.branch}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <Phone size={18} className="text-brand-blue shrink-0" />
                <span>{CLINIC_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <Mail size={18} className="text-brand-blue shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
