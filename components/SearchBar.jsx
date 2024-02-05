import { PiMagnifyingGlass } from "react-icons/pi";
import React, { useEffect, useState } from "react";

export const SearchBar = ({ setSearchResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    console.log(value);
    const data = await fetch(
      `https://us-east-1.aws.data.mongodb-api.com/app/todosample0-vvcql/endpoint/get?Search=${value}`
    );
    const response = await data.json();
    console.log("Result", response);
    setSearchResults(response);
  };

  // useEffect(() => {
  //   fetchData(value);

  // }, []);
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="topic-search-box relative z-30">
      <input
        type="text"
        name=""
        value={input}
        className="border-white border-2 bg-[#f8f8f8] h-[50px] rounded-full pl-7 w-[400px]"
        placeholder="search for what you want to study..."
        onChange={(e) => handleChange(e.target.value)}
      />
      <button>
        <PiMagnifyingGlass className="absolute top-4 right-6 text-gray-500" />
      </button>
    </div>
  );
};

export default SearchBar;
