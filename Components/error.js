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
            <Image src="/3x.gif" alt="github logo" width="170" height="170" />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default ErrorBoundary;
