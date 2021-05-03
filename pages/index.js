import React, { useState, useEffect } from "react";
import SearchBar from "../Components/searchbar";
import Timeline from "../Components/timeline";
import ErrorBoundary from "../Components/error";
import Homepage from "../Components/homepage";
import Navbar from "../Components/navBar";
import ScrollButton from "../Components/scrollButton";
import { useRouter } from "next/router";

const SearchPage = () => {
    const router = useRouter();
    const {
        query: { searchID },
    } = router;
  // activities list to pass to timeline component
  const [activitiesList, setActivitiesList] = useState([]);
  // state for setting error messages returned - pass to error component
  const [error, setError] = useState("");
  const [queryValue, setQueryValue] = useState("");

    useEffect(() => {
        if (searchID && !queryValue) {
            setQueryValue(searchID);
            search(searchID);
        } else if (searchID !== queryValue) {
            setQueryValue(searchID);
        }
    });

  // Prop function passed to searchbar
    const search = (searchValue) => {
        const url = `https://api.github.com/users/${searchValue}/repos`;
        fetch(url)
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
