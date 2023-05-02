import React from 'react';
import columns from './columns';
import TableContent from './../../../../../components/UI/Table/Table';
import Heading from '../../../../../components/UI/Heading/Heading';
import './ViewComment.scss';
import { FiPlus } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import RKLoader from '../../../../../components/UI/RKLoaderInner/RKLoader';
import RKSpinner from '../../../../../components/UI/RKLoaderSpinner/RKLoader';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { getContentCommentList } from '../../../../../components/API/filter';
import { contentCommentUpdate } from '../../../../../components/API/dashboard';
// import Warning from '../../../../components/UI/Warning/Warning'



function ViewComment() {
    const [isLoading, setLoading] = useState(true);
    const [isSpinnerLoading, setSpinnerLoading] = useState(false);
    const [commentList, setCommentList] = useState([]);
    const [commentBlocked, setCommentBlocked] = useState(null);

    const userData = JSON.parse(localStorage.getItem('userData'));
    const id = localStorage.getItem('contentSelected');
    const contentName = localStorage.getItem('contentNameSelected');
    const params = {
        whereKeyValues: {
            contentId: id
        },
        orderKeyValues: {
            dateCreated: -1
        },
        limit: Number.MAX_SAFE_INTEGER
    };
    

    function retrieveList() {
        setCommentList([]);
        getContentCommentList(params)
        .then(response => {
            // console.log("Content list: ", response.data);
            setCommentList(response.data.resultData);
            setLoading(false);
            setSpinnerLoading(false);
            // console.log(isLoading);
        })
        .catch(error => {
            // console.log(error);
            setLoading(false);
            setSpinnerLoading(false);
        });
    }

    useEffect(() => {
        setLoading(true);
        retrieveList();
    }, []);

    useEffect(() => {
        if(commentBlocked) {
            setSpinnerLoading(true);
            let prm = {
                whereValues: {
                    _id: commentBlocked[0]
                },
                newValues: {
                    status: commentBlocked[1]
                }
            }
            contentCommentUpdate(prm)
            .then(res => {
                setCommentBlocked(null);
                retrieveList();
            })
        }
    }, [commentBlocked])


    if(isLoading) {
        return <RKLoader/>
    }

    return (
        <>
        {isSpinnerLoading ? <RKSpinner/> : null}
        <div className="ViewComment">
        <Heading headingName={"KOMENTAR artikel " + contentName.substring(0, 35) + (contentName.length > 35 ? "..." : "")} routes={[
                { path: '/cms/content', name: 'Daftar Artikel' },
                { path: '/cms/content/view', name: 'Lihat Detail Artikel' },
                { path: '/cms/content/view/comment', name: 'Lihat Komentar' }
            ]} />
            <div className="ViewComment__table">
                <TableContent COLUMNS={columns(setCommentBlocked)} DATA={commentList}  />
            </div>
            {/* {showWarning ? <Warning setDeleting={setContentDeleting} setConfirmDeleting={setConfirmDelete} setWarning={setShowWarning} message={"Artikel"}/> : null} */}
        </div>
        </>
    )
}

export default ViewComment
