import { Link } from "react-router-dom";
import LOGO_header_desk from "../assets/LOGO_header_desk.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header__div}>
      <img src={LOGO_header_desk} title="logo de Kasa" alt="logo de Kasa"></img>
      <nav>
        <div>
          <Link to="/">Accueil</Link>
        </div>
        <div>
          <Link to="/about">A propos</Link>
        </div>
      </nav>
    </div>
  );
}
