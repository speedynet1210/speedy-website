import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-speedy-navy tracking-tight mb-6 leading-[1.1]">
          Systems Integrated. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-speedy-gold to-orange-600">
            Future Realized.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          We build mission-critical software and bespoke digital solutions for
          the modern enterprise.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            onClick={() => document.getElementById("services").scrollIntoView()}
          >
            View Our Solutions
          </Button>
          <Button
            variant="secondary"
            onClick={() => document.getElementById("contact").scrollIntoView()}
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-speedy-blue/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
    </section>
  );
};

export default Hero;
