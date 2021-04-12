import { AppBar, Typography, Toolbar } from "@material-ui/core";
import Image from "next/image";

import styles from "../styles/navBar.module.css";

const Navbar = () => {
  return (
    <AppBar className={styles.navbar} position="sticky">
      <Toolbar>
        <Image
          src="/Octocat.png"
          alt="logo"
          quality={100}
          width={74}
          height={60}
          layout="intrinsic"
        />
        <Typography variant="h3" className={styles.text}>
          Github Timelines
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
