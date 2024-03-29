import Login from "../../pages/Login";
import Button from "../reusable/Button";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="flex space-x-4 justify-end">
        <p className="text-4xl font-extrabold">Event Hive</p>
        <Link to="/login">
          <Button data="Log In" />
        </Link>
        <Link to="/signup">
          <Button data="Sign Up" />
        </Link>
      </div>
      <div className="border-b-[1px] border-white w-full mt-3"></div>
    </>
  );
}

export default NavBar;
