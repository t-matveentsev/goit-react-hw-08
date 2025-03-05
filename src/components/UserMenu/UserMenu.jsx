import { useDispatch, useSelector } from "react-redux";
import { logoutThunk, refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing, selectUser } from "../../redux/auth/selectors";

import s from "./UserMenu.module.css";
import { useEffect } from "react";

const UserMenu = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? null : (
    <div className={s.wrapper}>
      <p>Welcome, {users.name}</p>
      <button
        className={s.logoutBtn}
        type="button"
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
