import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black mb-6 flex items-center gap-4 text-gray-900">
              <div className="p-4 bg-red-600 rounded-2xl shadow-strong flex items-center justify-center flex-shrink-0 border-2 border-white">
                <MapPin className="w-8 h-8 text-white fill-red-600" strokeWidth={3} />
              </div>
              <span>Visit Us</span>
            </h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed font-medium">
              Opposite Malda Women's College Gate, Pirojpur, Uma Roy Sarani, Malda, West Bengal 732101
            </p>
            
            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-medium h-72 bg-gray-100 border border-gray-200">
              <iframe
                src="https://www.google.com/maps?q=Gangarampur+Doi+Ghar+Opposite+Malda+Women's+College+Gate+Pirojpur+Uma+Roy+Sarani+Malda+West+Bengal+732101&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gangarampur Doi Ghar Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-black mb-6 flex items-center gap-4 text-gray-900">
              <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl shadow-strong flex items-center justify-center flex-shrink-0 border-2 border-white">
                <Phone className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
              <span>Contact Us</span>
            </h3>
            
            <div className="space-y-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:9475711559"
                className="block p-7 bg-white text-gray-900 rounded-2xl font-black text-center hover:shadow-strong transition-all text-2xl shadow-strong border-4 border-gray-300"
              >
                📞 Call: 9475711559
              </motion.a>

              <div className="p-6 bg-gray-900 rounded-xl border-2 border-gray-800 shadow-medium">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl shadow-soft flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-lg text-white">Opening Hours</p>
                    <p className="text-gray-300 font-medium">Monday - Sunday</p>
                    <p className="text-white font-bold text-lg mt-1">9:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 font-semibold">© 2026 Gangarampur Doi Ghar. All rights reserved.</p>
          <p className="mt-2 text-gray-500 font-medium">Made with ❤️ for authentic Malda taste</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
