import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { signIn, signOut, useSession } from "next-auth/client";
import { Octokit } from "@octokit/core";
import Image from "next/image";
import React, { useEffect } from "react";

import styles from "../styles/navBar.module.css";

const Navbar = () => {
  const [session] = useSession();

  useEffect(() => {
    if (session) {
      getRate();
      console.log(231);
      console.log(session.accessToken);
    }
  }, []);

  const getRate = async () => {
    const octokit = new Octokit({ auth: `${session.accessToken}` });
    //const rateLimit = await octokit.request("GET /rate_limit");
  };

  return (
    <AppBar className={styles.navbar} position="sticky">
      <Toolbar>
        <Image
          src="/Octocat.png"
          alt="logo"
          quality={100}
          width={74}
          height={60}
          layout="intrinsic"
        />
        <a href="/">
          <Typography variant="h3" className={styles.text}>
            TimeLines
          </Typography>
        </a>
        {!session ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => signIn("github")}
          >
            Sign In with GitHub
          </Button>
        ) : (
          <Button variant="contained" color="secondary" onClick={signOut}>
            {session.user.name}, Sign Out {session.accessToken}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
