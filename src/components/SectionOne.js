import React from 'react'
import PrimaryBtn from './PrimaryBtn'

const SectionOne = () => {
    return (
        <div className='bg-white lg:h-[628px] font-inter flex flex-col lg:flex-row text-[#232E3B] w-full items-center md:px-0 px-2 justify-center space-x-2'>

            <div className='  space-y-5 flex flex-col items-center w-full lg:w-[60%] lg:max-w-[630px] '>
                <div className='flex flex-col w-auto relative'>


                    <span className=' font-extrabold text-[45px]  md:text-[64px]'>
                        Healthier Organizations,
                        Happier Teams.
                    </span>
                    <svg className='absolute top-[60px]  md:top-[74px] left-[-40px] lg:left-0' width="296" height="23" viewBox="0 0 296 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M295 13.1415C33.2255 15.5834 -5.57875 26.5717 1.81253 19.8566C9.20382 13.1415 274.674 10.6996 278.37 3.98449C282.065 -2.73061 4.27629 3.98449 27.682 3.98449" stroke="#00ACC2" stroke-width="1.5" />
                    </svg>
                    <svg className='absolute hidden lg:block top-[195px] left-[-15px]' width="280" height="99" viewBox="0 0 280 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M199.514 12.1697C139.525 5.34378 -4.65413 -25.0002 1.1507 55.4973C3.74546 91.4796 75.6593 97.5 130 97.5C184.341 97.5 273.825 98.332 278 60C283.5 9.50177 220 1 145.374 1.00001" stroke="#FB6C71" stroke-width="1.5" />
                    </svg>
                </div>
                <span className='font-medium text-xl w-full lg:max-w-[75%] text-left text-text_black-500'>
                    Unlock insights for improving team engagement, process effectiveness, and overall organizational health.
                </span>

                <PrimaryBtn bg_color={"bg-btn-primary"} text_color={"text-white"} text={"Get It Now"} border={false} width={"w-36"} icon={<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5H12.5M12.5 5L9.5 2M12.5 5L9.5 8" stroke="white" stroke-width="1.5" stroke-linecap="square" />
                </svg>
                } />

            </div>

            <img src='/assets/section_one/one.png' className='w-auto h-auto '>
            </img>


        </div>
    )
}

export default SectionOne
