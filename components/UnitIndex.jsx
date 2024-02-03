import React from 'react'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'

const fetchUnitIndex=async(index)=>{
    try{
    const data = await fetch();
    const response = data.json();
    return response;
    }
    catch(e){
        console.error('Error fetching data:', e.message);
    return { error: e.message };
    }

}


const UnitIndex = ({index}) => {


    const [UnitIndex,setUnitIndex]=useState(null);
    useEffect(()=>{
        fetchUnitIndex(index).then((data)=>{
            setUnitIndex(data)
        })
    },[]);

  return (
  <div className="w-[16%] fixed left-[30px] border-r bg-[rgba(255,255,255,0.4)]">
  <h2 className="text-2xl font-bold text-center mt-5 mb-3">Index</h2>
  <ul>
    {UnitIndex.map((post) => (
      <li
        key={post.id}
        id="topicList"
        className={`py-2 px-3 cursor-pointer border-b border-gray-200`}
      >
        <p className="text-black hover:underline font-medium">
          {post.question}
        </p>
      </li>
    ))}
  </ul>
</div>
  )
}

export default UnitIndex