import React, { useEffect, useState } from "react";
import { Inter, Lato, IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./readStyles.css";
import {
  PiDownloadSimpleLight,
  PiShareLight,
  PiHeartLight,
  PiHeadphonesLight,
  PiArrowUp,
} from "react-icons/pi";
import { useRouter } from "next/router";
import UnitIndex from "@/components/UnitIndex";
import UnitList from "@/components/UnitsList";

const ibm = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400"] });

const fetchBlog = async (blog) => {
  try {
    const data = await fetch(
      `https://us-east-1.aws.data.mongodb-api.com/app/todosample0-vvcql/endpoint/getBlog?SearchBlog=${blog}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { error: error.message };
  }
};

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    if (id) {
      fetchBlog(id).then((data) => {
        setTopicList(data);
      });
    }
  }, [id]);

  const { subject, unitName, answer } = topicList;

  return (
    <div className={ibm.className}>
      <Navbar />
      <div className={`flex px-4 gap-0 pt-[90px] capitalize`}>
        <div className="w-[15vw] fixed left-[30px] top-[90px] border-r bg-[rgba(255,255,255,0.4)]">
          <h2 className="text-2xl font-bold text-center mt-5 mb-3">Index</h2>
          <UnitIndex unit={unitName} />
        </div>

        <div className="w-[65vw] ml-[16vw]">
          {topicList ? (
            <div className=" bg-[rgba(255,255,255,0.4)] p-10">
              <h1 className="text-3xl font-bold text-center mt-1 mb-3">
                {topicList.subject} Unit {topicList.unit} : {topicList.unitName}
              </h1>
              <div className="">
                <h2 className="text-2xl text-center font-extrabold">
                  {topicList.question}
                </h2>
                <div className="flex justify-end gap-4 mt-4 py-3 pr-3 border-y">
                  <button className="mr-2">
                    <PiDownloadSimpleLight className="inline-block" size={30} />
                  </button>
                  <button className="mr-2">
                    <PiShareLight className="inline-block" size={30} />
                  </button>
                  <button className="mr-2">
                    <PiHeartLight className="inline-block" size={30} />
                  </button>
                  <button>
                    <PiHeadphonesLight className="inline-block" size={30} />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-center mt-2">
                  {" "}
                  PART - {topicList.part}
                </h2>
                <div className="border-sp-2 border-gray-200 my-3">
                  <h3 className="text-lg font-bold">{topicList.question}</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: answer }}
                    className="md-content"
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>

        <UnitList subject={subject} />
      </div>
    </div>
  );
};

export default Blog;
