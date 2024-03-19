import React from 'react'
import Search from '../components/Search'
import SortRepos from '../components/SortRepos'
import ProfileInfo from "../components/ProfileInfo";
import Repo from "../components/Repo";

const Homepage = () => {
  return (
    <div className='m-4 '>
      <Search/>
      <SortRepos/>
      <div className='flex flex-col items-start justify-center gap-4 lg:flex-row'>
        <ProfileInfo/>
        <Repo/>
        <Repo/>
        <Repo/>
        <Repo/>
      </div>
    </div>
  )
}

export default Homepage