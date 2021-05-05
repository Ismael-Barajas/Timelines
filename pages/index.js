import React, { useState, useEffect } from "react";
import SearchBar from "../Components/searchbar";
import Timeline from "../Components/timeline";
import ErrorBoundary from "../Components/error";
import Homepage from "../Components/homepage";
import Navbar from "../Components/navBar";
import ScrollButton from "../Components/scrollButton";
import { useRouter } from "next/router";
import Head from "next/head";

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
            let contributorsurl = [];
            let callsToMake = json
              .filter((res) => {
                if (res.size === 0) return false;
                return true;
              })
              .map((result) => {
                contributorsurl.push(result.contributors_url);
                return fetch(result.contributors_url);
              });
            Promise.all(callsToMake)
              .then((contributorResults) => {
                return Promise.all(
                  contributorResults.map((res) => {
                    return res.json();
                  })
                );
              })
              .then((response) => {
                const objs = response.flatMap((res) => {
                  const z = res.flatMap((result) => {
                    return {
                      login: result.login,
                      contributions: result.contributions,
                    };
                  });
                  return { z };
                });
                let newObjs = objs.map((res, index) => {
                  res.contributors_url = contributorsurl[index];
                  return res;
                });
                let newData = json.map((res) => {
                  let temp = 0;
                  if (res.size === 0) {
                    return {
                      owner: {
                        login: res.owner.login,
                        html_url: res.owner.html_url,
                        avatar_url: res.owner.avatar_url,
                      },
                      updated_at: res.updated_at,
                      html_url: res.html_url,
                      name: res.name,
                      description: res.description,
                      homepage: res.homepage,
                      language: res.language,
                      watchers_count: res.watchers_count,
                      stargazers_count: res.stargazers_count,
                      forks: res.forks,
                      size: res.size,
                      contributions: 0,
                    };
                  }
                  newObjs.forEach((r) => {
                    if (r.contributors_url === res.contributors_url) {
                      if (r.z.length === 0) {
                        temp = 0;
                      } else {
                        r.z.forEach((x) => {
                          if (res.owner.login === x.login) {
                            temp = x.contributions;
                          }
                        });
                      }
                    }
                  });
                  return {
                    owner: {
                      login: res.owner.login,
                      html_url: res.owner.html_url,
                      avatar_url: res.owner.avatar_url,
                    },
                    updated_at: res.updated_at,
                    html_url: res.html_url,
                    name: res.name,
                    description: res.description,
                    homepage: res.homepage,
                    language: res.language,
                    watchers_count: res.watchers_count,
                    stargazers_count: res.stargazers_count,
                    forks: res.forks,
                    size: res.size,
                    contributions: temp,
                  };
                });
                setActivitiesList(newData);
                setError("");
              });
            // .catch((error) => setError(error));
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
      <Head>
        <title>TimeLines</title>
      </Head>
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
