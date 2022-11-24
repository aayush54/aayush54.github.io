import React from "react";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import { VFooter, VMenuBar, VTimelineGrid } from "../../utils";
import styles from "./work.module.scss";

export default function VWork() {
  return (
    <div className={styles.workContainer}>
      <Head>
        <title>Work history</title>
        <meta name="description" content="Aayush Singh Portfolio Page" />
        <meta name="author" content="Aayush Singh" />
        <meta
          name="keywords"
          content="Aayush, Singh, Portfolio, Frontend, Backend, Fullstack, Machine Learning"
        />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
      </Head>
      <VMenuBar activeTab="Work" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade triggerOnce>
            <h1>My Projects</h1>
            <h2>
              I'm currently a Computer Science student at the University of
              Michigan. I plan to graduate in May 2024 with a Master's degree.
              My main interests are in software engineering and machine
              learning. I've interned at Tiktok as a Backend Software Engineer
              and done research in machine learning algorithms at my
              university's biomedical information lab. I've worked at my
              university as both a web developer and currently as a teaching
              assistant. Feel free to check out the details below.
            </h2>
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridContainer}>
            <VTimelineGrid />
          </div>
        </Fade>
      </div>
      <VFooter />
    </div>
  );
}
