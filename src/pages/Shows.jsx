import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ShowsNav from "../components/ShowsNav";
import Show from "../components/Show";
import styles from "./Shows.module.css";
import axios from "axios";
import notFoundImage from "../assets/not-found.svg";

function Shows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const showName = useParams().shows.replaceAll("-", " ");

  async function search() {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${showName}`
    );
    const extractShows = data.map(obj => obj.show);
    const filterShows = extractShows.filter(
      show =>
        show.name &&
        show.language &&
        show.averageRuntime &&
        show.summary &&
        show.image &&
        show.image.original
    );
    setShows(filterShows);
    setLoading(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    search();
  }, [showName]);

  return (
    <>
      <ShowsNav />
      <section id={styles.showsSection}>
        <div className="container">
          <div className="row">
            {loading ? (
              <div className={styles.loadingStage}>
                <FontAwesomeIcon
                  icon="compact-disc"
                  className={styles.loadingStageIcon}
                />
              </div>
            ) : (
              <div className={styles.shows}>
                {shows.length > 0 ? (
                  shows.map((showObject, index) => (
                    <Show show={showObject} key={index} />
                  ))
                ) : (
                  <div className={styles.notFound}>
                    <img src={notFoundImage} className={styles.notFoundImg} />
                    <h3>
                      Your search produced no results.
                      <br /> Please try again.
                    </h3>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Shows;
