import { Card, CardContent, Grid, Paper } from "@material-ui/core";
import {
  Timeline as TimeLines,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@material-ui/lab";
import moment from "moment";
import ScrollAnimation from "react-animate-on-scroll";
import styles from "../styles/timeline.module.css";
import "animate.css/animate.compat.css";
import Image from "next/image";
import {
  Code as CodeIcon,
  Visibility as VisibilityIcon,
  DeviceHub as DeviceHubIcon,
  Star as StarIcon,
} from "@material-ui/icons";
import { useState } from "react";

const Timeline = (props) => {
  let timelineData = props.data;

  if (timelineData && !timelineData.length) {
    return null;
  }

  const ownerName =
    timelineData.length && timelineData[0].owner.login
      ? timelineData[0].owner.login
      : "";
  const ownerURL = timelineData[0].owner.html_url;
  const ownerAvatar = timelineData[0].owner.avatar_url;

  timelineData.sort((a, b) => {
    return Date.parse(b.updated_at) - Date.parse(a.updated_at);
  });

  //  const requestContributors = async (url) => {
  //    let contributions;
  //    let response = await fetch(url).then((res) => res.json());
  //    if (response && response.length) {
  //      const owner = response.filter(
  //        (contributor) => ownerName === contributor.login
  //      );
  //      if (owner && owner[0] && owner[0].contributions) {
  //        contributions = owner[0].contributions;
  //      }
  //    }
  //    return contributions;
  //  };

  //  if (timelineData && !timelineData.length) {
  //    return null;
  //  } else {
  //    timelineData = timelineData.map((item) => {
  //      let itemData = {};
  //      let contributions;
  //      if (item && item.contributors_url) {
  //        contributions = Promise.resolve(
  //          requestContributors(item.contributors_url)
  //        ).then((value) => {
  //          //setIsLoading(false);
  //        });
  //      }
  //      itemData = {
  //        owner: {
  //          login: item.owner.login,
  //          html_url: item.owner.html_url,
  //          avatar_url: item.owner.avatar_url,
  //        },
  //        updated_at: item.updated_at,
  //        html_url: item.html_url,
  //        name: item.name,
  //        description: item.description,
  //        homepage: item.homepage,
  //        language: item.language,
  //        watchers_count: item.watchers_count,
  //        stargazers_count: item.stargazers_count,
  //        forks: item.forks,
  //        contributors_url: item.contributors_url,
  //        contributions,
  //      };
  //      return itemData;
  //    });
  //  }

  console.log(timelineData);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12}>
        <Paper component="form" className={styles.paper} elevation={8}>
          <div className={styles.usernameDiv}>
            <Image
              src={ownerAvatar}
              alt="avatar"
              width="50"
              height="50"
              layout="intrinsic"
            />
            <h1 className={styles.h1tag}>
              <a href={ownerURL} target="_blank">
                {ownerName}
              </a>
            </h1>
          </div>
          {!isLoading && (
            <TimeLines align="alternate">
              {timelineData.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineOppositeContent>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                      <p>
                        <b>Last Updated at: </b>
                        {moment(item.updated_at).format("MMM DD, YYYY")}
                      </p>
                    </ScrollAnimation>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent key={index}>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                      <a href={item.html_url} target="_blank">
                        <Card className={styles.cards} variant="outlined">
                          <CardContent align="center">
                            <h2> {item.name} </h2>
                            {item.description && (
                              <p>
                                <b>Description: </b>
                                {item.description}
                              </p>
                            )}
                            {item.homepage && (
                              <p>
                                <b>HomePage: </b>
                                <a href={item.homepage} target="_blank">
                                  <u>{item.homepage}</u>
                                </a>
                              </p>
                            )}
                            {!!item.contributions && (
                              <p>
                                <b>Contributions Made: </b>
                                {item.contributions || ""}
                              </p>
                            )}
                            <div className={styles.iconContainer}>
                              {item.language && (
                                <div className={styles.indivContainer}>
                                  <div>
                                    <CodeIcon />
                                  </div>
                                  <div className={styles.indivItems}>
                                    {item.language}
                                  </div>
                                </div>
                              )}
                              <div className={styles.indivContainer}>
                                <div>
                                  <VisibilityIcon />
                                </div>
                                <div className={styles.indivItems}>
                                  {item.watchers_count}
                                </div>
                              </div>
                              <div className={styles.indivContainer}>
                                <div>
                                  <StarIcon />
                                </div>
                                <div className={styles.indivItems}>
                                  {item.stargazers_count}
                                </div>
                              </div>
                              <div className={styles.indivContainer}>
                                <div>
                                  <DeviceHubIcon />
                                </div>
                                <div className={styles.indivItems}>
                                  {item.forks}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    </ScrollAnimation>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </TimeLines>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Timeline;
