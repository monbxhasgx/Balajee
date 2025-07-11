import React from 'react';
import heroImage from '../assets/Product/homeslider.png'; // replace with your actual image
import { ChevronRight } from 'lucide-react'; // optional icon for slider arrow

const Hero = () => {
  return (
    <section
  className="w-full min-h-[100vh] flex justify-center  flex-wrap flex-col"
  style={{ backgroundImage: `url(${heroImage})` }}
>

    {/* Left Side - Text */}
    <div className="flex-1 mt-16 ml-28">
          <h1 className="text-4xl md:text-5xl font-semibold text-red-600 leading-tight ">
            Innovative Home Appliances for<br /> Modern Living
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl">
            Balajee Home Appliances is a leading manufacturer of high-quality home appliances, committed to innovation, sustainability, and customer satisfaction.
          </p>
        </div>
  
</section>
  
  );
};

export default Hero;
