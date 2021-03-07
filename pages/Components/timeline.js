import React, { useState, useEffect } from "react";

//from my current understanding, data should be sent to the this timeline component
//from the index page. after the search goes through
export const Timeline = (dataProps) => {
  //const [timelineData, setTimelineData] = useState(0);
  //useEffect(() => {});
  console.log(dataProps);
  if (dataProps.data) {
    return <div>loading</div>;
  }
  return (
    <div>
      timelinestuff
      <div>memes</div>
    </div>
  );
};
//next I wanna set this up to be able to use my repo data while
//so that when the search functionality is complete, this component should be ready
//for its data.
//We need to choose what css library we want to use.
