import React from "react";
import { MdEmergencyShare } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { GiCelebrationFire } from "react-icons/gi";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group relative min-h-[300px]">
    {/* Icon container positioned above card */}
    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
      <div className="rounded-full bg-white p-4 border-4 border-indigo-800 shadow-lg">
        <Icon className="w-8 h-8 text-indigo-800"/>
      </div>
    </div>

    {/* Card content */}
    <div className="bg-white px-4 pt-8 pb-6 rounded-lg shadow-md h-full transition-transform duration-700 hover:rotate-[360deg] m-6">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xl font-bold mb-3 mt-2">{title}</h3>
        <p className=" text-gray-800 mb-4 leading-relaxed">
          {description}
        </p>
        <button className="text-indigo-800 font-medium hover:text-indigo-600 transition-colors uppercase tracking-wide">
          Explore this service &gt;
        </button>
      </div>
    </div>
  </div>
);

const Test = () => {
  const services = [
    {
      icon: MdEmergencyShare,
      title: "Emergency Plumbing Services",
      description:
        "Our plumbers are ready to go 24/7 for emergencies - including nights, weekends and holidays.",
    },
    {
      icon: FaTools,
      title: "Plumbing and Drains",
      description:
        "As the largest plumbing and drain service company, we make thousands of repairs every day.",
    },
    {
      icon: IoIosWater,
      title: "Water Damage",
      description:
        "Our teams are equipped with state-of-the-art water extraction and cleaning equipment.",
    },
    {
      icon: GiCelebrationFire,
      title: "Water Heaters",
      description:
        "Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.",
    },
  ];

  return (
    <div>
      <div id="assignment" className="relative min-h-[500px] min-w-[750px]  mx-10">
        {/* Diagonal background */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "linear-gradient(158deg, #1e1b4b 50%, #EEF2FF 50%)",
            zIndex: 0,
          }}
        />

        {/* Content container */}
        <div className="relative z-10 container px-12 py-8">
          <h2 className="text-4xl font-medium text-white mb-12 pl-4 tracking-wide uppercase">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
