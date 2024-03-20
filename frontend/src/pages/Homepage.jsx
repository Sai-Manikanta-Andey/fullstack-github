import React from 'react'
import Search from '../components/Search'
import SortRepos from '../components/SortRepos'
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";

const Homepage = () => {
  return (
    <div className='m-4 '>
      <Search/>
      <SortRepos/>
      <div className='flex flex-col items-start justify-center gap-4 md:flex-row'>
        <ProfileInfo/>
        <Repos/>
        
        
      </div>
    </div>
  )
}

export default Homepage