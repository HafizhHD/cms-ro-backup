import React, { useState, useEffect } from 'react';
import './RedZone.scss';
import Heading from './../../../components/UI/Heading/Heading';
import InputComponent from './../../../components/UI/Input/Input';
import MapComponent, { accessToken } from './../../../components/UI/Map/Map';
import TableRedZone from './../../../components/UI/Table/Table';
import Columns from './components/Columns';
import Data from './components/redzone.json';
import axios from 'axios';
import { FiPlus } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

function RedZone() {
    const [mapSearch, mapSearchInput] = useState('');
    const [listRedzone, setListRedzone] = useState([])

    // get redzone : done
    useEffect(() => {
        // const id = localStorage.getItem('contentSelected');
        // console.log(id);
        const userData = JSON.parse(localStorage.getItem('userData'));
        let params =
        {
            whereKeyValues: {
                cobrandEmail: userData.cobrandEmail,
            }
            // "admin@asia.ruangortu.id",
        }
        axios({
            method: 'post',
            url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneFilter',
            data: params,
        })
            .then(response => {
                console.log(response.data);
                setListRedzone(response.data.Data)
                console.log(listRedzone)

            })
            .catch(error => {
                console.log(error + 'ini eror get list redzone');
            });
    }, [])


    // add redzone : done
    // useEffect(() => {
    //     let params =
    //     {
    //         cobrandEmail: "muhammadsyihab.te@gmail.com",
    //         placeName: "Tempat Sabung ayam",
    //         description: "Tempat Sabung ayam A",
    //         address: "kaliideres",
    //         redZoneStatus: "active",
    //         location: [-6.212694432483453, 106.85043740452949]
    //     }
    //     axios({
    //         method: 'post',
    //         url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneAdd',
    //         data: params,
    //     })
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error + 'ini eror add redzone');
    //         });
    // }, [])

    // // edit
    // useEffect(() => {
    //     // const id = localStorage.getItem('contentSelected');
    //     // console.log(id);
    //     let params =
    //     {
    //         whereValues: { _id: "628b4f8ac040ad69e5f317e9" },
    //         newKeyValues: { placeName: "Tempat Sabung ayam yang baru dibuat iniii" }
    //     }
    //     axios({
    //         method: 'post',
    //         url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/redZoneUpdate',
    //         data: params,
    //     })
    //         .then(response => {
    //             console.log(response.data);
    //             // setListRedzone(response.data)
    //             // console.log(listRedzone)

    //         })
    //         .catch(error => {
    //             console.log(error + 'ini eror edit redzone');
    //         });
    // }, [])

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
                    <MapComponent search={mapSearch} />
                </div>
            </div>
            <div className="RedZone__list">
                <div className='divlink'>
                    <NavLink to="/cms/redzone/add" id='add' >
                        <FiPlus className="IconAdd" />
                        <span>Create New Redzone</span>
                    </NavLink>
                    <NavLink to="/cms/redzone/edit" id='add2' >
                        {/* <FiPlus className="IconAdd" /> */}
                        <span>Edit Redzone</span>
                    </NavLink>
                </div>

                <div className="RedZone__heading">
                    <h3>Redzone List</h3>
                </div>
                <div className="RedZone__data">
                    <TableRedZone className="table-col"
                        COLUMNS={Columns}
                        DATA={listRedzone}
                    />
                </div>
            </div>
        </div>
    )
}

export default RedZone
