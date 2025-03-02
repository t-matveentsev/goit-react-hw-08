import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        to="/contacts"
      >
        Contacts Book
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navigation;
