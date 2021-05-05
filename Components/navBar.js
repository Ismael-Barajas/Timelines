import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../styles/navBar.module.css";

const Navbar = () => {
  const router = useRouter();

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
        <a href="/">
          <Typography variant="h3" className={styles.text}>
            TimeLines
          </Typography>
        </a>
      </Toolbar>
      <div className={styles.aboutButton}>
        <Button
          variant="outlined"
          onClick={() => router.push("/about")}
          color="inherit"
          className={styles.button}
        >
          About
        </Button>
      </div>
    </AppBar>
  );
};

export default Navbar;
