"use client"

import React, { useState } from 'react'
import Result from '../components/SearchList'
import Search from '../components/SearchBar'

 export default function SearchPage(){

    const [searchResults,setSearchResults] = useState([]);
    console.log(typeof(searchResults))
  return (
    <div>
        <Search setSearchResults={setSearchResults}/>
        <Result results={searchResults}/>
    </div>
  )
}
