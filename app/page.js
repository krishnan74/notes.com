"use client";
import { React, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const Blog = () => {
  const [indexNumber, setIndexNumber] = useState(1);

  console.log(indexNumber)

  const blogPosts = [
    {
      id: 1,
      title: "Algorithms",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title:
        "Building blocks of algorithms (statements, state, control flow, functions)",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Notation (pseudo code, flow chart, programming language)",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 4,
      title: "Algorithmic problem solving",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 5,
      title:
        "Simple strategies for developing algorithms (iteration, recursion)",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 6,
      title: "Illustrative problems: find minimum in a list",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 7,
      title: "Insert a card in a list of sorted cards",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 8,
      title: "Guess an integer number in a range",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },

    {
      id: 9,
      title: "Towers of Hanoi",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  return (
    <div className="container flex px-4 justify-around gap-0 pt-10">
      <div className="w-1/6 ">
        <h2 className="text-2xl font-bold text-center">Index</h2>
        <ul>
          {blogPosts.map((post) => (
            <li
              key={post.id}
              id="topicList"
              className="py-2 pl-3 cursor-pointer border-sp-2 border-gray-200 hover:bg-gray-100"
              onClick={() => setIndexNumber(post.id)}
            >
              <p className="text-black hover:underline font-semibold">
                {post.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl font-bold text-center my-8">
          PSPP Unit 1 : ALGORITHMIC PROBLEM SOLVING
        </h1>
        <div className="">
          <h2 className="text-2xl font-bold">
            {blogPosts[indexNumber - 1].title}
          </h2>
          <p>{blogPosts[indexNumber - 1].content}</p>
        </div>
      </div>
      <div className="w-1/6 ">
        <h2 className="text-2xl font-bold">Related Topics</h2>
        <ul>
          <li>
            <span className="font-bold">PSPP UNIT-2:</span> DATA TYPES,
            EXPRESSIONS, STATEMENTS
          </li>
          <li>
            <span className="font-bold">PSPP UNIT-3:</span> CONTROL FLOW,
            FUNCTIONS, STRINGS
          </li>
          <li>
            <span className="font-bold">PSPP UNIT-4:</span> LISTS, TUPLES,
            DICTIONARIES
          </li>
          <li>
            <span className="font-bold">PSPP UNIT-5:</span> FILES, MODULES,
            PACKAGES
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
