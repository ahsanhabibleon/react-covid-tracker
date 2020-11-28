import React from 'react'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MapContainer, TileLayer } from 'react-leaflet';
import { drawCirclesOnTheMap } from './util'
import './Map.scss'

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: "100%",
    color: theme.palette.text.secondary,
    height: "56vh"
  },
}));

function Map({ countries, casesType, center, zoom }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {drawCirclesOnTheMap(countries, casesType)}
      </MapContainer>
    </Card>

  )
}

export default Map


