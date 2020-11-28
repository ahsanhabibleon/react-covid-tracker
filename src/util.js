import React from 'react'
import numeral from 'numeral'
import { Circle, Popup } from 'react-leaflet'
export const sortData = (data) => {
    return [...data].sort((a, b) => a.cases > b.cases ? -1 : 1)
}

// Draw circles on the map
const casesTypeColors = {
    cases: {
        hex: "#cc1034",
        multiplier: 400
    },
    recovered: {
        hex: "green",
        multiplier: 800
    },
    deaths: {
        hex: "red",
        multiplier: 2000
    },
}

export const prettyPrintStat = (stat) => stat ? `${numeral(stat).format('0.0a')}` : "0"
export const drawCirclesOnTheMap = (data, casesType = "cases") => {
    return data.map((country, index) => (
        <Circle
            key={index}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
            }
        >
            <Popup>
                <div className="info-container">
                    <div className="info-flag">
                        <img src={country.countryInfo.flag} alt={country.countryInfo.flag} />
                    </div>
                    <div className="info-country">{country.country}</div>
                    <div className="info-cases">Cases: {numeral(country.cases).format(0, 0)} </div>
                    <div className="info-recovered">Recovered: {numeral(country.recovered).format(0, 0)} </div>
                    <div className="info-deaths">Deaths: {numeral(country.deaths).format(0, 0)} </div>
                </div>
            </Popup>
        </Circle>
    ))
}
