import LOGO_footer from "../assets/LOGO_footer.svg";
import styles from "./Footer.module.css";

export default function Header() {
  return (
    <div className={styles.footer__div}>
      <img src={LOGO_footer} title="logo de Kasa" alt="logo de Kasa"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
