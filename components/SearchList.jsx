import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Read from '@/app/read/page';

export const SearchList = ({ results }) => {
  const [topicList, setTopicList] = useState();
  const router = useRouter();


  const handleClick = (item) => {
    setTopicList(item.question);
    console.log(item);
    router.push('/read');

  };

  return (
    <div className='m-[20px] p-[20px] rounded-xl bg-[rgba(255,255,255,0.4)]'>
      {results && results.length > 0 ? (
        <div>
          {results.map((item, id) => (
            <div 
            className='p-[5px] border-b-2 border-grey'
            key={id} 
            onClick={() => handleClick(item)} >
            {item.question}
            </div>
          ))}
        </div>
      ) : (
        <div>NO RESULTS BRO</div>
      )}
      <div>
        <strong>Selected Topic:</strong> {topicList}
      </div>
      {topicList && <Read topic={topicList} />}
    </div>
  );
};

export default SearchList;
