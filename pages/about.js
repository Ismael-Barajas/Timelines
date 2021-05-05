import Navbar from "../Components/navBar";
import { Card, CardContent, Grid, Paper, Typography } from "@material-ui/core";

import styles from "../styles/about.module.css";
import Image from "next/image";

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
                <Typography variant="h3" className={styles.aboutUsHeader}>
                  About Us
                </Typography>
                <Typography variant="body1" className={styles.aboutUsHeader}>
                  A fun little web application project created with the idea of
                  being able to easily search up or share someone’s Github
                  repository history! As a group of CS major students that all
                  had the same thoughts for life after school, we wanted to work
                  on a project that would have us working with new frameworks
                  and technology while also being useful for recruiters and
                  applicants. This application is meant for future applicants
                  (like us) to share our repository history on resumes, LinkedIn
                  Profiles, or portfolio’s, so that recruiters would be able to
                  easily glance through our Github history to see in a
                  consolidated view the amount of contributions we’ve made or
                  repository information in a uniform manner.
                </Typography>
                <br />
                <Typography variant="body1" className={styles.aboutUsHeader}>
                  We hope you enjoy!
                </Typography>
                <br />
                <Typography variant="h4" className={styles.aboutUsHeader}>
                  Created By
                </Typography>
                <Typography variant="body1" className={styles.aboutUsHeader}>
                  <Typography className={styles.aboutUsHeader}>
                    <a href="https://github.com/albertzeap" target="_blank">
                      Albert Paez
                    </a>
                  </Typography>
                  <Typography className={styles.aboutUsHeader}>
                    <a href="https://github.com/britney-py" target="_blank">
                      Britney Fernandez
                    </a>
                  </Typography>
                  <Typography className={styles.aboutUsHeader}>
                    <a href="https://github.com/Ismael-Barajas" target="_blank">
                      Ismael Barajas
                    </a>
                  </Typography>
                  <Typography className={styles.aboutUsHeader}>
                    <a href="https://github.com/kcabrera14" target="_blank">
                      Karla Cabrera
                    </a>
                  </Typography>
                  <Typography className={styles.aboutUsHeader}>
                    <a href="https://github.com/beccslee" target="_blank">
                      Rebecca Lee
                    </a>
                  </Typography>
                </Typography>
                <br />
                <Typography variant="h6" className={styles.aboutUsHeader}>
                  Visit the repo here
                </Typography>
                <Typography>
                  <a
                    href="https://github.com/Ismael-Barajas/Timelines"
                    target="_blank"
                  >
                    <Image
                      src="/github-logo.png"
                      alt="logo"
                      quality={100}
                      width={60}
                      height={60}
                      layout="intrinsic"
                    />
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutPage;
