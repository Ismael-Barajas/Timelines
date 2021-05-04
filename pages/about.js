import Navbar from "../Components/navBar";
import { Card, CardContent, Grid, Paper, Typography } from "@material-ui/core";

import styles from "../styles/about.module.css";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12}>
          <Paper component="form" className={styles.paper} elevation={8}>
            <Card className={styles.cards} variant="outlined">
              <CardContent align="center">
                <Typography variant="h5">About Us:</Typography>
                <Typography variant="body1">test test test</Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutPage;
