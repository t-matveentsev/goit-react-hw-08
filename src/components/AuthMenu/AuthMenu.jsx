import clsx from "clsx";
import s from "./AuthMenu.module.css";
import { NavLink } from "react-router-dom";

const AuthMenu = () => {
  return (
    <div className={s.wrapper}>
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
        Log In
      </NavLink>
    </div>
  );
};

export default AuthMenu;
