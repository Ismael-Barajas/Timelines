//import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
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
import styles from "../styles/timeline.module.css";

// const useStyles = makeStyles({
//   root: {
//     //backgroundColor: "#F5F5DC",
//   },
//   paper: {
//     width: "80vw",
//     backgroundColor: "#6D9387",
//   },
// });

const Timeline = (props) => {
  const timelineData = props.data;
  // const classes = useStyles();

  if (timelineData && !timelineData.length) {
    return null;
  }

  const ownerName =
    timelineData.length && timelineData[0].owner.login
      ? timelineData[0].owner.login
      : "";

  timelineData.sort((a, b) => {
    return Date.parse(b.updated_at) - Date.parse(a.updated_at);
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
        <Paper
          component="form"
          className={styles.paper}
          elevation={3}
          // style={{ color: "#D3C6B7" }}
        >
          <h1 align="center" className={"ownerTitle"}>
            {ownerName}
          </h1>
          <TimeLines align="alternate">
            {timelineData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent>
                  <p>
                    <b>Last Updated at: </b>
                    {moment(item.updated_at).format("MMM DD, YYYY")}
                  </p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent key={index}>
                  <Card
                    className={styles.cards}
                    variant="outlined"
                    //style={{ backgroundColor: "#CEDBD8", color: "black" }}
                  >
                    <CardContent align="center">
                      <h2> {item.name} </h2>
                      {item.description && (
                        <p>
                          <b>Description: </b>
                          {item.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
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