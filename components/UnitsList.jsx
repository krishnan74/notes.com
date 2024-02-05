import React, { useState, useEffect } from "react";
import Link from "next/link";

const fetchData = async (subject) => {
  try {
    const data = await fetch(
      `https://us-east-1.aws.data.mongodb-api.com/app/todosample0-vvcql/endpoint/getSubject?Search=${subject}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { error: error.message };
  }
};

const UnitList = ({ subject }) => {
  const [unitList, setUnitList] = useState([]);

  useEffect(() => {
    fetchData(subject).then((data) => {
      setUnitList(data);
    });
  }, [subject]);

  return (
    <div className="w-[15vw] fixed right-[30px]  top-[90px] border-l px-5 bg-[rgba(255,255,255,0.4)]">
      <h2 className="text-2xl font-bold mb-2 mt-5">Related Topics</h2>
      <ul>
        {unitList.map((group, groupId) => (
          <Link href={`/read/${group.documents[0].question}`}>
            <li key={groupId} className="border-b mb-2">
              <span className="font-bold">
                {subject} UNIT-{group._id}: {group.documents[0].unitName}
              </span>
              <ul>
                {group.documents.map((document, documentId) => (
                  <div>
                    {documentId < 3 && (
                      <li key={documentId}>
                        <span>{document.question},</span>
                      </li>
                    )}
                  </div>
                ))}
              </ul>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UnitList;
