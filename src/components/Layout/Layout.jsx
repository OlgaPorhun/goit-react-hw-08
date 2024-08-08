import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
