import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
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
        {!isLoggedIn && (
          <>
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
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logoutThunk())}>Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
