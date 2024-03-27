import React, { useCallback, useEffect, useState } from "react";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const Homepage = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setsortType] = useState("recent");

  const getUserProfile = async (username = "Sai-Manikanta-Andey") => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`
      );
      const userData = await res.json();
      setUser(userData);

      const repos = await fetch(
        `https://api.github.com/users/${username}/repos`
      );

      const reposData = await repos.json();
      setRepos(reposData);
      console.log("user:", userData);
      console.log("repos:", reposData);
      return { userData, reposData };
    } catch (error) {
      toast.error("Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setUser(null);
    const { userData, reposData } = await getUserProfile(username);
    setUser(userData);
    setRepos(reposData);
    setLoading(false);
  };

  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortType === "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (sortType === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count);
    }
    setsortType(sortType);
    setRepos([...repos]);
  };

  return (
    <div className="m-4 ">
      {user?.message === "Not Found" ? (
        <p className="font-bold text-center">User not found</p>
      ) : (
        <>
          {" "}
          <Search onSearch={onSearch} />
          {Repos.length > 0 && (
            <SortRepos sortType={sortType} onSort={onSort} />
          )}
          <div className="flex flex-col items-start justify-center gap-4 md:flex-row">
            {user && !loading && <ProfileInfo userProfile={user} />}
            {!loading && <Repos repos={repos} />}

            {loading && <Spinner />}
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
