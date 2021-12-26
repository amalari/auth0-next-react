export const ProfileCardLoading = () => {
  return (
    <div className="animate-pulse container w-full bg-white shadow-lg transform duration-200 easy-in-out">
      <div className=" h-32 overflow-hidden">
        <div className="w-full h-full bg-gray-200" />
      </div>
      <div className="flex justify-center px-5 -mt-12">
        <div className="rounded-full bg-gray-200 h-32 w-32" />
      </div>
      <div className=" ">
        <div className="text-center px-14">
          <br />
          <div className="h-10 w-full bg-gray-200 rounded" />
          <br />
          <div className="h-6 w-full bg-gray-200 rounded" />
        </div>
        <br />
        <div className="h-10 w-full bg-gray-200 rounded" />
      </div>
    </div>
  );
};
