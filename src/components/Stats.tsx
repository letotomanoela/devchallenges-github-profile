const Stats = ({ title, num }: { title: string; num: number }) => {
  return (
    <div className="bg-dark p-4 rounded-xl h-max  divide-x-2 divide-primaryGray justify-between flex items-center w-max">
      <h1 className=" pr-5 text-primaryGray">{title}</h1>
      <p className="text-lightGray pl-5">{num}</p>
    </div>
  );
};
export default Stats;
