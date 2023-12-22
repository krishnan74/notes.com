"use client";
import { React, useState, useEffect } from "react";
import { FaDownload, FaShare, FaHeart, FaHeadphones } from "react-icons/fa";
import { PiDownloadSimpleLight, PiShareLight, PiHeartLight, PiHeadphonesLight, PiArrowUp } from "react-icons/pi";
import Head from "next/head";
import Link from "next/link";

const Blog = () => {
  const [indexNumber, setIndexNumber] = useState(1);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showBackToTop, setShowBackToTop] = useState(false);
  const handleBackToTop = () => { 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(indexNumber);

  const topicList = [
    {
      id: 0,
      title: "Algorithms",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 1,
      title:
        "Building blocks of algorithms (statements, state, control flow, functions)",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      questions: [
        "What are the building blocks of algorithms?",
        "Define statements",
        "Define state",
        "Define control flow",
        "Define functions",
        
      ],

      answers: [
        "The building blocks of algorithms are statements, state, control flow, and functions.",
        "A statement is an instruction that the Python interpreter can execute. We have only seen the assignment statement so far. Some other kinds of statements that we’ll see shortly are while statements, for statements, if statements, and import statements.",
        "The state of a program is the values of all of the variables at a given point in the program’s execution.",
        "Control flow is the order in which the statements are executed.",
        "A function is a named sequence of statements that performs a computation. When you define a function, you specify the name and the sequence of statements. Later, you can “call” the function by name.",
      ],
    },
    {
      id: 2,
      title: "Notation (pseudo code, flow chart, programming language)",
      content:-
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 3,
      title: "Algorithmic problem solving",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 4,
      title:
        "Simple strategies for developing algorithms (iteration, recursion)",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 5,
      title: "Illustrative problems: find minimum in a list",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 6,
      title: "Insert a card in a list of sorted cards",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 7,
      title: "Guess an integer number in a range",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },

    {
      id: 8,
      title: "Towers of Hanoi",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  return (
    <div className="container flex px-4 justify-around gap-0 pt-[90px]">
      <div className="w-[14%] fixed left-[50px] border-r">
        <h2 className="text-2xl font-bold text-center">Index</h2>
        <ul>
          {topicList.map((post) => (
            <li
              key={post.id}
              id="topicList"
              className={`py-2 px-3 cursor-pointer border-b border-gray-200 ${
                post.id === indexNumber ? "bg-gray-100" : ""
              }`}
              onClick={() => setIndexNumber(post.id)}
            >
              <p className="text-black hover:underline font-medium">
                {post.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[60%]">
        <h1 className="text-3xl font-bold text-center mt-1 mb-3">
          PSPP Unit 1 : ALGORITHMIC PROBLEM SOLVING
        </h1>
        <div className="">
          <h2 className="text-2xl text-center font-extrabold">
            {topicList[indexNumber].title}
          </h2>
          <div className="flex justify-end gap-4 mt-4 py-3 pr-3 border-y">
            <button className="mr-2">
              <PiDownloadSimpleLight className="inline-block " size={30} />
            </button>
            <button className="mr-2">
              <PiShareLight className="inline-block " size={30} />
            </button>
            <button className="mr-2">
              <PiHeartLight className="inline-block " size={30} />
            </button>
            <button>
              <PiHeadphonesLight className="inline-block " size={30} />
            </button>
          </div>
          <h2 className="text-2xl font-bold text-center mt-2"> PART - A</h2>
          {topicList.map((topic) =>
            topic.id === indexNumber ? (
              <div key={topic.id}>
                {topic.questions?.map((question, index) => (
                  <div
                    key={index}
                    className="border-sp-2 border-gray-200 my-3 "
                  >
                    <h3 className="text-lg font-bold">
                      {index + 1 + ") " + question}
                    </h3>
                    <p className="text-lg pl-5 font-extralight">
                      {topic.answers[index]}
                    </p>
                  </div>
                ))}
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="w-1/6 fixed right-[50px] border-l pl-5">
        <h2 className="text-2xl font-bold mb-2 ">Related Topics</h2>
        <ul>
          <li className="border-b mb-2">
            <span className="font-bold ">PSPP UNIT-2:</span> DATA TYPES,
            EXPRESSIONS, STATEMENTS
          </li>
          <li className="border-b mb-2">
            <span className="font-bold">PSPP UNIT-3:</span> CONTROL FLOW,
            FUNCTIONS, STRINGS
          </li>
          <li className="border-b mb-2">
            <span className="font-bold">PSPP UNIT-4:</span> LISTS, TUPLES,
            DICTIONARIES
          </li>
          <li className="border-b mb-2">
            <span className="font-bold">PSPP UNIT-5:</span> FILES, MODULES,
            PACKAGES
          </li>
        </ul>
      </div>
      <div className="fixed top-[90vh] right-[16vw]">
        {showBackToTop && (
          <button
            className=" border rounded-full p-2"
            onClick={handleBackToTop}
          >
            <PiArrowUp className="inline-block" size={30} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
