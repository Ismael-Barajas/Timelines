import { fetchPublicRepos, rateLimit } from "../api/github";
import styles from "../styles/Test.module.css";
import React from "react";

export default function Test() {
  const { data, isError, isLoading } = fetchPublicRepos();
  console.log("1111111", data, isError, " loading? ", isLoading);

  const rateData = rateLimit();
  console.log(rateData);

  if (isLoading) {
    return <p>loading....</p>;
  }

  const ownerName = !isError && data[0].owner.login ? data[0].owner.login : "";
  const remainingRate =
    rateData && rateData.resources.core.remaining
      ? rateData.resources.core.remaining
      : "Loading...";

  return (
    <div>
      <h1 className={styles.ownerTitle}>{ownerName}</h1>
      {data.map((item) => (
        <div className={styles.items}>
          <h2> {item.name} </h2>
          {item.description && (
            <p>
              <b>Description: </b>
              {item.description}
            </p>
          )}
          <p> {item.updated_at} </p>
        </div>
      ))}
      <div className={styles.requests}>
        Remaining API requests: {remainingRate}
      </div>
    </div>
  );
}
