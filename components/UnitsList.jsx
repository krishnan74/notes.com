import React from 'react'
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react'

const fetchData = async (id) => {
  try {
    const data = await fetch(
      `https://us-east-1.aws.data.mongodb-api.com/app/todosample0-vvcql/endpoint/getUnit?SearchUnit=${id}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return { error: error.message };
  }
};


const UnitList = ({unit}) => {

  const router = useRouter();
  const { id } = router.query;
  const [unitList, setUnitList] = useState(null);

  useEffect(() => {
    if (id) {
      fetchData(id).then((data) => {
        setUnitList(data);
      });
    }
  }, [id]);

  return (
    <div className="w-1/6 fixed right-[30px] border-l px-5 bg-[rgba(255,255,255,0.4)]">
        <h2 className="text-2xl font-bold mb-2 mt-5">Related Topics</h2>
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
  )
}

export default UnitList