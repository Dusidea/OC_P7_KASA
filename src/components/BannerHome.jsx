import styles from "./Banner.module.css";

export default function BannerHome() {
  return (
    <div className={`${styles.banner} ${styles.bannerHome}`}>
      <p className={styles.title}>Chez vous, partout et ailleurs</p>
    </div>
  );
}
