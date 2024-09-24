import Input from "./components/input";
import Repository from "./components/repository";
import Stats from "./components/Stats";
import { useContext, useState } from "react";
import { ProfileContext } from "./contexts/ProfileContext";

const App = () => {
  const { data, isClicked, repository } = useContext(ProfileContext);
  const [limit, setLimit] = useState(true);

  return (
    <main className="w-full min-h-screen bg-secondary">
      <section className="w-full h-[240px] px-2 md:px-0 bg-cover bg-center flex flex-col items-center  justify-center bg-[url('./hero-image-github-profile.png')]">
        <Input />
      </section>
      {isClicked && (
        <section className="h-auto  w-full  px-6 xl:px-0">
          <div className="w-full h-full flex  max-w-6xl xl:mx-auto">
            <div className="size-[120px] flex-shrink-0 bg-secondary rounded-2xl p-2 -mt-10">
              <img
                src={data?.avatar_url}
                alt=""
                className="size-full rounded-2xl"
              />
            </div>
            <div className="mt-3 ml-8 flex gap-2 flex-wrap">
              <Stats num={data?.followers} title="Followers" />
              <Stats num={data?.following} title="Following" />
              <Stats num={data?.location} title="Location" />
            </div>
          </div>
          <div className="w-full h-full  mt-5  max-w-6xl xl:mx-auto">
            <div className="flex flex-col ">
              <p className=" text-[32px] text-lightGray ">{data?.name}</p>
              <p className=" text-lightGray">{data?.bio}</p>
            </div>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-[34px] ">
              {repository !== null &&
                repository?.map((repo: any, index: number) =>
                  limit ? (
                    index < 4 && (
                      <Repository
                        key={repo.id}
                        name={repo.name}
                        description={repo.description}
                        fork={repo.forks}
                        stars={repo.stargazers_count}
                        licence={repo.license}
                        updated_at={repo.updated_at}
                      />
                    )
                  ) : (
                    <Repository
                      key={repo.id}
                      name={repo.name}
                      description={repo.description}
                      fork={repo.forks}
                      stars={repo.stargazers_count}
                      licence={repo.license}
                      updated_at={repo.updated_at}
                    />
                  )
                )}
            </div>
            <div className="py-[46px]">
              <p
                onClick={() => setLimit(false)}
                className="text-center text-secondaryGray"
              >
                View All repository
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
export default App;
