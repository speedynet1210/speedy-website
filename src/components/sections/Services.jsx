import React from "react";
import { ShieldCheck, Code2, Cpu, Users } from "lucide-react";

const ServiceCard = ({ title, desc, icon: Icon, colSpan = "col-span-1" }) => (
  <div
    className={`bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 ${colSpan}`}
  >
    <div className="w-12 h-12 bg-speedy-light rounded-xl flex items-center justify-center text-speedy-gold mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-speedy-navy mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 bg-speedy-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-speedy-navy mb-6">
            Engineering Excellence.
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl">
            From bespoke software to agile transformation, we provide the tools
            you need to scale securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            colSpan="md:col-span-2"
            icon={Code2}
            title="Custom Software Development"
            desc="We engineer mission-critical, high-availability, and enterprise-scalable applications. Our proven development practices ensure your software works in the real world, exactly how you need it."
          />
          <ServiceCard
            icon={ShieldCheck}
            title="Application Security Scrutiny"
            desc="Deep-dive assessments to fix production issues, vulnerabilities, and badly written code. We transform groups into hyper-performing secure teams."
          />
          <ServiceCard
            icon={Cpu}
            title="IoT & Smart City"
            desc="Consulting on digital transformation, application hardening, and implementing IoT infrastructures for modern cities."
          />
          <ServiceCard
            colSpan="md:col-span-2"
            icon={Users}
            title="Technical Training & Agility"
            desc="We don't just build; we teach. We provide coaching on bringing true agility to the workplace and modernizing IT practices."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
