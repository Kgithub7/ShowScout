import styles from "./Home.module.css";
import HomeImg from "../assets/home-image.svg";
import HomeNav from "../components/HomeNav";
import HomeSearchBar from "../components/ui/HomeSearchBar";

function Home() {
  return (
    <>
      <HomeNav />
      <section id={styles.landingPage}>
        <header>
          <div className="row">
            <div className={styles.headerDescription}>
              <h1 className={styles.headerTitle}>
                Find All Your Favorite Shows
              </h1>
              <HomeSearchBar />
              <div className={styles.headerImgWrapper}>
                <img src={HomeImg} className={styles.headerImg} alt="" />
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Home;
