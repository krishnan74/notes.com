import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

import Link from 'next/link';

export const SearchList = ({ results }) => {
  const [topicList, setTopicList] = useState();
  const router = useRouter();


  const handleClick = (item) => {
    setTopicList(item.question);
    console.log(item);

  };

  return (
    <div className='m-[20px] p-[20px] rounded-xl bg-[rgba(255,255,255,0.4)]'>
      {results && results.length > 0 ? (
        <div>
          {results.map((item, id) => (
            <Link href={`/read/${item.question}`}>
              <div
                className='p-[5px] border-b-2 border-grey'
                key={id} 
                onClick={() => handleClick(item)} >
              </div>
            {item.question}
            </Link>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <strong>Selected Topic:</strong> {topicList}
      </div>
    </div>
  );
};

export default SearchList;