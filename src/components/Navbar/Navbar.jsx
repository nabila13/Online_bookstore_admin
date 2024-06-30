import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { FaUserLarge } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <div className="profile">
        <FaUserLarge />
        <span>
          <b> Admin</b>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
