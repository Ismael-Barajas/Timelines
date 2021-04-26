import React, { useState, useEffect } from "react";
import SearchBar from "../Components/searchbar";
import Timeline from "../Components/timeline";
import ErrorBoundary from "../Components/error";
import Homepage from "../Components/homepage";
import Navbar from "../Components/navBar";
import ScrollButton from "../Components/scrollButton";

const SearchPage = () => {
  // activities list to pass to timeline component
  const [activitiesList, setActivitiesList] = useState([]);
  // state for setting error messages returned - pass to error component
  const [error, setError] = useState("");

  // Prop function passed to searchbar
    const search = (searchValue) => {
        const headers = new Headers();
        headers.append('Authorization', process.env.ACCESS_TOKEN);
        const url = `https://api.github.com/users/${searchValue}/repos`;
        fetch(url, {
            method: 'GET',
            headers,
        })
            .then((response) => response.json())
            .then((json) => {
                if (json) {
                    if (json.length) {
                        setActivitiesList(json);
                        setError("");
                    } else if (json.message || !json.length) {
                        // receive back some json error message or user has no data to show
                        const errorMessage = json.message
                            ? json.message
                            : `${searchValue} has no GitHub repositories to show.`;
                        setError(errorMessage);
                        setActivitiesList([]);
                    }
                }
            });

        // display ratelimiting to console for testing purposes -- remove later
        const ratelimitURL = "https://api.github.com/rate_limit";
        fetch(ratelimitURL, {
            method: 'GET',
            headers,
        }).then((response) => response.json()).then((json) => console.log(json));
    };

  return (
    <div>
      <Navbar />
      <Homepage />
      <SearchBar search={search} />
      {error ? (
        <ErrorBoundary errorMessage={error} />
      ) : (
        <Timeline data={activitiesList} />
      )}
      <ScrollButton />
    </div>
  );
};

export default SearchPage;
