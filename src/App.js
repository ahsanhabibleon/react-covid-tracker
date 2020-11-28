import React, { useState, useEffect } from 'react';
import Header from './Header'
import InfoBox from './InfoBox'
import CasesByCountry from './CasesByCountry'
import CovidChart from './CovidChart'
import Map from './Map'
import { Grid } from '@material-ui/core'
import './App.scss'
import { sortData, prettyPrintStat } from './util.js'
import 'leaflet/dist/leaflet.css'

const App = () => {
  const apiAllCountries = "https://disease.sh/v3/covid-19/all"
  const api = "https://disease.sh/v3/covid-19/countries/"
  const [countries, setCountries] = useState([""])
  const [queryString, setQueryString] = useState('worldwide')
  const [dataStorage, setDataStorage] = useState("")
  const [loading, setLoading] = useState("true")
  const [tableData, setTableData] = useState('')
  const [center, setCenter] = useState({ lat: 34.80746, lng: -40.4796 })
  const [zoom, setZoom] = useState("2")
  const [mapCountries, setMapCountries] = useState([])
  const [casesType, setCasesType] = useState("cases")

  const getCountries = async () => {
    await fetch(api)
      .then(res => res.json())
      .then(data => {
        const countries = data.map(country => {
          return {
            name: country.country,
            value: country.countryInfo.iso3,
          }
        })
        setCountries(countries)
        setTableData(data)
        setMapCountries(data)
      })
  }

  const getQueryString = (query) => {
    setQueryString(query)
    mapCountries.filter(x => {
      if (x.countryInfo.iso3 === query) {
        setCenter(
          {
            lat: x.countryInfo.lat,
            lng: x.countryInfo.long
          }
        )
        setZoom("4")
      }
    })
  }

  const getDataUrlByCountry = async () => {
    const url = queryString === 'worldwide' ? apiAllCountries : api + queryString;
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setDataStorage(data)
        console.log(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    getDataUrlByCountry()
  }, [queryString])

  return (
    <div className="App">
      <div className="app__container">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <div className="flex-direction-column">
              <Header setQueryString={getQueryString} countries={countries} />
              <div className="app__infobox__wrapper flex-grow-one">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <InfoBox
                      active={casesType === 'cases'}
                      onClick={() => setCasesType("cases")}
                      title="Corona Virus Cases"
                      cases={prettyPrintStat(dataStorage.todayCases)}
                      total={prettyPrintStat(dataStorage.cases)}
                      loading={loading} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InfoBox
                      active={casesType === 'recovered'}
                      extraClass="recovered"
                      onClick={() => setCasesType("recovered")}
                      title="Recovered"
                      cases={prettyPrintStat(dataStorage.todayRecovered)}
                      total={prettyPrintStat(dataStorage.recovered)}
                      loading={loading} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InfoBox
                      active={casesType === 'deaths'}
                      onClick={() => setCasesType('deaths')}
                      title="Deaths"
                      cases={prettyPrintStat(dataStorage.todayDeaths)}
                      total={prettyPrintStat(dataStorage.deaths)}
                      loading={loading} />
                  </Grid>
                  <Grid item xs={12}>
                    <Map
                      casesType={casesType}
                      countries={mapCountries}
                      center={center}
                      zoom={zoom} />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} className="flex-direction-column">
            <Grid container spacing={3} className="flex-grow-one">
              <Grid item xs={12} className="fullheight__parent">
                <CasesByCountry tableData={sortData(tableData)} />
              </Grid>
              <Grid item xs={12} className="fullheight__parent">
                <CovidChart casesType={casesType} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
