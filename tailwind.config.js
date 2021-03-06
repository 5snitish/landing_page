module.exports = {
  enable:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
"inter":['Inter', 'sans-serif']


      },
      colors: {
       "btn-primary":"#00ACC2",
       "btn-secoundry":"#FB6C71",
       "text_black":{
         600:"#536173",
         500:"#697B91"
       },
       "bg_main":{
         100:"#F9F7F5",
         200:"#F9F7F5"

       }
      },
      backgroundSize: {
        
        '10': '100%',
        '16': '4rem',
      },
      backgroundImage: {
        'bg_section_two': "url('/public/assets/section_two/bg_two.png')",
        'bg_section_tree':"url('/public/assets/section_three/bg_three.png')",
         },

         screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '770px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        }
    },
  },
  plugins: [],
}
