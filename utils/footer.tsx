import { VIcon } from "./icon";
import {
  gmailLogo,
  gmailLogoHover,
  linkedInLogo,
  linkedInLogoHover,
  gitHubLogo,
  gitHubLogoHover,
} from "../assets";
import styles from "./footer.module.scss";

export function VFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.goUpSquare} />
      <h4 className={styles.copyrights}>
        ©2021
        <br />
        Build with <span>Next.js/Javascript</span>
      </h4>
      <div className={styles.icons}>
        <VIcon
          defaulIcon={linkedInLogo}
          onHoverIcon={linkedInLogoHover}
          href="https://www.linkedin.com/in/aayush-singh24/"
          height="30px"
          width="30px"
          name="LinkedIn"
        />
        <VIcon
          defaulIcon={gmailLogo}
          onHoverIcon={gmailLogoHover}
          href="mailto:singhaa@umich.edu"
          height="30px"
          width="30px"
          name="Gmail"
        />
        <VIcon
          defaulIcon={gitHubLogo}
          onHoverIcon={gitHubLogoHover}
          href="https://github.com/aayush54"
          height="30px"
          width="30px"
          name="GitHub"
        />
      </div>
    </footer>
  );
}
