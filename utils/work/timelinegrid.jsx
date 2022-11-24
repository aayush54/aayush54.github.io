import Image from "next/image";
import { nobleLogo, tiktokLogo, umLogo } from "../../assets";
import { getDate } from "../date";
import styles from "./timelinegrid.module.scss";

export function VTimelineGrid() {
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        <h1>{getDate()}</h1>
        <div className={styles.timelinePoint} />
      </div>
      <div className={styles.timelineGridItemCard}>
        <h2 className={styles.hoverTip}>Hover to zoom.</h2>

        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div
              className={styles.companyLogo}
              style={{ backgroundColor: "#00274C" }}
            >
              <Image
                alt="University of Michigan Logo"
                src={umLogo}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>University of Michigan</h1>
              <h2 className={styles.cardContentDetails}>
                School of Information
              </h2>
              <h2 className={styles.cardContentDetails}>
                09/2022 - <b>present</b>
              </h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            <b>Teaching Assistant</b> SI 670
            <br />• Helping students with machine learning concepts,
            specifically in applying models to real-world applications
            <br />• Testing instructor solutions and evaluating Kaggle
            competition submissions
            <br />• Grading over 100 weekly student responses with structured
            feedback
          </p>
        </div>
      </div>

      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />

      {/* //STUB - section break */}
      {/* <div className={styles.timelineGridItemWide}>
        <h1>03.2019 - 03.2020</h1>
        <h2>Working & learning Web Development in London</h2>
      </div> */}

      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />

      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Tiktok Logo"
                src={tiktokLogo}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Tiktok (Bytedance)</h1>
              <h2 className={styles.cardContentDetails}>New York</h2>
              <h2 className={styles.cardContentDetails}>05/2022 - 08/2022</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            <b>Backend Software Engineer</b>
            <br />• Launched changes to Tiktok's creator marketplace to improve
            creator and advertiser campaign management and reporting
            <br />• Migrated to new upstream database workflow and updated API
            endpoints with new daily statistics for over 8 million creators
            <br />• Integrated backend side of new API endpoint for campaign
            overhaul while working with the frontend and marketing teams
            <br />• Drafted and presented technical design documents with
            project goals and implemented technical feedback from the team
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />

      <div className={styles.timelineGridItemCard}>
        <a href="https://miquizmaker.engin.umich.edu/">
          <div className={styles.cardContent}>
            <div className={styles.cardContentHeader}>
              <div
                className={styles.companyLogo}
                style={{ backgroundColor: "#00274C" }}
              >
                <Image
                  alt="University of Michigan Logo"
                  src={umLogo}
                  height={50}
                  width={50}
                />
              </div>
              <div className={styles.companyInfo}>
                <h1 className={styles.companyTitle}>University of Michigan</h1>
                <h2 className={styles.cardContentDetails}>CAEN</h2>
                <h2 className={styles.cardContentDetails}>05/2021 - 04/2022</h2>
                <h3 className={styles.cardContentDetails}>
                  Click to see project page
                </h3>
              </div>
            </div>
            <p className={styles.cardContentDescription}>
              <b>Web Developer</b>
              <br /> • Worked on a user-friendly, fast quiz application that
              helps professors generate randomized exam problems
              <br /> • Developed a Python flask backend with a MySQL server that
              communicates with a ReactJS frontend application
              <br /> • Deployed website through AWS and worked with client on
              user experience and interface aspects
            </p>
          </div>
        </a>
      </div>

      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemAdjoiningCard} />

      <div className={styles.timelineGridItemCard}>
        <a href="https://najarianlab.ccmb.med.umich.edu/">
          <div className={styles.cardContent}>
            <div className={styles.cardContentHeader}>
              <div
                className={styles.companyLogo}
                style={{ backgroundColor: "#00274C" }}
              >
                <Image
                  alt="University of Michigan Logo"
                  src={umLogo}
                  height={50}
                  width={50}
                />
              </div>
              <div className={styles.companyInfo}>
                <h1 className={styles.companyTitle}>University of Michigan</h1>
                <h2 className={styles.cardContentDetails}>
                  Biomedical & Clinical Informatics Lab
                </h2>
                <h2 className={styles.cardContentDetails}>10/2020 - 05/2021</h2>
                <h3 className={styles.cardContentDetails}>
                  Click to see lab page
                </h3>
              </div>
            </div>
            <p className={styles.cardContentDescription}>
              <b>Research Assistant</b>
              <br />• Explored machine learning algorithms to be applied to
              In-Vehicle Cardiac Monitors, sponsored by Toyota
              <br />• Preprocessed and extracted 100,000+ signals from ECG heart
              rate monitors in the MIT-BIH arrhythmia database
              <br />• Selected 20+ features and classified cardiac
              irregularities with various machine learning models
              <br />• Researched in a team and independently coded algorithms
              using ML papers with 96%+ accuracy, specificity, and sensitivity
            </p>
          </div>
        </a>
      </div>

      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint} />
        <h1>08/2020</h1>
        <h2>Began at University of Michigan</h2>
      </div>
    </div>
  );
}
