import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);

  return (
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
