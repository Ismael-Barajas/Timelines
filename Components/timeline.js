import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Switch,
  Typography,
} from "@material-ui/core";
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

const Timeline = (props) => {
  const isempty = props.data;
  if (isempty && !isempty.length) {
    return null;
  }

  const [timelineData, setTimelineData] = useState(props.data);
  const [isDescending, setIsDescending] = useState(false);
  //const [isLoading, setLoading] = useState(true);

  const ownerName =
    timelineData.length && timelineData[0].owner.login
      ? timelineData[0].owner.login
      : "";
  const ownerURL = timelineData[0].owner.html_url;
  const ownerAvatar = timelineData[0].owner.avatar_url;

  useEffect(() => {
    setTimelineData(
      props.data.sort((a, b) => {
        return Date.parse(b.updated_at) - Date.parse(a.updated_at);
      })
    );
  }, [props.data]);

  const handleSwitchChange = () => {
    if (isDescending) {
      setTimelineData(
        timelineData.sort((a, b) => {
          return Date.parse(b.updated_at) - Date.parse(a.updated_at);
        })
      );
      setIsDescending(false);
      console.log(timelineData);
    } else {
      setTimelineData(
        timelineData.sort((a, b) => {
          return Date.parse(a.updated_at) - Date.parse(b.updated_at);
        })
      );
      setIsDescending(true);
      console.log(timelineData);
    }
  };
  console.log("outside", timelineData);

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
            <Typography component="div">
              <Grid component="label" container alignItems="center">
                <Grid item>Latest</Grid>
                <Grid item>
                  <Switch
                    checked={isDescending}
                    color="primary"
                    onChange={handleSwitchChange}
                  />
                </Grid>
                <Grid item>Oldest</Grid>
              </Grid>
            </Typography>
          </div>
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
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Timeline;
