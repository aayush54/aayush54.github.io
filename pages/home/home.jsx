import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { VFooter, VMainHeader, VMenuBar, VToolsTech } from "../../utils";
import { chevronDown, profilePicture } from "../../assets";
import { ConstructionPopup } from "../../components";
import styles from "./home.module.scss";

export default function VHome() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Aayush Singh</title>
        <meta name="description" content="This is my portfolio page." />
        <meta name="author" content="Aayush Singh" />
        <meta
          name="keywords"
          content="Aayush, Singh, Software, Developer, Frontend, Engineer"
        />
        <meta property="og:image" content="/portfolioPage.png?" key="ogimage" />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
      </Head>
      <VMenuBar activeTab="Home" />
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introduction}>
            <VMainHeader />
            <div className={styles.profilePicture}>
              {/* <Image alt="Website logo for Aayush Singh" src={profilePicture} /> */}
              <div className={styles.divPic}>A</div>
            </div>
          </div>
          <div className={styles.swipeDownIcon}>
            <Image
              alt="Chevron down icon."
              src={chevronDown}
              width="40px"
              height="15px"
            />
          </div>
        </div>
        <div className={styles.workHistory}>
          <div className={styles.linkBox}>
            <Fade triggerOnce>
              <h1 className={styles.linkBoxTitle}>Projects</h1>
              <h2 className={styles.linkBoxTextContent}>
                Click here to find out about some of my past projects. Learn
                about my previous internships, school work, and personal
                projects.
              </h2>
              <Link href={`/work`}>
                <a className={styles.linkBoxButton}>Check out my projects</a>
              </Link>
            </Fade>
          </div>
          <div className={styles.workHistoryBackground} />
        </div>
        <div className={styles.technologiesAndTools}>
          <Fade triggerOnce>
            <h1>Tools & Tech I've worked with</h1>
            <VToolsTech />
          </Fade>
        </div>
        {/* <div className={styles.personalProjects}>
          <div className={styles.linkBox}>
            <Fade>
              <h1 className={styles.linkBoxTitle}>About me</h1>
              <h2 className={styles.linkBoxTextContent}>
                Here you can find out more about me, my hobbies and personal
                project I'm currently working on.
              </h2>
              <Link href={`/about/about`}>
                <a className={styles.linkBoxButton}>
                  Get to know more about me
                </a>
              </Link>
            </Fade>
          </div>
          <div className={styles.personalProjectsBackground} />
        </div> */}
      </div>
      <VFooter />
    </div>
  );
}
