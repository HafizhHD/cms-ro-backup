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
import { getContentList } from '../../../components/API/filter';
import Warning from '../../../components/UI/Warning/Warning'



function Content({
    isCurrentlyLoading,
    onDeleteContent
}) {
    const [isLoading, setLoading] = useState(true);
    const [contentList, setContentList] = useState();
    const [contentDeleting, setContentDeleting] = useState(null);
    const [showWarning, setShowWarning] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const userData = JSON.parse(localStorage.getItem('userData'));
    const params = 
    userData.sekolah !== '' ? {
        whereKeyValues: {
            cobrandEmail: userData.cobrandEmail,
            status: {"$in" : ["active", "inactive"]},
            programId: "",
            sekolah: userData.sekolah
        },
        includeContentData:false,
        limit: Number.MAX_SAFE_INTEGER
    } : 
    userData.groupMitraAsuhId !== '' ? {
        whereKeyValues: {
            cobrandEmail: userData.cobrandEmail,
            status: {"$in" : ["active", "inactive"]},
            programId: "",
            groupMitraAsuhId: userData.groupMitraAsuhId
        },
        includeContentData:false,
        limit: Number.MAX_SAFE_INTEGER
    } : 
    userData.cobrandComunityId !== '' ? {
        whereKeyValues: {
            cobrandEmail: userData.cobrandEmail,
            status: {"$in" : ["active", "inactive"]},
            programId: "",
            cobrandComunityId: userData.cobrandComunityId
        },
        includeContentData:false,
        limit: Number.MAX_SAFE_INTEGER
    } : {
        whereKeyValues: {
            cobrandEmail: userData.cobrandEmail,
            status: {"$in" : ["active", "inactive"]},
            programId: ""
        },
        includeContentData:false,
        limit: Number.MAX_SAFE_INTEGER
    };
    

    function retrieveList() {
        getContentList(params)
        .then(response => {
            // console.log("Content list: ", response.data);
            setContentList(response.data.contents);
            setLoading(false);
            // console.log(isLoading);
        })
        .catch(error => {
            // console.log(error);
            setLoading(false);
        });
    }

    useEffect(() => {
        setLoading(true);
        if(localStorage.getItem('contentDeleting')) {
            // console.log('masyuk syini');
            setContentDeleting([localStorage.getItem('contentDeleting'), localStorage.getItem('contentDeletingName')]);
            setConfirmDelete(true);
            localStorage.removeItem('contentDeleting');
            localStorage.removeItem('contentDeletingName');
        }
        else retrieveList();
    }, []);

    useEffect(() => {
        if(contentDeleting && confirmDelete) {
            setLoading(true);
            onDeleteContent(userData.cobrandEmail, contentDeleting, retrieveList);
            setConfirmDelete(false);
            setContentDeleting(null);
        }
    }, [contentDeleting, confirmDelete])


    if(isLoading || isCurrentlyLoading) {
        return <RKLoader/>
    }

    return (
        <>
        <div className="Content">
            <h1>ARTIKEL</h1>
            <NavLink to="/cms/content/add" id="add_content">
                <FiPlus className="IconAdd" />
               <span>Buat Artikel Baru</span>  
            </NavLink>
            <div className="Content__table">
                <TableContent COLUMNS={columns(setContentDeleting, setShowWarning)} DATA={contentList}  />
            </div>
            {showWarning ? <Warning setDeleting={setContentDeleting} setConfirmDeleting={setConfirmDelete} setWarning={setShowWarning} message={"Artikel"}/> : null}
        </div>
        </>
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
