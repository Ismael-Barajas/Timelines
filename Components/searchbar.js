import React, { useState } from "react";
import {
  makeStyles,
  InputBase,
  Paper,
  IconButton,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// const styles = {
//   container: {
//     display: "flex",
//     //alignItems: "center",
//     //flexDirection: "column",
//     justifyContent: "center",
//     textAlign: "center",
//     margin: "0.5rem",
//     width: "100%",
//   },
// };
// const useStyles = makeStyles({
//   root: {
//     //flex: 1,
//     //margin: "0.5rem",
//     width: "85%",
//     //alignItems: "center",
//   },
//   input: {
//     alignSelf: "center",
//     justifyContent: "center",
//     background: "#F2F1F9",
//     width: "100%",
//     margin: "1rem",
//   },
// });

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

  const handleInputOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callOnSearchEvent = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    // <div style={styles.container}>
    //   <form className={styles.form} noValidate autoComplete={"off"}>
    //     <TextField
    //       className={styles.textField}
    //       id="outlined-basic"
    //       placeholder="Enter github username"
    //       onChange={handleInputOnChange}
    //       type="text"
    //       variant="outlined"
    //       fullWidth
    //     />
    //     {/*<Input*/}
    //     {/*    placeholder={"Enter github username"}*/}
    //     {/*    style={BarStyles}*/}
    //     {/*    type={'text'}*/}
    //     {/*    value={searchValue}*/}
    //     {/*    onChange={handleInputOnChange}*/}
    //     {/*/>*/}
    //     <input onClick={callOnSearchEvent} type={"submit"} value={"Search"} />
    //   </form>
    // </div>
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
          style={{ backgroundColor: "#cedbd8", marginTop: "15px" }}
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
