import React from "react";
import styles from "./mainheader.module.scss";
import { useTypedText } from "../typingtext";

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {useTypedText("Hello!", 50)}
        <br />
        {useTypedText("I'm Aayush.", 50, 200)}
      </h1>
      <h2>
        {useTypedText(
          "Welcome to my WIP website! I'm currently a student and software engineer. Check out some of my projects!",
          30,
          350
        )}
      </h2>
    </div>
  );
}
