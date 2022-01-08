import React from "react";
import PrimaryBtn from "./PrimaryBtn";

const SectionTwo = () => {
  return (
    <div className="lg:h-[573px] h-full font-inter  flex w-full  background bg-gradient-to-b from-white to-[#F9F7F5]">
      <div className="h-full w-full flex flex-col lg:flex-row bg-bg_section_two bg-cover lg:bg-[length:100%_100%]  lg:pt-0   pt-80 items-center">
        <img
          src="/assets/section_two/bg_logos.png"
          className=" h-[30%] w-auto lg:h-[90%]"
        />

        <div className="h-full flex px-2 items-center md:items-start md:text-left text-center md:px-22 xl:px-44 flex-col space-y-8 lg:space-y-4 lg:justify-center">
          <div className="flex flex-row space-x-1 items-center">
            <span className="styled_text">17,000,00</span>
            <img src="/assets/section_two/blur_numbers.png" />
          </div>
          <span className="text-white font-medium text-xl">
            Interactions Unlocked
          </span>
          <span className="text-text_black-500   max-w-[530px] font-normal text-sm">
            Understanding the way your team interacts with one another is
            critical. Peoplelogic reveals key connections and interactions
            amongst your team and through your various platforms to provide
            recommendations that will help your team thrive through
            organizational health.
          </span>

          <PrimaryBtn
            bg_color={"bg-btn-secoundry"}
            text_color={"text-white"}
            text={"Open eBook"}
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
      </div>
    </div>
  );
};

export default SectionTwo;
