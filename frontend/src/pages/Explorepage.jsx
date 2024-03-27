import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Repos from "../components/Repos";

const ExplorePage = () => {
  // https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=10
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const exploreRepos = async (language) => {
    setLoading(true);
    setRepos([]);
    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`
      );
      console.log(res);
      const data = await res.json();
      setRepos(data.items);

      setSelectedLanguage(language);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="px-4">
      <div className="max-w-2xl p-4 mx-auto rounded-md bg-glass">
        <h1 className="text-xl font-bold text-center">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap justify-center gap-2 my-2">
          <img
            src="/javascript.svg"
            alt="JavaScript ogo"
            className="cursor-pointer h-11 sm:h-20"
            onClick={() => exploreRepos("javascript")}
          />
          <img
            src="/typescript.svg"
            alt="TypeScript logo"
            className="cursor-pointer h-11 sm:h-20"
            onClick={() => exploreRepos("typescript")}
          />
          <img
            src="/c++.svg"
            alt="C++ logo"
            className="cursor-pointer h-11 sm:h-20"
            onClick={() => exploreRepos("c++")}
          />
          <img
            src="/python.svg"
            alt="Python logo"
            className="cursor-pointer h-11 sm:h-20"
            onClick={() => exploreRepos("python")}
          />
          <img
            src="/java.svg"
            alt="Java logo"
            className="cursor-pointer h-11 sm:h-20"
            onClick={() => exploreRepos("java")}
          />
        </div>
        {repos?.length > 0 && (
          <h2 className="my-4 text-lg font-semibold text-center">
            <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full ">
              {selectedLanguage.toUpperCase()}{" "}
            </span>
            Repositories
          </h2>
        )}
        {!loading && repos?.length > 0 && (
          <Repos repos={repos} alwaysFullWidth />
        )}
        {loading && <Spinner />}
      </div>
    </div>
  );
};
export default ExplorePage;
