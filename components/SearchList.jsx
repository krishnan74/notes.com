import React, { useState } from "react";
import Link from "next/link";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";

export const SearchList = ({ results }) => {
  const [topicList, setTopicList] = useState();
  const [showDetails, setShowDetails] = useState(
    Array(results.length).fill(false)
  );

  const router = useRouter();

  const handleClick = (item) => {
    setTopicList(item.question);
    console.log(item);
  };

  const toggleDetails = (index) => {
    const updatedDetails = [...showDetails];
    updatedDetails[index] = !updatedDetails[index];
    setShowDetails(updatedDetails);
  };

  const navigate = (item) => {
    router.push(`/read/${item.question}`);
  };

  return (
    <div className="my-[20px] py-3 rounded-xl bg-[rgba(255,255,255,0.4)]">
      {results && results.length > 0 ? (
        <div>
          {results.map((item, id) => (
            <div
              className="flex justify-between items-center py-3 px-7 border-b border-[#9a9a9a] cursor-pointer "
              key={id}
            >
              <div onClick={() => navigate(item)} className="w-[60vw]">
                <p className="font-bold capitalize">{item.question}</p>

                {showDetails[id] && (
                  <p className="border-t border-[#cdcdcd] pt-2 mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nostrum excepturi, rerum dolorem accusamus maiores incidunt
                    commodi quae nam voluptates recusandae libero corporis
                    officiis ducimus facilis quasi ipsum illum harum qui?
                  </p>
                )}
              </div>

              <button onClick={() => toggleDetails(id)}>
                {showDetails[id] ? (
                  <div className="mb-[70px]">
                    <PiCaretUp />
                  </div>
                ) : (
                  <PiCaretDown />
                )}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      {/* <div className="px-4">
        <strong>Selected Topic:</strong> {topicList}
      </div> */}
    </div>
  );
};

export default SearchList;
