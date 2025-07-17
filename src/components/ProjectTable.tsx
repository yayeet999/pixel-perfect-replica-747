import React, { useState } from 'react';

interface Project {
  id: string;
  name: string;
  url: string;
  startDate: string;
  clientName: string;
  clientEmail: string;
  progress: number;
  icon: string;
  clientAvatar: string;
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Pulse',
    url: 'www.pulse.io',
    startDate: '15 January 2024',
    clientName: 'Frank Jones',
    clientEmail: 'frank@pulse.io',
    progress: 80,
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/14cab1161a904ac15beedfcb1ced1f9863126359?placeholderIfAbsent=true',
    clientAvatar: 'https://api.builder.io/api/v1/image/assets/TEMP/c3fc4d60b015a1e1b3b1c2c33617caa7a5cad122?placeholderIfAbsent=true'
  }
];

export const ProjectTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'my' | 'all' | 'archived'>('my');

  return (
    <div className="bg-[rgba(12,17,29,1)] w-full overflow-hidden mt-1 pt-[18px] px-[18px] rounded-[10px] max-md:max-w-full max-md:mr-[3px]">
      <div className="flex w-full gap-4 text-[13px] font-medium tracking-[-0.08px] leading-loose flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 gap-3 text-[rgba(148,150,156,1)] flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="flex min-w-60 w-full flex-col flex-1 shrink basis-[0%] max-md:max-w-full">
            <div className="bg-[rgba(22,27,38,1)] flex gap-1 overflow-hidden p-1 rounded-md">
              <button
                onClick={() => setActiveTab('my')}
                className={`justify-center items-center rounded shadow-[0px_6px_10px_0px_rgba(27,28,29,0.06),0px_2px_4px_0px_rgba(27,28,29,0.02)] flex gap-1.5 overflow-hidden w-[101px] px-0.5 py-1 transition-colors ${
                  activeTab === 'my' ? 'bg-[#0C111D] text-white' : 'text-[rgba(148,150,156,1)] hover:bg-[rgba(30,35,46,1)]'
                }`}
              >
                <span className="self-stretch my-auto">My Projects</span>
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`flex items-center gap-1.5 overflow-hidden whitespace-nowrap justify-center w-[101px] px-0.5 py-1 rounded-md transition-colors ${
                  activeTab === 'all' ? 'bg-[#0C111D] text-white' : 'text-[rgba(148,150,156,1)] hover:bg-[rgba(30,35,46,1)]'
                }`}
              >
                <span className="self-stretch my-auto">All</span>
              </button>
              <button
                onClick={() => setActiveTab('archived')}
                className={`flex items-center gap-1.5 overflow-hidden whitespace-nowrap justify-center w-[101px] px-0.5 py-1 rounded-md transition-colors ${
                  activeTab === 'archived' ? 'bg-[#0C111D] text-white' : 'text-[rgba(148,150,156,1)] hover:bg-[rgba(30,35,46,1)]'
                }`}
              >
                <span className="self-stretch my-auto">Archived</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-3 text-[rgba(206,207,210,1)] whitespace-nowrap text-center">
          <button className="bg-[rgba(22,27,38,1)] shadow-[0px_1px_2px_rgba(26,32,46,1)] border flex items-center gap-1 overflow-hidden justify-center p-2 rounded-md border-[rgba(51,55,65,1)] border-solid hover:bg-[rgba(30,35,46,1)] transition-colors">
            <div className="self-stretch flex items-center gap-2 justify-center my-auto px-1">
              <span className="self-stretch my-auto">Filter</span>
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/7ec8500b0c6b9390c3c87fd5e2afe8527aea38c6?placeholderIfAbsent=true"
              alt="Filter icon"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          </button>
        </div>
      </div>
      <div className="bg-neutral-50 flex w-full overflow-hidden text-sm text-[rgba(236,236,237,1)] font-normal tracking-[-0.08px] leading-none flex-wrap mt-3.5 rounded-lg max-md:max-w-full">
        <div className="bg-[rgba(22,27,38,1)] flex items-center gap-2.5 overflow-hidden w-56 px-3 py-2">
          <input
            type="checkbox"
            className="aspect-[1] w-4 self-stretch shrink-0 my-auto"
            aria-label="Select all projects"
          />
          <div className="self-stretch flex items-center gap-0.5 flex-1 shrink basis-[0%] my-auto">
            <span className="self-stretch my-auto">Project Name</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d2e4e955b091141242193b93ea5d0bf8a9643786?placeholderIfAbsent=true"
              alt="Sort"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
        <div className="bg-[rgba(22,27,38,1)] flex items-center gap-2.5 overflow-hidden whitespace-nowrap flex-1 shrink basis-[0%] px-3 py-2">
          <div className="self-stretch flex w-full items-center gap-0.5 flex-1 shrink basis-[0%] my-auto">
            <span className="self-stretch my-auto">Started</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d2e4e955b091141242193b93ea5d0bf8a9643786?placeholderIfAbsent=true"
              alt="Sort"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
        <div className="bg-[rgba(22,27,38,1)] flex items-center gap-2.5 overflow-hidden whitespace-nowrap flex-1 shrink basis-[0%] px-3 py-2">
          <div className="self-stretch flex w-full items-center gap-0.5 flex-1 shrink basis-[0%] my-auto">
            <span className="self-stretch my-auto">Client</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e2a0b9bc6ca88b5dc2639bce927b0c5371e63e5b?placeholderIfAbsent=true"
              alt="Sort"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
        <div className="bg-[rgba(22,27,38,1)] flex items-center gap-2.5 overflow-hidden whitespace-nowrap flex-1 shrink basis-[0%] px-3 py-2">
          <div className="self-stretch flex w-full items-center gap-0.5 flex-1 shrink basis-[0%] my-auto">
            <span className="self-stretch my-auto">Progress</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1bdf13b0e92580da746f2650b498d3603e71f6cf?placeholderIfAbsent=true"
              alt="Sort"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
        <div className="bg-[rgba(22,27,38,1)] flex w-16 shrink-0 h-9 gap-2.5" />
      </div>
      <div className="w-full mt-[9px] max-md:max-w-full">
        {mockProjects.map((project) => (
          <div
            key={project.id}
            className="flex w-full max-w-[869px] overflow-hidden flex-wrap py-2 border-[rgba(51,55,65,1)] border-b max-md:max-w-full hover:bg-[rgba(22,27,38,0.5)] transition-colors"
          >
            <div className="flex min-h-12 items-center gap-3 overflow-hidden font-normal whitespace-nowrap w-56 pl-3 pr-5 py-[7px]">
              <input
                type="checkbox"
                className="aspect-[1] w-4 self-stretch shrink-0 my-auto"
                aria-label={`Select ${project.name} project`}
              />
              <img
                src={project.icon}
                alt={`${project.name} icon`}
                className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto rounded-[999px]"
              />
              <div className="self-stretch flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
                <div className="text-neutral-50 text-sm leading-none tracking-[-0.08px]">
                  {project.name}
                </div>
                <div className="text-[rgba(148,150,156,1)] text-xs leading-none tracking-[-0.07px]">
                  {project.url}
                </div>
              </div>
            </div>
            <div className="flex min-h-12 items-center gap-3 overflow-hidden text-sm text-neutral-50 font-normal tracking-[-0.08px] leading-none flex-1 shrink basis-[0%] pl-3 pr-5 py-3.5">
              <div className="self-stretch flex w-full flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
                <div>{project.startDate}</div>
              </div>
            </div>
            <div className="flex min-h-12 items-center gap-3 overflow-hidden font-normal flex-1 shrink basis-[0%] pl-3 pr-5 py-[7px]">
              <img
                src={project.clientAvatar}
                alt={`${project.clientName} avatar`}
                className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch flex flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
                <div className="flex flex-col items-stretch text-sm text-neutral-50 tracking-[-0.08px] leading-none justify-center">
                  <div>{project.clientName}</div>
                </div>
                <div className="flex w-full flex-col items-stretch text-xs text-[rgba(148,150,156,1)] whitespace-nowrap tracking-[-0.07px] leading-none justify-center">
                  <div>{project.clientEmail}</div>
                </div>
              </div>
            </div>
            <div className="flex min-h-12 items-center gap-2 overflow-hidden text-xs text-neutral-50 font-normal whitespace-nowrap leading-none flex-1 shrink basis-[0%] px-3 py-4">
              <div className="self-stretch w-full flex-1 shrink basis-[0%] my-auto">
                <div className="flex w-full items-center gap-2">
                  <div className="bg-[rgba(97,186,250,1)] h-2 rounded-[999px] flex-1" style={{ width: `${project.progress}%` }}>
                    <div className="bg-[rgba(51,55,65,1)] h-full rounded-[999px]" style={{ width: `${100 - project.progress}%` }} />
                  </div>
                  <span className="self-stretch my-auto">{project.progress}%</span>
                </div>
              </div>
            </div>
            <div className="flex min-h-12 items-center gap-3 overflow-hidden justify-center w-16 p-3">
              <button className="self-stretch flex w-6 items-center gap-0.5 overflow-hidden justify-center my-auto p-0.5 rounded-md hover:bg-[rgba(22,27,38,1)] transition-colors">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f4251e26422c83c6976cc8e95420a2bdd57750d6?placeholderIfAbsent=true"
                  alt="More options"
                  className="aspect-[1] object-contain w-5 self-stretch my-auto"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
