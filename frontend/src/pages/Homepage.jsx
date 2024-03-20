import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import SortRepos from '../components/SortRepos'
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import toast from 'react-hot-toast';
import Spinner from "../components/Spinner"

const Homepage = () => {
  const [user,setUser]=useState(null)
  const [repos,setRepos]= useState([])
  const [loading,setLoading] =useState(false)
  const [sortType,setsortType] = useState("recent")
  
  const getUserProfile=async ()=>{
    setLoading(true)
    try {
      const res = await fetch(
        "https://api.github.com/users/Sai-Manikanta-Andey"
      );
      const userData =await res.json();
      setUser(userData)

      const repos = await fetch(
        "https://api.github.com/users/Sai-Manikanta-Andey/repos"
      );

      const reposData = await repos.json()
      setRepos(reposData)
      console.log("user:",userData);
      console.log("repos:",reposData);
    } catch (error) {
      toast.error("Failed to fetch")
    }finally{
      setLoading(false)
    }
  }
  
  useEffect(()=>{
    getUserProfile()
  },[])
  
  return (
    <div className="m-4 ">
      <Search />
      <SortRepos />
      <div className="flex flex-col items-start justify-center gap-4 md:flex-row">
        {user && !loading && <ProfileInfo userProfile={user} />}
        {repos.length > 0 && !loading && <Repos repos={repos} />}

        {loading && <Spinner />}
      </div>
    </div>
  );
}

export default Homepage