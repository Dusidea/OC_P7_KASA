import { Link } from "react-router-dom";
import LOGO_header_desk from "../assets/LOGO_header_desk.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header__div}>
      <img
        className={styles.header__logo}
        src={LOGO_header_desk}
        title="logo de Kasa"
        alt="logo de Kasa"
      ></img>
      <nav>
        <Link className={styles.header__link} to="/">
          Accueil
        </Link>
        <Link className={styles.header__link} to="/about">
          A propos
        </Link>
      </nav>
    </div>
  );
}
