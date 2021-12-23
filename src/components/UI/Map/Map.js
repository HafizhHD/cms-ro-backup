import React, { useState, useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoid2FoeXVhbGZhcmlzaSIsImEiOiJja3B3Mm5ta3QxZ2loMnBxcjUyMXdxaWE4In0.MAGeb1tYnIwwMx9chvnHwg'
});

export const accessToken = 'pk.eyJ1Ijoid2FoeXVhbGZhcmlzaSIsImEiOiJja3B3Mm5ta3QxZ2loMnBxcjUyMXdxaWE4In0.MAGeb1tYnIwwMx9chvnHwg';

const GoogleMaps = ({search}) => {
    console.log(search);
    
    return (
      <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '50vh'
          }}
          center={
            search ? search.center: [10, 10]
          }
          zoom={[11]}
        >
        <Layer
          type="symbol" 
          id="marker" 
          layout={{ 'icon-image': 'marker-15' }}
        >
          <Feature coordinates={
              search ? search.center: [5, 5]
          } />
        </Layer>
      </Map>
    )
}

export default GoogleMaps;
