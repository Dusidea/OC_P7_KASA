import styles from "./Cards.module.css";

export default function Cards() {
  return (
    <>
      <div className={styles.cardblock}>
        <a className={styles.card} href="">
          <p className={styles.card__text}>Titre de la location</p>
        </a>
        <a className={styles.card} href="">
          <p className={styles.card__text}>Titre de la location</p>
        </a>
        <a className={styles.card} href="">
          <p className={styles.card__text}>Titre de la location</p>
        </a>
        <a className={styles.card} href="">
          <p className={styles.card__text}>Titre de la location</p>
        </a>
        <a className={styles.card} href="">
          <p className={styles.card__text}>Titre de la location</p>
        </a>
        <a className={styles.card} href="">
          <p className={styles.card__text}>Titre de la location</p>
        </a>
      </div>
    </>
  );
}
