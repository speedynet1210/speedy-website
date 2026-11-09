import React from "react";
import { Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Layout: Heading & Text */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h4 className="text-speedy-gold font-bold tracking-wider uppercase text-sm mb-4">
              Who We Are
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-speedy-navy leading-tight">
              Bridging the gap between{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-speedy-gold to-orange-600">
                complex tech
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-speedy-gold to-orange-600">
                business agility.
              </span>
            </h2>
          </div>

          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              Speedynet Inc. is a tech powerhouse specializing in systems
              integration, product development, and bespoke software projects
              for web and mobile platforms.
            </p>
            <p>
              Beyond code, we act as strategic partners. We consult on digital
              transformation, modernize IT practices, and implement smart city
              IoT solutions. We also provide technical training and coaching to
              bring true agility to your workplace.
            </p>
          </div>
        </div>

        {/* Bottom Layout: Core Values / Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-speedy-light p-8 rounded-2xl">
            <Target className="text-speedy-navy mb-4" size={32} />
            <h3 className="text-xl font-bold text-speedy-navy mb-2">
              Systems Integration
            </h3>
            <p className="text-slate-500">
              Connecting your mission-critical applications for seamless data
              flow.
            </p>
          </div>

          <div className="bg-speedy-light p-8 rounded-2xl">
            <Lightbulb className="text-speedy-navy mb-4" size={32} />
            <h3 className="text-xl font-bold text-speedy-navy mb-2">
              Digital Transformation
            </h3>
            <p className="text-slate-500">
              Modernizing legacy infrastructure to make your business
              future-proof.
            </p>
          </div>

          <div className="bg-speedy-light p-8 rounded-2xl">
            <Users className="text-speedy-navy mb-4" size={32} />
            <h3 className="text-xl font-bold text-speedy-navy mb-2">
              Agile Coaching
            </h3>
            <p className="text-slate-500">
              Training your teams to move faster and build better software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
