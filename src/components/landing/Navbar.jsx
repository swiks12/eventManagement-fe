import Login from "../../pages/Login";
import Button from "../reusable/Button";

function NavBar() {
  return (
    <>
      <div className="flex space-x-4 justify-end">
        <p className="text-4xl font-extrabold">Event Hive</p>
        <Button data="Log In"/>
        <Button data="Sign Up"/>
      </div>
      <div className="border-b-[1px] border-white w-full mt-3"></div>
    </>
  );
}

export default NavBar;
