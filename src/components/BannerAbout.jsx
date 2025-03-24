import styles from "./Banner.module.css";

export default function BannerAbout() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.banner} ${styles.bannerAbout}`}></div>
    </div>
  );
}
