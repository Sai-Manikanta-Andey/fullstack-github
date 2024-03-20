import Repo from "./Repo";


const Repos = ({repos}) => {
  return (
    <div className={`lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6`}>
      <ol className="relative border-gray-200 border-s ">
       {repos.map((repo)=> <Repo repo={repo} key={repo.id}/>)}

       {repos.length ===0 && <p className="flex items-center justify-center h-32 ">No repos found</p>}
      </ol>
    </div>
  );
};
export default Repos;
