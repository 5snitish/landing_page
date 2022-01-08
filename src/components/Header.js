import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import PrimaryBtn from "./PrimaryBtn";

const Header = () => {
  return (
    <div className="flex sticky top-0 font-inter z-50 bg-white text-[#232E3B]  min-h-[80px] px-[30px] lg:px-[60px] xl:px-[180px] flex-row items-center w-full justify-between">
      <img
        src="/assets/header/logo.png"
        className="w-[50%] h-[50%] md:w-auto md:h-auto"
      />
      <div className="hidden text-xs md:flex flex-row space-x-2 lg:space-x-7">
        <span className="font-semibold  ">How it works</span>
        <span className="font-semibold  ">About us</span>
        <span className="font-semibold  ">Integrations</span>
        <span className="font-semibold ">Blog</span>
        <span className="font-semibold  ">Search</span>
      </div>
      <div className="flex flex-row items-center space-x-5">
        <PrimaryBtn
          bg_color={"white"}
          text={"Request a Demo"}
          border={true}
          width={"w-36"}
        />
        <div className="w-56 text-right md:hidden block    ">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute text-xs right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <span className="font-semibold  ">How it works</span>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <span className="font-semibold  ">About us</span>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <span className="font-semibold  ">Integrations</span>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <span className="font-semibold ">Blog</span>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <span className="font-semibold  ">Search</span>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-2 py-5 ">
                  <Menu.Item>
                    {({ active }) => (
                      <PrimaryBtn
                        bg_color={"bg-btn-primary"}
                        text_color={"text-white"}
                        text={"Sign in"}
                        border={false}
                        width={"w-24"}
                      />
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="hidden md:block">
          <PrimaryBtn
            bg_color={"bg-btn-primary"}
            text_color={"text-white"}
            text={"Sign in"}
            border={false}
            width={"w-24"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
