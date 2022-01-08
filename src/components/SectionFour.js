import React from "react";
import Card from "./Card";

const SectionFour = () => {
  return (
    <div className="h-[668px] relative pt-10  w-full flex flex-col items-center justify-center md:px-60  font-inter ">
      <div className="flex flex-col space-y-28">
        <span className=" text-[30px] md:text-[80px] lg:text-[95px] leading-10   font-black   uppercase    text-[#F0F2F4] text-center">
          Organizational
        </span>
        <span className=" text-[70px] md:text-[180px] lg:text-[214px] leading-10    font-black   uppercase    text-[#F0F2F4] text-center">
          Health
        </span>
        <span className=" text-[50px] md:text-[140px] lg:text-[160px] leading-10    font-black    uppercase    text-[#F0F2F4] text-center">
          Simplified
        </span>
      </div>
      <div className=" absolute text-[#232E3B] top-0 min-h-[668px] items-center md:py-10 flex flex-col   w-full">
        <span className="text-[40px] font-bold">As Easy as 1-2-3</span>
        <div className="flex flex-col w-full   md:px-60 space-y-8 lg:space-y-3">
          <div className="flex flex-row justify-center  md:justify-start ">
            <Card
              number={1}
              text_primary={"Score"}
              text_secoundry={
                "Keep a real-time pulse on your organizational health score and how its trending."
              }
            />
          </div>
          <div className="flex flex-row  justify-center md:justify-center ">
            <Card
              number={2}
              text_primary={"Minutes or Less"}
              text_secoundry={
                "Peoplelogic works in the background and delivers the insights on a silver platter."
              }
            />
          </div>
          <div className="flex w-full flex-row  justify-center md:justify-end">
            <Card
              number={3}
              text_primary={"Action Steps"}
              text_secoundry={
                "You will have immediate access to 3 key ways to improve org health each day."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
