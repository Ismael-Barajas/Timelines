import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Timeline } from "./Components/timeline";

export default function Home() {
  const testdata = false;
  return (
    <div className={styles.container}>
      <Timeline data={testdata} />
    </div>
  );
}
