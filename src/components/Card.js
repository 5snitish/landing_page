import React from "react";

const Card = ({ number, text_primary, text_secoundry }) => {
  return (
    <div className="flex flex-col px-6  h-[134px] w-[320px] md:w-[368px] bg-white justify-center rounded-[25px] space-y-3 shadowDiv">
      <div className="flex flex-row space-x-2 items-center">
        <div className="flex items-center bg-btn-secoundry rounded-full h-9 w-9 justify-center">
          <span className="text-white font-bold text-2xl">{number}</span>
        </div>
        <span className="font-bold text-2xl">{text_primary}</span>
      </div>
      <span className="text-sm text-text_black-500 font-normal">
        {text_secoundry}
      </span>
    </div>
  );
};

export default Card;
