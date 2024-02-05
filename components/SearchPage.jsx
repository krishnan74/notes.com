"use client";

import React, { useState, useEffect } from "react";
import Result from "./SearchList";
import Search from "./SearchBar";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex flex-col  items-center h-[100px] `}>
      <div
        className={`flex justify-center w-full z-30  ${
          scrollPosition > 320 ? "fixed top-[20px]" : ""
        }`}
      >
        <Search setSearchResults={setSearchResults} />
      </div>

      <Result results={searchResults} />
    </div>
  );
}
