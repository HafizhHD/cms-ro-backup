import React from 'react';
import columns from './components/Columns';
import Data from './components/MOCK_DATA.json';
import { deleteContent } from '../../../store/actions/dashboard';
import TableContent from './../../../components/UI/Table/Table';
import './Content.scss';
import { FiPlus } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';



function Content({
    isCurrentlyLoading,
    onDeleteContent
}) {
    const [isLoading, setLoading] = useState(true);
    const [contentList, setContentList] = useState();
    const [contentDeleting, setContentDeleting] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const userData = JSON.parse(localStorage.getItem('userData'));
    const params = {
        whereKeyValues: {
            cobrandEmail: userData.email
        },
        limit: Number.MAX_SAFE_INTEGER
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
            onDeleteContent(userData.email, contentDeleting, retrieveList);
        }
    }, [contentDeleting])


    if(isLoading || isCurrentlyLoading) {
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
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isCurrentlyLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteContent: (email, deletingContent, retrieveList) => dispatch(deleteContent(email, deletingContent, retrieveList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Content)
