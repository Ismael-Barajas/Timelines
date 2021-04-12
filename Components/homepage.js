import Image from "next/image";

import styles from "../styles/homepage.module.css";

const Homepage = () => {
  return (
    <>
      <Image
        src="/caleb-white2.jpg"
        alt="caleb-white"
        layout="intrinsic"
        width={5999}
        height={2412}
        className={styles.homeimage}
      />
    </>
  );
};

export default Homepage;
