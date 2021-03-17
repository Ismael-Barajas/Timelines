import React, { useState } from "react";
import {
    Input,
    makeStyles,
    TextField,
} from "@material-ui/core";

const styles = {
    container: {
        // flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        // justifyContent: 'center',
        margin: '0.5rem'
    },
}
const useStyles = makeStyles({
        root: {
            flex: 1,
            // alignItems: 'center',
            margin: '0.5rem'
        },
        input: {
            alignSelf: 'center',
            justifyContent: 'center',
            background: '#F2F1F9',
            width: '40rem',
            margin: '1rem',
        }
    }
);

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const classes = useStyles();

    const handleInputOnChange = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue('');
    }

    const callOnSearchEvent = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <div style={styles.container}>
            <form className={classes.root} noValidate autoComplete={'off'}>
                <TextField
                    className={classes.input}
                    id={'outlined-basic'}
                    placeholder={'Enter github username'}
                    onChange={handleInputOnChange}
                    type={'text'}
                    variant={'outlined'}
                />
                {/*<Input*/}
                {/*    placeholder={"Enter github username"}*/}
                {/*    style={BarStyles}*/}
                {/*    type={'text'}*/}
                {/*    value={searchValue}*/}
                {/*    onChange={handleInputOnChange}*/}
                {/*/>*/}
                <div>
                    <input onClick={callOnSearchEvent} type={'submit'} value={'Search'}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;