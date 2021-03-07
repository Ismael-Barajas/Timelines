import React, { useState, useEffect } from "react";
import SearchBar from "./Components/searchbar";
import styles from "../styles/Test.module.css";

const SearchPage = () => {
  // activities list to pass to timeline component
  const [activitiesList, setActivitiesList] = useState([]);
  // state for setting error messages returned - pass to error component
  const [error, setError] = useState('');

  // Prop function passed to searchbar
  const search = searchValue => {
    const url = `https://api.github.com/users/${searchValue}/repos`;
    fetch(url).then(response => response.json()).then(json => {
      if (json && json.length) {
        console.log('got json response ', json);
        setActivitiesList(json);
      } else if (json && json.message) {
        // receive back some json error message
        setError(json.message);
        console.log('No user found ');
      }
    })
  }

  const ownerName = activitiesList && activitiesList.length &&
  activitiesList[0].owner.login ?activitiesList[0].owner.login : "";

  return (
      <div>
        <SearchBar search={search} />
        <div>
          <h1 className={styles.ownerTitle}>{ownerName}</h1>
          {activitiesList.map((item, index) => (
              <div className={styles.items} key={index}>
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
        </div>
      </div>
  )

}

export default SearchPage;