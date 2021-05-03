import React, { useState } from "react";
import {
  makeStyles,
  InputBase,
  Paper,
  IconButton,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "50vw",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "65%",
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const classes = useStyles();
  const router = useRouter();

  const handleInputOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callOnSearchEvent = (e) => {
    e.preventDefault();
    props.search(searchValue);
    router.push(
        { pathname: "/", query: { searchID: searchValue } },
        undefined,
        { shallow: true }
    )
    resetInputField();
  };

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
          className={classes.root}
          style={{
            backgroundColor: "#cedbd8",
            marginTop: "15px",
            marginBottom: "20px",
          }}
        >
          <InputBase
            className={classes.input}
            placeholder="Enter Github Username"
            onChange={handleInputOnChange}
            type="text"
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            onClick={callOnSearchEvent}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
