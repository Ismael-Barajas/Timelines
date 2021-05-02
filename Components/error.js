//create a error component when user does not exist
import React from "react";
import Image from "next/image";
import { Grid, Paper, Typography } from "@material-ui/core";

import styles from "../styles/error.module.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { errorMessage } = this.props;
    //if errorMessage received from parent then render
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item xs={8}>
          <Paper component="div" className={styles.paper} elevation={8}>
            <Typography variant="h4" gutterBottom className={styles.text}>
              <b> Username {!!errorMessage && errorMessage}</b>
            </Typography>
            <Image src="/confuseddog.gif" alt="dog gif" width="200" height="200" />
            <Image src ="/confusedcat.gif" alt="gif" width ="200" height ="200" />
            <Image src ="/confusedhusky.gif" alt="gif" width ="200" height ="200" />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default ErrorBoundary;
