import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Projects.module.scss";

import data from "../data/projects.json";

export default function Projects() {
  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Projects</h1>

        <p className={styles.description}>
          Here&apos;s stuff I&apos;ve worked on
        </p>

        <div className={styles.grid}>
          {data.map((card) => {
            return (
              <a href={card.link} className={styles.card} key={styles.name}>
                <h2>{card.name} &rarr;</h2>
                <p>{card.description}</p>
              </a>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}