import { Button, Card, CardContent, Grid, Paper } from "@material-ui/core";
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
  Assignment as AssignmentIcon,
} from "@material-ui/icons";
import CountUp from "react-countup";

const Timeline = (props) => {
  let timelineData = props.data;
  let totalContributions = 0;

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

  timelineData.forEach((item) => {
    totalContributions += item.contributions;
  });

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
          <div className={styles.headDiv}>
            <Card className={styles.headCard} variant="outlined">
              <CardContent align="center">
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
                <div
                  className={
                    totalContributions >= 1000
                      ? styles.totalContribDiv1000
                      : totalContributions >= 100 && totalContributions < 1000
                      ? styles.totalContribDiv100
                      : totalContributions >= 50 && totalContributions < 100
                      ? styles.totalContribDiv50
                      : totalContributions >= 10 && totalContributions < 50
                      ? styles.totalContribDiv10
                      : styles.totalContribDiv
                  }
                >
                  <h2>
                    Total Contributions Made:{" "}
                    <CountUp
                      start={1000000}
                      end={totalContributions}
                      duration={4.5}
                      separator=","
                    />
                  </h2>
                </div>
              </CardContent>
            </Card>
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
                          {item.description && <p>{item.description}</p>}
                          {item.homepage && (
                            <p>
                              <b>HomePage: </b>
                              <br />
                              <a href={item.homepage} target="_blank">
                                <u>{item.homepage}</u>
                              </a>
                            </p>
                          )}
                          <p className={styles.contributions}>
                            <b>Contributions Made: </b>
                            {item.contributions}
                          </p>
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
        <div className={styles.shareDiv}>
          <Card className={styles.shareCard} variant="outlined">
            <CardContent align="center">
              <h2>
                Share{" "}
                <Image
                  src={ownerAvatar}
                  alt="avatar"
                  width="30"
                  height="30"
                  layout="intrinsic"
                />{" "}
                {ownerName}'s TimeLine!
              </h2>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Url Copied to ClipBoard!");
                }}
              >
                <AssignmentIcon />
              </Button>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </Grid>
  );
};

export default Timeline;
