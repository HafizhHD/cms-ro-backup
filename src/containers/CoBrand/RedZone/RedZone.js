import React from 'react';
import './RedZone.scss';
import Heading from './../../../components/UI/Heading/Heading';
import InputComponent from './../../../components/UI/Input/Input';

function RedZone() {
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
                    />
                </div>
                <div className="RedZone__data">
             
                </div>
            </div>

            <div className="RedZone__list">
                <div className="RedZone__heading">
                    <h3>Redzone List</h3>
                    <InputComponent 
                        className="Input-control"
                        type="text"
                        placeholder="Search"
                        name="search"
                    />
                </div>
                <div className="RedZone__data">
                    Table Goes Here
                </div>
            </div>
        </div>
    )
}

export default RedZone
