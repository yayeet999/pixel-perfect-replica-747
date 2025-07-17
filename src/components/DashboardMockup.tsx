import React from 'react';
import { Sidebar } from './Sidebar';
import { ProjectTable } from './ProjectTable';

export const DashboardMockup: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[100px] w-full max-w-[1210px] mt-[40px] pt-2.5 px-[11px] rounded-[20px] max-md:max-w-full max-md:mt-6">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/6bfa3c8c06891c6da733fb50054d93ae42d9e22a?placeholderIfAbsent=true"
        alt="Dashboard background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative bg-[rgba(22,27,38,1)] flex flex-col pt-[84px] px-px rounded-2xl border-[rgba(51,55,65,1)] border-solid border-2 max-md:max-w-full">
        <div className="z-10 w-[11px] ml-[266px] py-[3px] max-md:ml-2.5">
          <div className="border z-10 w-full shrink-0 h-[11px] border-[rgba(86,89,97,1)] border-solid max-md:mr-[5px]" />
          <div className="border shrink-0 h-px border-[rgba(86,89,97,1)] border-solid" />
        </div>
        <Sidebar />
        <div className="z-10 mt-[-265px] w-[916px] max-w-full max-md:mt-[-200px] ml-auto">
          <header className="bg-[rgba(12,17,29,1)] relative flex w-full items-center gap-3 px-6 py-5 rounded-[0px_16px_0px_0px] max-md:max-w-full max-md:px-5">
            <div className="self-stretch z-0 flex min-w-60 items-center gap-3.5 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
              <div className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                <h2 className="text-neutral-50 text-base font-medium tracking-[-0.24px] max-md:max-w-full">
                  Projects
                </h2>
                <p className="text-[rgba(148,150,156,1)] text-sm font-normal leading-none tracking-[-0.08px] mt-1 max-md:max-w-full">
                  List of all your current projects
                </p>
              </div>
            </div>
            <div className="border absolute z-0 min-w-60 shrink-0 h-0 w-[915px] border-[rgba(51,55,65,1)] border-solid left-px right-0 bottom-0 max-md:max-w-full" />
            <div className="self-stretch z-0 flex min-w-60 items-center gap-3 text-sm text-white font-normal text-center leading-none my-auto">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5dde99b9255896ad6c0b4aa8e3e5294609c9bde1?placeholderIfAbsent=true"
                alt="User avatars"
                className="aspect-[2.86] object-contain w-[103px] self-stretch min-h-9 shrink-0 gap-[-11px] my-auto"
              />
              <button className="rotate-[-6.938893903907228e-18rad] bg-[rgba(22,27,38,1)] shadow-[0px_1px_2px_rgba(31,39,44,0.5)] border self-stretch flex items-center gap-1.5 overflow-hidden justify-center my-auto px-4 py-2 rounded-md border-[rgba(255,255,255,0.16)] border-solid hover:bg-[rgba(30,35,46,1)] transition-colors">
                <span className="self-stretch my-auto">Add Project</span>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6c085dad2ed47a1312c9caaed17c5769f7ca79ee?placeholderIfAbsent=true"
                  alt="Add icon"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                />
              </button>
            </div>
          </header>
          <ProjectTable />
        </div>
      </div>
    </section>
  );
};
