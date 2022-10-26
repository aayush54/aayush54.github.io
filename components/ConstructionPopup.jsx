import React, { useState, useEffect } from "react";
import { Modal, Button, Group } from "@mantine/core";
import Image from "next/image";
import styles from "../styles/ConstructionPopup.module.scss";

const ConstructionPopup = () => {
  const [opened, setOpened] = useState(true);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="This site is under construction!"
      >
        <div className={styles.background}></div>
        <p>
          Hi! Thanks for visiting my site. I&apos;m still working on some of the
          cooler, prettier stuff but feel free to look around
        </p>
        <br />
        <br />
      </Modal>
    </>
  );
};

export default ConstructionPopup;
