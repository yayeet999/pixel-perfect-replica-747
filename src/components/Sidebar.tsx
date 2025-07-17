import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="bg-[rgba(12,17,29,1)] mt-[-94px] min-h-[900px] w-[272px] max-w-full overflow-hidden rounded-[16px_0px_0px_16px] border-[rgba(51,55,65,1)] border-r">
      <div className="bg-[rgba(12,17,29,1)] relative flex w-full max-w-[272px] items-start gap-3 p-3">
        <div className="z-0 flex min-w-60 w-full items-center gap-3 overflow-hidden flex-1 shrink basis-[0%] my-auto p-3 rounded-[10px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1a77952b048f91cb67224d58f8c4500523b7d868?placeholderIfAbsent=true"
            alt="Company logo"
            className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto rounded-[999px]"
          />
          <div className="self-stretch flex flex-col items-stretch justify-center flex-1 shrink basis-3 my-auto">
            <div className="text-neutral-50 text-sm font-medium leading-none">
              <span>Tracking</span>
              <span className="text-[rgba(97,186,250,1)]">+</span>
            </div>
            <div className="text-[rgba(148,150,156,1)] text-xs font-normal leading-none mt-1">
              Project Management
            </div>
          </div>
          <button className="justify-center items-center rounded border shadow-[0px_1px_2px_0px_rgba(82,88,102,0.06)] bg-[#161B26] self-stretch flex gap-1 overflow-hidden w-8 h-8 my-auto px-1.5 border-solid border-[#333741] hover:bg-[#1a1f2a] transition-colors">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bf3ff3c90d65afe914253e0640b988f4653ed206?placeholderIfAbsent=true"
              alt="Menu"
              className="aspect-[1] object-contain w-5 self-stretch my-auto"
            />
          </button>
        </div>
        <div className="border absolute z-0 min-w-60 shrink-0 h-0 w-[272px] border-[rgba(51,55,65,1)] border-solid -bottom-px inset-x-0" />
      </div>
      <nav className="w-full whitespace-nowrap flex-1 pt-5 pb-4 px-5" role="navigation" aria-label="Sidebar navigation">
        <div className="min-h-[246px] w-full">
          <div className="flex w-full items-center gap-2 text-xs text-[rgba(148,150,156,1)] font-medium uppercase tracking-[0.48px] leading-none justify-center p-1">
            <div className="self-stretch flex-1 shrink basis-[0%] my-auto">MAIN</div>
          </div>
          <div className="w-full text-sm text-[rgba(236,236,237,1)] font-normal tracking-[-0.08px] leading-none mt-1.5">
            <button className="bg-[rgba(22,27,38,1)] relative flex w-full items-center gap-2 text-neutral-50 font-medium px-3 py-2 rounded-lg hover:bg-[rgba(30,35,46,1)] transition-colors">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/162f284b6537def1335e4dbf953be648bbb542d2?placeholderIfAbsent=true"
                alt="Projects icon"
                className="aspect-[1] object-contain w-5 self-stretch z-0 shrink-0 my-auto"
              />
              <div className="self-stretch z-0 flex items-center gap-1.5 flex-1 shrink basis-[0%] my-auto">
                <span className="self-stretch my-auto">Projects</span>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f9f10e2f3234f7f45498e544d51a55a875bcd57e?placeholderIfAbsent=true"
                alt="Expand"
                className="aspect-[1] object-contain w-5 self-stretch z-0 shrink-0 my-auto"
              />
              <div className="bg-[rgba(97,186,250,1)] absolute z-0 flex w-1 shrink-0 h-5 -left-5 bottom-2" />
            </button>
            <button className="flex w-full items-center gap-2 mt-1 px-3 py-2 rounded-lg hover:bg-[rgba(22,27,38,1)] transition-colors">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/57767803100ca8f068a311f46fecb9cbe8aeec70?placeholderIfAbsent=true"
                alt="Billing icon"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch flex items-center gap-1.5 flex-1 shrink basis-[0%] my-auto">
                <span className="self-stretch my-auto">Billing</span>
              </div>
            </button>
            <button className="flex w-full items-center gap-2 mt-1 px-3 py-2 rounded-lg hover:bg-[rgba(22,27,38,1)] transition-colors">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2c2141ae4b6d3042c67783f913da3b39afc421c6?placeholderIfAbsent=true"
                alt="Tasks icon"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch flex items-center gap-1.5 flex-1 shrink basis-[0%] my-auto">
                <span className="self-stretch my-auto">Tasks</span>
              </div>
            </button>
            <button className="flex w-full items-center gap-2 mt-1 px-3 py-2 rounded-lg hover:bg-[rgba(22,27,38,1)] transition-colors">
              <div className="self-stretch flex w-5 shrink-0 h-0 my-auto" />
              <div className="self-stretch flex items-center gap-1.5 flex-1 shrink basis-[0%] my-auto">
                <span className="self-stretch my-auto">Export</span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};
