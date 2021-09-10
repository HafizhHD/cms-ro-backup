import React from 'react';
import columns from './components/Columns';
import Data from './components/MOCK_DATA.json';
import TableContent from './../../../components/UI/Table/Table';
import './Content.scss';
import { FiPlus } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import RKLoader from '../../../components/UI/RKLoader/RKLoader';
import axios from 'axios';
import { useEffect, useState } from 'react';



function Content() {
    const [isLoading, setLoading] = useState(true);
    const [contentList, setContentList] = useState();

    /*
    const submitModal = () => {
        alert('ok')
    }
    */
    
    //FOR LATER USE
    /*const [program, setProgram] = useState();
    //if(localStorage.getItem('programForContent')) {

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
    
    useEffect(() => {
        setLoading(true);
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
        if(localStorage.getItem('contentDeleting')) {
            const deleting = {
                whereValues: {
                    cobrandEmail: userData.email,
                    contentName: localStorage.getItem('contentDeleting')
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
                localStorage.removeItem('contentDeleting');
                retrieveList();
            })
            .catch(error => {
                console.log(error);
                localStorage.removeItem('contentDeleting');
                retrieveList();
            });
        }
        else retrieveList();
        localStorage.removeItem('contentDeleting');
    }, []);


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
                <input 
                    type="text" 
                    className="Content__table__input" 
                    placeholder="Search"
                />
                <TableContent COLUMNS={columns} DATA={contentList}  />
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
