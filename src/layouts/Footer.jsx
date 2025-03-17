import LOGO_footer from "../assets/LOGO_footer.svg";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer__div}>
      <img src={LOGO_footer} title="logo de Kasa" alt="logo de Kasa"></img>
      <h4 className={styles.footer__div__text}>
        © 2020 Kasa. All rights reserved
      </h4>
    </div>
  );
}
