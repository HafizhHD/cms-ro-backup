import React from 'react';
import columns from './components/Columns';
import Data from './components/MOCK_DATA.json';
import TableContent from './../../../components/UI/Table/Table';
import './Content.scss';
import { FiPlus } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LoginHelp from '../../../components/UI/Help/LoginHelp/LoginHelp';



function Content() {
    const [isLoading, setLoading] = useState(true);
    const [contentList, setContentList] = useState();
    const [contentDeleting, setContentDeleting] = useState(null);
    const [showModal, setShowModal] = useState(false);

    /*
    const submitModal = () => {
        alert('ok')
    }
    */
    
    //FOR LATER USE
    /*const [program, setProgram] = useState();
    if(localStorage.getItem('programForContent')) {

        console.log(localStorage.getItem('programForContent'));
        const userData = JSON.parse(localStorage.getItem('userData'));
        const programData = JSON.parse(localStorage.getItem('programForContent'));
        const params = {
            whereKeyValues: {
                cobrandEmail: userData.email,
                programName: programData.programName
            }
        };
        
        useEffect(() => {
            axios({
                method: 'post',
                url: 'https://rk.defghi.biz.id:8080/api/cobrand/programFilter',
                data: params,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                console.log("Response data: ", response.data);
                setProgram(response.data.programs[0]);
                console.log("This is ", program);
        
                const contentParams = {
                    whereKeyValues: {
                        programId: response.data.programs[0]
                    }
                }
        
                return (
                    axios({
                        method: 'post',
                        url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentFilter',
                        data: contentParams,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    .then(response => {
                        console.log("Content list: ", response.data);
                        setContentList(response.data.contents);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.log(error);
                        setLoading(false);
                    })
                )
        
            })
            .catch(error => {
                console.log(error);
            });
        }, []);
    //}*/

    const userData = JSON.parse(localStorage.getItem('userData'));
    const params = {
        whereKeyValues: {
            cobrandEmail: userData.email
        }
    };
    

    function retrieveList() {
        axios({
            method: 'post',
            url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentFilter',
            data: params,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log("Content list: ", response.data);
            setContentList(response.data.contents);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        });
    }

    useEffect(() => {
        setLoading(true);
        if(localStorage.getItem('contentDeleting')) {
            setContentDeleting(localStorage.getItem('contentDeleting'));
            localStorage.removeItem('contentDeleting');
        }
        retrieveList();
    }, []);

    useEffect(() => {
        if(contentDeleting) {
            setLoading(true);
            const deleting = {
                whereValues: {
                    cobrandEmail: userData.email,
                    _id: contentDeleting
                }
            }
            axios({
                method: 'post',
                url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentRemove',
                data: deleting,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                console.log(response.data);
                setContentDeleting(null);
                retrieveList();
            })
            .catch(error => {
                console.log(error);
                setContentDeleting(null);
                retrieveList();
            });
        }
    }, [contentDeleting])


    if(isLoading) {
        return <RKLoader/>
    }

    return (
        <div className="Content">
            <h1>CONTENT</h1>
            <NavLink to="/content/add" id="add_content">
                <FiPlus className="IconAdd" />
               <span>Create New Content</span>  
            </NavLink>
            <div className="Content__table">
                <TableContent COLUMNS={columns(setContentDeleting)} DATA={contentList}  />
            </div>
            {
            /*<div className="ProgramPreview">
                <img src={program.programthumnail}/>
            </div>*/
            }
        </div>
    )
}

export default Content
