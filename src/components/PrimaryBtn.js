import React from "react";

const PrimaryBtn = ({ width, bg_color, text_color, text, icon, border }) => {
  return (
    <div
      className={`flex flex-row space-x-3 cursor-pointer items-center justify-center h-12 
      
      ${width}
       ${bg_color}
       ${text_color}
       ${text_color}
       ${border? "border-[1.5px] border-[#232E3B]  ":""}
       rounded-[10px]
        `}
    ><span className="text-sm font-semibold" >
        {text}
        
        
        </span>
        {icon}
        </div>
  );
};

export default PrimaryBtn;
