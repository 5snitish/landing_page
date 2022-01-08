import React from "react";

const Footer = () => {
  return (
    <div className="w-full md:absolute md:bottom-0 flex  flex-row h-auto  md:min-h-[257px] md:px-7 px-1 lg:px-44 bg-[#131A21] py-12 ">
      <div className="grid grid-cols-4 gap-4  justify-items-center   w-full   ">
        <div className="flex col-span-4 lg:col-span-1 flex-col space-y-4 md:space-y-0 justify-between">
          <img src="/assets/header/logo_white.png" className="w-[100%]" />

          <span className="font-normal text-[10px]  text-text_black-600">
            © Copyright 2021 | All Rights Reserved
          </span>
        </div>

        <div className="flex flex-col col-span-2 lg:col-span-1  justify-between">
          <span className="font-normal cursor-pointer text-text_black-600 text-sm">
            Site map
          </span>
          <span className="font-semibold cursor-pointer text-text_black-500 text-sm">
            How it works
          </span>
          <span className="font-semibold cursor-pointer text-text_black-500 text-sm">
            About us
          </span>
          <span className="font-semibold cursor-pointer text-text_black-500 text-sm">
            Integrations
          </span>
          <span className="font-semibold cursor-pointer text-text_black-500 text-sm">
            Blog
          </span>
        </div>

        <div className="flex flex-col col-span-2 lg:col-span-1 justify-between">
          <span className="font-normal cursor-pointer text-text_black-600 text-sm">
            Support
          </span>
          <span className="font-semibold cursor-pointer text-text_black-500 text-sm">
            Documentation
          </span>
          <span className="font-semibold cursor-pointer text-text_black-500 text-sm">
            Terms of Service
          </span>
          <span className="font-semibold cursor-pointer text-text_black-500 text-sm">
            Privacy Policy
          </span>
          <span className="font-semibold  cursor-pointer text-text_black-500 text-sm">
            Security
          </span>
        </div>
        <div className=" flex flex-col   space-y-5 lg:space-y-0 col-span-4 lg:col-span-1 h-full justify-between items-center w-full lg:w-auto ">
          <div className="flex lg:flex-col flex-row w-full justify-center">
            <span className="font-normal lg:max-w-[125px] text-right cursor-pointer text-text_black-600 text-sm">
              110 Corcoran St. 5th Floor Durham, NC 27701
            </span>
            <span className="font-normal lg:max-w-[125px] text-right cursor-pointer text-text_black-600 text-sm">
              +1 919.813.6616
            </span>
          </div>
          <div className="flex flex-row w-full justify-around  space-x-5">
            <img src="/assets/social_icons/mail.png" />

            <img src="/assets/social_icons/facebook.png" />

            <img src="/assets/social_icons/twitter.png" />

            <img src="/assets/social_icons/linkedin.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
