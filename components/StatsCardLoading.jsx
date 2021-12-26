export const StatsCardLoading = () => {
  const borderColor = "border-gray-200";
  const bgIconColor = "bg-gray-200";
  return (
    <div
      className={`animate-pulse widget w-full p-4 rounded-lg bg-white border-l-4 ${borderColor}`}
    >
      <div className="flex items-center">
        <div
          className={`icon w-14 h-14 p-3.5 text-white rounded-full mr-3 ${bgIconColor}`}
        />
        <div className="flex flex-col justify-center">
          <br />
          <div className="h-6 w-24 bg-gray-200 rounded" />
          <br />
          <div className="h-3 w-24 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};
