import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-speedy-navy mb-6">
              Get in Touch
            </h2>
            <p className="text-slate-500 mb-10 text-lg">
              Ready to modernize your infrastructure or need satellite data?
              Contact our team today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-speedy-gold mt-1" />
                <div>
                  <h4 className="font-bold text-speedy-navy">Our Office</h4>
                  <p className="text-slate-600">
                    10/F Six Neo Bldg.
                    <br />
                    5th Ave, Cor. 26th St.,
                    <br />
                    BGC, Taguig City, Philippines
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-speedy-gold mt-1" />
                <div>
                  <h4 className="font-bold text-speedy-navy">Phone</h4>
                  <p className="text-slate-600">+63 (2) 479 3123</p>
                  <p className="text-slate-600">+63 917 130 5392</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-speedy-gold mt-1" />
                <div>
                  <h4 className="font-bold text-speedy-navy">Email</h4>
                  <a
                    href="mailto:support@speedynet.ph"
                    className="text-slate-600 hover:text-speedy-blue underline"
                  >
                    support@speedynet.ph
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-speedy-light p-8 rounded-3xl">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 rounded-xl border-none bg-white shadow-sm focus:ring-2 focus:ring-speedy-gold outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 rounded-xl border-none bg-white shadow-sm focus:ring-2 focus:ring-speedy-gold outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-xl border-none bg-white shadow-sm focus:ring-2 focus:ring-speedy-gold outline-none"
              />
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full p-3 rounded-xl border-none bg-white shadow-sm focus:ring-2 focus:ring-speedy-gold outline-none"
              ></textarea>
              <button className="w-full py-3 bg-speedy-navy text-white rounded-xl font-bold hover:bg-opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
