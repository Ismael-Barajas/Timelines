import React, { useState, useEffect } from "react";
import TimeLines from "@material-ui/lab/Timeline";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import { CardHeader } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#F5F5DC",
  },

  // title: {
  //   fontSize: 18,
  // },
  // pos: {
  //   marginBottom: 12,
  // },
});

const Timeline = (props) => {
  const timelineData = props.data;
  // console.log(timelineData.data, timelineData.length);
  const classes = useStyles();

  if (timelineData && !timelineData.length) {
    return null;
  }

  const ownerName =
    timelineData.length && timelineData[0].owner.login
      ? timelineData[0].owner.login
      : "";

  return (
    <div>
      <h1 align="center" className={"ownerTitle"}>
        {ownerName}
      </h1>
      <TimeLines align="alternate">
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent key={index}>
              <Card className={classes.root} variant="outlined">
                <CardContent align="center">
                  {/* <div> */}
                  <h2> {item.name} </h2>
                  {item.description && (
                    <p>
                      <b>Description: </b>
                      {item.description}
                    </p>
                  )}
                  <p> {item.updated_at} </p>
                  {/* </div> */}
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimeLines>
    </div>
  );
};

export default Timeline;
