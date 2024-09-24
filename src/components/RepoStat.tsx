const RepoStat = ({
  num,
  typeIcon,
}: {
  num: number | string;
  typeIcon: "star" | "licence" | "fork";
}) => {
  return (
    <div className="flex items-center space-x-1">
      <img
        src={
          typeIcon === "star"
            ? "./Star.svg"
            : typeIcon === "licence"
            ? "./Chield_alt.svg"
            : "./Nesting.svg"
        }
        alt=""
      />
      <p className="text-lightGray">{num}</p>
    </div>
  );
};
export default RepoStat;
