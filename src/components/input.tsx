import { useState, useEffect, useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";
const Input = () => {
  const { data, setData, setIsClicked, setRepository } =
    useContext(ProfileContext);
  const [searchValue, setSearchValue] = useState("letotomanoela");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (searchValue !== "") {
      const getData = async () => {
        setIsError(false);
        const res = await fetch(`https://api.github.com/users/${searchValue}`);
        const success = await res.ok;
        if (success) {
          const dataJson = await res.json();
          setData(dataJson);

          const getRepo = await fetch(dataJson?.repos_url);
          const repoJson = await getRepo.json();
          setRepository(repoJson);

          return;
        }
        setIsError(true);
      };
      getData();
      return;
    }

    setData(null);
  }, [searchValue]);
  return (
    <>
      <div className="w-full flex space-x-4 px-4 max-w-xl  py-4 h-max rounded-lg mt-8 bg-secondary">
        <img alt="search-iconn" src={"./Search.svg"} />
        <input
          placeholder="username"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className="w-full bg-transparent outline-none placeholder:text-secondaryGray text-lightGray"
        />
      </div>
      {data !== null && !isError && (
        <div
          onClick={() => {
            setIsClicked(true);
          }}
          className="w-full cursor-pointer  flex items-center max-w-xl py-2 h-max  bg-secondary rounded-lg mt-2"
        >
          <img
            src={data?.avatar_url}
            alt=""
            className="size-20  rounded-xl ml-2 mr-3"
          />
          <div>
            <h1 className="text-lg font-semibold text-lightGray">
              {data?.name}
            </h1>
            <p className=" text-lightGray">{data?.bio}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Input;
