import React, { useState, useEffect } from "react";
import { Modal, Button, Group } from "@mantine/core";
import Image from "next/image";

const ConstructionPopup = () => {
  const [opened, setOpened] = useState(true);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="This site is under construction!"
      >
        <h4>
          Hi! Thanks for visiting my site. I&apos;m still working on some of the
          cooler, prettier stuff but feel free to look around
        </h4>
        <Image src="/wrench.gif" alt="me" width="64" height="64" />
      </Modal>
    </>
  );
};

export default ConstructionPopup;
