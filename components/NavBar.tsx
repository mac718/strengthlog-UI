import Link from "next/link";
import styles from "./NavBar.module.css";

type NavBarProps = {
  username: string | undefined;
};

const NavBar = ({ username }: NavBarProps) => {
  return (
    <nav className={styles.navbar}>
      <div>Strengthlog</div>
      <div>
        <Link href="/calender">Calender</Link>
      </div>
      <div>{username}</div>
    </nav>
  );
};

export default NavBar;
