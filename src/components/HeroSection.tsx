import React from 'react';
import { StarRating } from './StarRating';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1216px] mt-[80px] max-md:max-w-full max-md:mt-10">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        {/* Star Rating */}
        <div className="mb-6">
          <StarRating rating={5.0} reviewCount={200} />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-[62px] font-medium leading-[72px] tracking-[-1.24px] text-white mb-6 max-md:text-[40px] max-md:leading-[48px]">
          Speed Up Your Project Managers Workflow by 72%
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl font-normal leading-[28px] text-white/80 mb-8 max-md:text-lg">
          Streamline and automate processes in just 7 days.
        </p>
        
        {/* CTA Button */}
        <button className="bg-[rgba(15,128,210,1)] shadow-[0px_1px_2px_rgba(13,42,62,0.5)] text-white font-medium text-lg px-8 py-4 rounded-lg mb-12 hover:bg-[rgba(15,128,210,0.9)] transition-colors">
          Create Your Account Now
        </button>
        
        {/* Feature Points */}
        <div className="flex items-center justify-center gap-8 flex-wrap max-w-2xl">
          <div className="flex items-center gap-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/975c6c5c0104919805bc67fc34a0c40fd98abdf3?placeholderIfAbsent=true"
              alt="Check mark"
              className="w-5 h-5"
            />
            <span className="text-base text-white/90 font-normal">
              Trusted by 4,000+ companies
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/975c6c5c0104919805bc67fc34a0c40fd98abdf3?placeholderIfAbsent=true"
              alt="Check mark"
              className="w-5 h-5"
            />
            <span className="text-base text-white/90 font-normal">
              Free Forever
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/975c6c5c0104919805bc67fc34a0c40fd98abdf3?placeholderIfAbsent=true"
              alt="Check mark"
              className="w-5 h-5"
            />
            <span className="text-base text-white/90 font-normal">
              Set up in just 1 day
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};