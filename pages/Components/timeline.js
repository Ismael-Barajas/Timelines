import React, { useState, useEffect } from "react";
import styles from "../../styles/Test.module.css";
import TimeLines from "@material-ui/lab/Timeline";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";

const Timeline = (props) => {
  const timelineData = props.data;
  console.log(timelineData.data, timelineData.length);

  if (timelineData && !timelineData.length) {
    return null;
  }

  const ownerName =
    timelineData.length && timelineData[0].owner.login
      ? timelineData[0].owner.login
      : "";

  return (
    <div>
      <h1 className={styles.ownerTitle}>{ownerName}</h1>
      <TimeLines align="alternate">
        {timelineData.map((item, index) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div key={index}>
                <h2> {item.name} </h2>
                {item.description && (
                  <p>
                    <b>Description: </b>
                    {item.description}
                  </p>
                )}
                <p> {item.updated_at} </p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimeLines>
    </div>
  );
};

export default Timeline;
