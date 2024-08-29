"use client";
import React, { useState, useRef, useEffect } from "react";

function Roadmap() {
  const milestones = [
    {
      id: 1,
      title: "Building the foundation of BXNK",
      description: ["CEX, Web3 and Neo Bank platform Infrastructure"],
      date: "Q1 & Q2 2024",
    },
    {
      id: 2,
      title: "Launch ICO and Regulatory Compliance",
      description: [
        "BXNK Token ICO and staking program introduction",
        "Develop Marketing Strategies and Community Building",
        "VASP License approval",
      ],
      date: "Q2 2023",
    },
    {
      id: 3,
      title: "Platform Pre-Launch Activities",
      description: [
        "BXNK Token ICO and staking program introduction",
        "Develop Marketing Strategies and Community Building",
      ],
      date: "Q3 2023",
    },
    {
      id: 4,
      title: "Token Listing",
      description: [
        "BXNK Token ICO and staking program introduction",
        "Develop Marketing Strategies and Community Building",
      ],
      date: "Q4 2023",
    },
    {
      id: 5,
      title: "Feature Expansion",
      description: ["Add new features", "Enhance user experience"],
      date: "Q5 2024",
    },
    {
      id: 6,
      title: "Feature Expansion",
      description: ["Further improvements"],
      date: "Q6 2024",
    },
    // {
    //   id: 7,
    //   title: "Feature Expansion",
    //   description: ["Further improvements"],
    //   date: "Q6 2024",
    // },
    // {
    //   id: 8,
    //   title: "Feature Expansion",
    //   description: ["Further improvements"],
    //   date: "Q6 2024",
    // },
  ];

  const milestoneCount = milestones.length;
  const milestoneWidth = 330;
  const containerWidth = milestoneCount * milestoneWidth;

  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

 const calculateProgress = () => {
   const container = containerRef.current;
   const scrollLeft = container.scrollLeft;
   const visibleWidth = container.offsetWidth;
   const maxScrollLeft = container.scrollWidth - visibleWidth;
   const currentProgress = (scrollLeft / maxScrollLeft) * 100;
   setProgress(currentProgress);
 };


  useEffect(() => {
    calculateProgress();
  }, []);

  return (
    <>
      <div className="bg-black/40 xl:bg-black/50 py-6 border-b border-b-gray-500 rounded-lg">
        <div className="text-white text-4xl flex xl:px-32 lg:px-24 justify-center lg:justify-start -mb-24">
          Roadmap
        </div>
        <div
          ref={containerRef}
          className="w-full overflow-x-auto scrollbar-hide"
          onScroll={calculateProgress}
        >
          <div
            className="relative flex h-auto"
            style={{ width: `${containerWidth}px` }}
          >
            <div
              className="absolute top-1/2 left-0 h-[1px] bg-white transform -translate-y-1/2"
              style={{
                width: `${containerWidth - milestoneWidth / 2}px`,
              }}
            />
            {milestones.map((milestone) => (
              <div
                key={milestone.id}
                className="flex-none px-7 w-[310px] flex flex-col items-start relative"
              >
                <div className="absolute top-1/2 w-4 h-4 bg-cyan-300 rounded-full shadow-[0_0_10px_4px_rgba(6,182,212,0.5)] transform -translate-y-1/2" />
                <div className="my-8 text-center">
                  <p className="text-xs mt-28 text-white">{milestone.date}</p>
                </div>
                <div className="text-white text-xl">{milestone.title}</div>
                <ul className="text-white mt-3 space-y-2">
                  {milestone.description.map((point, index) => (
                    <li
                      key={index}
                      className="text-[12px] list-disc ml-3 text-gray-400"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="w-[80%] h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
