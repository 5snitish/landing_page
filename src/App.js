import Header from "./components/Header";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import { SectionThree } from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import Footer from "./Footer";
import logo from "./logo.svg";

function App() {
  return (
    <div className=" static overflow-y-hidden    text-rose-600 flex flex-col   h-screen w-full">
      {/* header */}
      <Header />
      {/* middle section */}
      <div className="flex    flex-col  w-full pt-7 mb-44 md:mb-[600px] lg:mb-[257px]">
        <SectionOne />
        <SectionTwo />
        <SectionThree />

        <SectionFour />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
