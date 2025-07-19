
import React from 'react';

export const CompleteHeroSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1216px] mt-[80px] max-md:max-w-full max-md:mt-10">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        {/* Star Rating Component - Inline */}
        <div className="mb-6">
          <div className="flex flex-col items-center">
            <div className="items-center flex gap-2">
              <div className="items-center self-stretch flex gap-1 my-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/da09cee2c22d50761484962e9b6dd922993bff43?placeholderIfAbsent=true"
                  alt="Star 1"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/da09cee2c22d50761484962e9b6dd922993bff43?placeholderIfAbsent=true"
                  alt="Star 2"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/da09cee2c22d50761484962e9b6dd922993bff43?placeholderIfAbsent=true"
                  alt="Star 3"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/da09cee2c22d50761484962e9b6dd922993bff43?placeholderIfAbsent=true"
                  alt="Star 4"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/da09cee2c22d50761484962e9b6dd922993bff43?placeholderIfAbsent=true"
                  alt="Star 5"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                />
              </div>
            </div>
            <div className="text-white text-base font-normal">
              5.0 (from 200+ reviews)
            </div>
          </div>
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
