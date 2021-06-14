import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoid2FoeXVhbGZhcmlzaSIsImEiOiJja3B3Mm5ta3QxZ2loMnBxcjUyMXdxaWE4In0.MAGeb1tYnIwwMx9chvnHwg'
});


const GoogleMaps = (props) => {
    return (
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '50vh'
          }}
        >
        <Layer
          type="symbol" 
          id="marker" 
          layout={{ 'icon-image': 'marker-15' }}
        >
          <Feature coordinates={
              [-0.481747846041145, 51.3233379650232]
          } />
        </Layer>
      </Map>
    )
}

export default GoogleMaps;
