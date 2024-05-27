import Image from "next/image";
import styles from "./page.module.css";
import { BASE_URL_PATH } from "../utils/constants";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>

      </div>

      <div className={[styles.center, styles.column].join()}>
        <h1>Nick McKinnon</h1>
        <h2>Software Engineer</h2>
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.linkedin.com/in/nickinnon/details/experience/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            LinkedIn <span>-&gt;</span>
          </h2>
          <p>Check out my experience.</p>
        </a>

        <a
          href="https://github.com/nickinnon"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github <span>-&gt;</span>
          </h2>
          <p>Check out some projects.</p>
        </a>

        <a
          href="https://docs.google.com/document/d/18JJ8q_fmNYYm4tj68w3LozZtXoOT1-If/export?format=pdf"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Resume <span className={"fa fa-download"}></span>
          </h2>
          <p>Let's get in touch.</p>
        </a>
      </div>
    </main>
  );
}
