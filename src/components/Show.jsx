import { Link, useParams } from "react-router";
import styles from "./Show.module.css";

function Show({ show }) {
  const { shows } = useParams();
  let showImage = show.image.original;
  return (
    <div className={styles.showWrapper}>
      <div className={styles.show}>
        <div className={styles.showDescription}>
          <h2 className={styles.showName} title={show.name}>
            {show.name}
          </h2>
          <div className={styles.showDetails}>
            <p>
              Language:{" "}
              <span className={styles.showDescriptionText}>
                {show.language}
              </span>
            </p>
            <p>
              Genre(s):{" "}
              <span className={styles.showDescriptionText}>
                {show.genres.length > 0 ? show.genres.join(", ") : "N/A"}
              </span>
            </p>
            <p>
              Duration:{" "}
              <span className={styles.showDescriptionText}>
                {show.averageRuntime} minutes
              </span>
            </p>
            <p>
              Rating:{" "}
              <span className={styles.showDescriptionText}>
                {show.rating.average ? `${show.rating.average}/10` : "N/A"}
              </span>
            </p>
          </div>
        </div>
        <div className={styles.showImgWrapper}>
          <img
            src={showImage}
            alt={`${show.name}'s Poster Image`}
            className={styles.showImg}
          />
          <Link
            className={styles.showImgLink}
            to={`/${shows}/${show.name.replaceAll(" ", "-")}`}
            onClick={() => {
              localStorage.setItem("show", JSON.stringify(show));
            }}
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Show;
