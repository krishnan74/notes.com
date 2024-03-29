"use client";
import React from "react";
import { useState, useEffect } from "react";
import { PiCaretDown } from "react-icons/pi";
import DropDownMenu from "./DropDownMenu";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Navbar = () => {
  const [isSubjectDropdownVisible, setSubjectDropdownVisible] = useState(false);
  const [isDeptDropdownVisible, setDeptDropdownVisible] = useState(false);
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
    <nav className="bg-gray-800 fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[90px]">
          <Link className="flex-shrink-0" href={"/"}>
            <h1 className="text-white text-lg font-light ml-2">
              Notes For Nerds
            </h1>
          </Link>

          {/* {scrollPosition > 324 && (
            <div className="pl-[265px]">
              <SearchBar />
            </div>
          )} */}

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-2 h-10 ">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-extralight"
              >
                Home
              </a>
              <div
                className="dropdown-menu  text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-extralight"
                onMouseEnter={() => setSubjectDropdownVisible(true)}
                onMouseLeave={() => setSubjectDropdownVisible(false)}
              >
                <div className="flex items-center gap-1">
                  <button>Subjects</button>
                  <PiCaretDown />
                </div>

                {/* <DropdownMenu /> */}
                {isSubjectDropdownVisible && (
                  <DropDownMenu
                    menuitems={[
                      "PSPP",
                      "Matrices and Calculas",
                      "PIS",
                      "Technical Tamil",
                      "English",
                    ]}
                  />
                )}
              </div>
              <div
                className="dropdown-menu  text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-extralight"
                onMouseEnter={() => setDeptDropdownVisible(true)}
                onMouseLeave={() => setDeptDropdownVisible(false)}
              >
                <div className="flex items-center gap-1">
                  <button>Departments</button>
                  <PiCaretDown />
                </div>
                {/* <DropdownMenu /> */}
                {isDeptDropdownVisible && (
                  <DropDownMenu
                    menuitems={["IT", "Mech", "CSE", "EEE", "ECE"]}
                  />
                )}
              </div>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-extralight"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
