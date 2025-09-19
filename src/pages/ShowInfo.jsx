import styles from "./ShowInfo.module.css";
import ShowsNav from "../components/ShowsNav";
import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

function ShowInfo() {
  const { shows } = useParams();
  const show = JSON.parse(localStorage.getItem("show"));
  const showImage = show.image.original;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function extractSummary(summaryFromAPI) {
    const summary = document.createElement("div");
    summary.innerHTML = summaryFromAPI;
    return summary.textContent.trim();
  }

  return (
    <>
      <ShowsNav />
      <div className={styles.showInfo}>
        <div className={styles.showSummary}>
          <div className={styles.showSummaryImgWrapper}>
            <img
              className={styles.showSummaryImg}
              src={showImage}
              alt={`${show.name}'s Poster Image`}
            />
          </div>
          <div className={styles.showSummaryModalWrapper}>
            <div className={styles.showSummaryModal}>
              <p className={styles.showSummaryPara}>
                {extractSummary(show.summary)}
              </p>

              {show.officialSite ? (
                <p className={styles.showLink}>
                  Click{" "}
                  <b>
                    <a href={show.officialSite} target="_blank">
                      here
                    </a>
                  </b>{" "}
                  to learn more.
                </p>
              ) : (
                <p className={styles.showLink}>
                  <i>*Link is currently unavailable.</i>
                </p>
              )}
              <Link className={styles.backBtn} to={`/${shows}`}>
                <FontAwesomeIcon icon="arrow-left" /> Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowInfo;
