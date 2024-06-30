import "./Sidebar.css";
import {
  FaArrowRightToBracket,
  FaListCheck,
  FaCartArrowDown,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <span>
            <FaArrowRightToBracket />
          </span>
          <p>Add items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <span>
            <FaListCheck />
          </span>
          <p>List items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <span>
            <FaCartArrowDown />
          </span>
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
