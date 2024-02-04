"use client"
import React from "react";
import { Poppins } from "next/font/google";
import SearchPage from "@/pages/SearchPage";
import Read from "@/pages/Read";

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
        <SearchPage/>
      </div>
    </div>
  );
};

export default Home_page;
