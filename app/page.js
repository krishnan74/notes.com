import React from "react";
import { PiMagnifyingGlass } from "react-icons/pi";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

const Home_page = () => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-[#E8D6E3] via-[#E9DDF1] to-[#E9E4F8] h-[100vh] pt-[90px]">
      <div
        className={`flex flex-col items-center pt-[50px] bg-[rgba(255,255,255,0.4)] border-white border h-[99vh] w-[90vw] rounded-[30px] `}
      >
        <p>Notes for nerds</p>
        <p
          className={`text-center font-bold text-[40px] ${poppins.className} w-[700px]`}
        >
          Notes, Question Banks, Syllabus All at one place
        </p>
        <div className="relative topic-search-box mt-7">
          <input
            type="text"
            name=""
            className="border-white border-2 bg-[#f8f8f8] w-[1200px] h-[50px] rounded-full pl-7"
            placeholder="search for what you want to study..."
          />
          <button>
            <PiMagnifyingGlass className="absolute top-4 right-6 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home_page;
