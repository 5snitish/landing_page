import React from "react";
import PrimaryBtn from "./PrimaryBtn";

export const SectionThree = () => {
  return (
    <div className="min-h-[826px] flex font-inter   items-center bg-gradient-to-b from-[#F9F7F5] to-bg_main-100/72 ">
      <div className="flex flex-col lg:flex-row bg-bg_section_tree space-x-6 px-10  md:px-44  bg-[length:100%_100%] items-center h-full w-full">
        <div className="max-w-[530px] relative flex flex-col space-y-5">
          <span className="font-bold text-[40px] text-[#232E3B]">
            Skip the Surveys. Get Better Insights.
          </span>
          <svg
            className="absolute top-[45px] left-[-12px]"
            width="142"
            height="57"
            viewBox="0 0 142 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.9619 7.59369C73.6417 3.5642 141 -0.31913 141 28.4701C141 49.7512 108.857 56 81.0662 56C53.2753 56 3.24183 54.5252 1.15437 32.4029C-1.58252 3.39823 32.4852 0.999997 70.6502 1"
              stroke="#FB6C71"
              stroke-width="1.5"
            />
          </svg>

          <span className="text-sm font-normal text-text_black-500">
            Surveys have been used to capture employee engagement and
            satisfaction, but often they are too little too late. Peoplelogic
            leverages existing systems, platforms, and communications to predict
            employee engagement and even provide an early warning sing
            of potential employee attrition.
          </span>

          <PrimaryBtn
            bg_color={"bg-btn-primary"}
            text_color={"text-white"}
            text={"Learn More"}
            border={false}
            width={"w-36"}
            icon={
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5H12.5M12.5 5L9.5 2M12.5 5L9.5 8"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="square"
                />
              </svg>
            }
          />
        </div>
        <img src="/assets/section_three/health.png" />
      </div>
    </div>
  );
};
