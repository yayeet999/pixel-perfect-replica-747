import React from 'react';
import { StarRating } from './StarRating';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1216px] mt-[58px] max-md:max-w-full max-md:mt-10">
      <div className="w-full max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
          <div className="flex w-full flex-col items-center justify-center max-md:max-w-full">
            <div className="self-stretch flex w-full flex-col items-stretch justify-center max-md:max-w-full">
              <div className="self-center flex flex-col items-center">
                <StarRating rating={5.0} reviewCount={200} />
              </div>
              <h1 className="text-[62px] font-medium leading-[79px] tracking-[-1.24px] text-center mt-2 max-md:max-w-full max-md:text-[40px] max-md:leading-[56px] text-white">
                Speed Up Your Project Managers Workflow by 72%
              </h1>
            </div>
            <p className="text-xl font-normal leading-[35px] mt-6 max-md:max-w-full text-white">
              Streamline and automate processes in just 7 days.
            </p>
            <div className="flex flex-col items-center text-lg text-white font-normal text-center leading-none mt-6">
              <button className="rotate-[-6.938893903907228e-18rad] bg-[rgba(15,128,210,1)] shadow-[0px_1px_2px_rgba(13,42,62,0.5)] flex items-center gap-1.5 overflow-hidden justify-center px-8 py-4 rounded-md max-md:px-5 hover:bg-[rgba(15,128,210,0.9)] transition-colors">
                <span className="text-white self-stretch my-auto">Create Your Account Now</span>
              </button>
            </div>
          </div>
          <div className="self-center flex w-[591px] max-w-full items-center gap-[27px] justify-between flex-wrap mt-8">
            <div className="self-stretch flex min-w-60 gap-2 my-auto">
              <div className="flex gap-2.5 w-5 pt-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/975c6c5c0104919805bc67fc34a0c40fd98abdf3?placeholderIfAbsent=true"
                  alt="Check mark"
                  className="aspect-[1] object-contain w-5"
                />
              </div>
              <div className="text-base text-white font-normal leading-7">
                <div>Trusted by 4,000+ companies</div>
              </div>
            </div>
            <div className="self-stretch flex gap-2 my-auto">
              <div className="flex gap-2.5 w-5 pt-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/975c6c5c0104919805bc67fc34a0c40fd98abdf3?placeholderIfAbsent=true"
                  alt="Check mark"
                  className="aspect-[1] object-contain w-5"
                />
              </div>
              <div className="text-base text-white font-normal leading-7">
                <div>Free Forever</div>
              </div>
            </div>
            <div className="self-stretch flex gap-2 my-auto">
              <div className="flex gap-2.5 w-5 pt-1">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/975c6c5c0104919805bc67fc34a0c40fd98abdf3?placeholderIfAbsent=true"
                  alt="Check mark"
                  className="aspect-[1] object-contain w-5"
                />
              </div>
              <div className="text-base text-white font-normal leading-7">
                <div>Set up in just 1 day</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
