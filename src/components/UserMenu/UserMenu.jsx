import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <div className={styles.container}>
      <p>Welcome, {user.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
