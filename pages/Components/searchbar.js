import React, { useState } from "react";

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const BarStyles = {
        width: '20rem',
        background: '#F2F1F9',
        border: 'none',
        padding: '0.5rem',
    }

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
        <form className={'search'}>
            <h1 style={{ color : 'white', backgroundColor: '#4B4545', width: '1440px', height: '478px', left: '0px', right: '100px', top: '0px'}}>Github Timeline</h1>
            <h2 style={{ color : 'black', backgroundColor: 'grey', width: '1440px', height: '278px', left: '0px', top: '0px'}}>SEARCH AWAY</h2>
            <input
                placeholder={"Enter github username"}
                style={BarStyles}
                type={'text'}
                value={searchValue}
                onChange={handleInputOnChange}
            />
            <input onClick={callOnSearchEvent} type={'submit'} value={'Search'}/>
        </form>
    )
}

export default SearchBar;