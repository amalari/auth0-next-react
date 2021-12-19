export const ProfileCard = () => {
  return (
    <div className="container w-full bg-white shadow-lg transform duration-200 easy-in-out">
      <div className=" h-32 overflow-hidden">
        <img className="w-full" src="/img/profile-bg.jpg" alt="" />
      </div>
      <div className="flex justify-center px-5 -mt-12">
        <img
          className="h-32 w-32 bg-white p-2 rounded-full"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
      </div>
      <div className=" ">
        <div className="text-center px-14">
          <h2 className="text-gray-800 text-3xl font-bold">Mohit Dhiman</h2>
          <p className="text-gray-400 mt-2">@immohitdhiman</p>
        </div>
        <br />
        <button className="btn-primary w-full">test</button>
      </div>
    </div>
  );
};
