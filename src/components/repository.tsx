import RepoStat from "./RepoStat";
import ReactTimeAgo from "react-time-ago";

const Repository = ({
  name,
  description,
  fork,
  stars,
  licence,
  updated_at,
}: {
  name: string;
  description: string;
  fork: number;
  stars: number;
  licence: string;
  updated_at: string;
}) => {
  return (
    <div className="w-full h-max  p-5 bg-gradient-to-r from-dark to-darkBlue rounded-lg">
      <p className="font-semibold text-lightGray   ">{name}</p>
      <p className="pt-3 text-secondaryGray">{description}</p>
      <div className="mt-4 flex items-center space-x-3">
        {licence !== null && <RepoStat num={2100} typeIcon="licence" />}

        <RepoStat num={stars} typeIcon="star" />
        <RepoStat num={fork} typeIcon="fork" />
        <p className="text-xs text-lightGray ">
          Updated <ReactTimeAgo date={new Date(updated_at)} />
        </p>
      </div>
    </div>
  );
};
export default Repository;
