import React, { useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import './Header.scss'

function Header({ countries, setQueryString }) {

    const [country, setCountry] = useState("worldwide")
    const handleChange = (event) => {
        const countryCode = event.target.value;
        setCountry(countryCode);
        setQueryString(countryCode);
    };

    return (
        <div className="app_header">
            <div className="app__header__title">
                <h1>Covid-19 Live Tracker</h1>
            </div>
            <div className="app__header__select-box">
                <FormControl variant="outlined" className="app__form-control" >
                    <InputLabel id="demo-simple-select-outlined-label">Countries</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={country}
                        onChange={handleChange}
                        label="Countries"
                    >
                        <MenuItem value="worldwide">Worldwide</MenuItem>

                        {countries.map((country, index) => (
                            <MenuItem key={index} value={country.value}>{country.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default Header
