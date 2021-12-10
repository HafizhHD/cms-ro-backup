import React, { useState } from 'react';
import './RedZone.scss';
import Heading from './../../../components/UI/Heading/Heading';
import InputComponent from './../../../components/UI/Input/Input';
import MapComponent, { accessToken } from './../../../components/UI/Map/Map';
import TableRedZone from './../../../components/UI/Table/Table';
import Columns from './components/Columns';
import Data from './components/redzone.json';
import axios from 'axios';


function RedZone() {
    const [mapSearch, mapSearchInput] = useState('');

    return (
        <div className="RedZone">
            <Heading headingName="Redzone" routes={[
                { name: 'Data Redzone' },
                { path: '/redzone', name: 'List Redzone' }
            ]} />

            <div className="RedZone__map">
                <div className="RedZone__heading">
                    <h3>Map View</h3>
                    <InputComponent 
                        className="Input-control"
                        type="text"
                        placeholder="Search"
                        name="search"
                        onChange={(e) => {
                            console.log(e.currentTarget.value);
                            let urlBuilder = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(e.currentTarget.value) + '.json?access_token=' + accessToken;
                            axios({
                              method: 'get',
                              url: urlBuilder
                            })
                            .then(response => {
                                //console.log("Response data: ", response.data);
                                mapSearchInput(response.data.features[0]);
                            })
                            .catch(error => {
                                console.log(error);
                            });
                        }}
                    />
                </div>
                <div className="RedZone__data">
                    <MapComponent search={mapSearch}/>
                </div>
            </div>

            <div className="RedZone__list">
                <div className="RedZone__heading">
                    <h3>Redzone List</h3>
                    {/* <InputComponent 
                        className="Input-control"
                        type="text"
                        placeholder="Search"
                        name="search"
                    /> */}
                </div>
                <div className="RedZone__data">
                    <TableRedZone 
                        COLUMNS={Columns}
                        DATA={Data}
                    />
                </div>
            </div>
        </div>
    )
}

export default RedZone
