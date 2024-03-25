function NavBar() {
  return (
    <>
      <div className="flex space-x-4 justify-end">
        <p className="text-4xl font-extrabold">Event Hive</p>
        <button className="bg-white text-black rounded-xl p-3 hover:bg-gray-100">Login</button>
        <button className="bg-white text-black rounded-xl p-3 hover:bg-gray-100">Sign Up</button>
      </div>
      <div className="border-b-[1px] border-white w-full mt-3"></div>
    </>
  );
}

export default NavBar;
