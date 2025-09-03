import { Link, useNavigate } from "react-router";
import styles from "./ShowsNav.module.css";
import baseStyles from "./BaseNav.module.css";
import NavLogo from "../assets/logo.png";
import ShowsSearchBar from "./ui/ShowsSearchBar";

function ShowsNav() {
  const navigate=useNavigate()
  return (
    <div className={`${styles.navRow} ${styles.navRow}`}>
      <nav className="row">
        <div
          className={styles.navLogoWrapper}
        >
          <img
            className={`${baseStyles.navLogoImg} ${styles.navLogoImg}`}
            src={NavLogo}
            onClick={()=>navigate("/")}
          />
        </div>
        <ShowsSearchBar />
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default ShowsNav;
