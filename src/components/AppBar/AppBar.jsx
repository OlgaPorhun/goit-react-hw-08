import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import styles from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default AppBar;
