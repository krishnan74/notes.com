import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const fetchUnitIndex = async (unit) => {
  try {
    const data = await fetch(`https://us-east-1.aws.data.mongodb-api.com/app/todosample0-vvcql/endpoint/getIndex?unitName=${unit}`);
    const response = data.json();
    return response;
  }
  catch (e) {
    console.error('Error fetching data:', e.message);
    return { error: e.message };
  }

}


const UnitIndex = ({ unit }) => {


  const [UnitIndex, setUnitIndex] = useState([]);
  useEffect(() => {
    fetchUnitIndex(unit).then((data) => {
      setUnitIndex(data)
    })
  }, [unit]);
  console.log(unit);
  return (

    <div>
      <ul>
        {UnitIndex.map((topic) => (
          <li
            key={topic.id}
            id="topicList"
            className={`py-2 px-3 cursor-pointer border-b border-red-200`}>
            <Link href={`/read/${topic.question}`} >
              <div className="text-black hover:underline font-medium">
                {topic.question}
              </div>

            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UnitIndex