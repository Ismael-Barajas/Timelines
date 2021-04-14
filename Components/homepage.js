import Image from "next/image";
import { Typography } from "@material-ui/core";

import styles from "../styles/homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/caleb-white2.jpg"
        alt="caleb-white"
        layout="intrinsic"
        width={5999}
        height={2412}
        className={styles.homeimage}
      />
      <Typography variant="h6" className={styles.text}>
        With the TimeLines, you can now easily access and view public GitHub
        repositories of programmers.
      </Typography>
    </div>
  );
};

export default Homepage;
