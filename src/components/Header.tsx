import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[rgba(22,27,38,1)] self-stretch flex w-full flex-col items-center text-base text-neutral-50 font-medium justify-center px-[70px] py-5 border-[rgba(51,55,65,1)] border-b max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1213px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
        <div className="flex items-center gap-10 text-xl leading-[1.2]">
          <div className="self-stretch flex items-center gap-2.5 my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/79a3b290aec9b5eb7ea8282561b950a818f0b0c1?placeholderIfAbsent=true"
              alt="Tracking+ Logo"
              className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto rounded-[999px]"
            />
            <div className="self-stretch my-auto">
              Tracking<span className="text-[rgba(97,186,250,1)]">+</span>
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-8 my-auto" role="navigation" aria-label="Main navigation">
          <button className="self-stretch flex items-center gap-2 overflow-hidden justify-center my-auto hover:text-[rgba(97,186,250,1)] transition-colors">
            <span className="self-stretch my-auto">How it Works</span>
          </button>
          <button className="self-stretch flex items-center gap-2 overflow-hidden whitespace-nowrap justify-center my-auto hover:text-[rgba(97,186,250,1)] transition-colors">
            <span className="self-stretch my-auto">Features</span>
          </button>
          <button className="self-stretch flex items-center gap-2 overflow-hidden whitespace-nowrap justify-center my-auto hover:text-[rgba(97,186,250,1)] transition-colors">
            <span className="self-stretch my-auto">Community</span>
          </button>
        </nav>
        <button className="rotate-[-6.938893903907228e-18rad] bg-[rgba(15,128,210,1)] shadow-[0px_1px_2px_rgba(13,42,62,0.5)] flex items-center gap-1.5 overflow-hidden text-white font-normal text-center leading-none justify-center px-4 py-2.5 rounded-md hover:bg-[rgba(15,128,210,0.9)] transition-colors">
          <span className="text-white self-stretch my-auto">Create Your Account Now</span>
        </button>
      </div>
    </header>
  );
};
