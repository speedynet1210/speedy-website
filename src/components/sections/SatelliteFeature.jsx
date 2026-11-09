import React from "react";
import { CloudOff, Radar } from "lucide-react";
import Button from "../ui/Button";
import satImage from "../../assets/satellite-demo.jpg"; // <--- Import your image here

const SatelliteFeature = () => {
  return (
    <section
      id="satellite"
      className="bg-black py-24 text-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text */}
          <div>
            <div className="inline-block px-3 py-1 bg-speedy-gold/20 text-speedy-gold rounded-full text-sm font-medium mb-6">
              New Technology
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Cloud-free.
              <br />
              Crystal clear.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our On-Demand Satellite Imagery Service combines optical and radar
              (SAR) satellites with AI-driven super-resolution. See the world in
              higher detail, regardless of the weather.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <CloudOff className="text-speedy-gold" />
                <div>
                  <h4 className="font-bold">AI Cloud Removal</h4>
                  <p className="text-sm text-gray-500">
                    Intelligent processing to remove obstructions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Radar className="text-speedy-gold" />
                <div>
                  <h4 className="font-bold">All-Weather Imaging</h4>
                  <p className="text-sm text-gray-500">
                    Sentinel-2 & Commercial VHR integration.
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="secondary"
              onClick={() =>
                document.getElementById("contact").scrollIntoView()
              }
            >
              Request Demo
            </Button>
          </div>

          {/* Right Side: The Image */}
          <div className="relative group">
            {/* The Image Container with Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-speedy-blue to-speedy-gold rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={satImage}
                alt="Satellite View"
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />

              {/* Optional: Overlay UI to make it look like software */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-xs font-mono text-speedy-gold">
                LIVE FEED • RES: 50CM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatelliteFeature;
