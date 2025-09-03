import NavLogo from "../assets/logo.png";
import baseStyles from "./BaseNav.module.css";
import styles from "./HomeNav.module.css";

function HomeNav() {
  return (
    <div className={`row ${styles.navRow}`}>
      <nav>
        <div
          className={styles.navLogoWrapper}
        >
          <img className={baseStyles.navLogoImg} src={NavLogo} />
        </div>
      </nav>
    </div>
  );
}

export default HomeNav;
