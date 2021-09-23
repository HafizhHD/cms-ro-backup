import {
    AUTH_SUCCESS,
    AUTH_START,
    AUTH_FAILED,
    AUTH_LOGOUT
} from './actionTypes';
import axios from 'axios';
import { toBase64 } from '../../helpers/fileHelper/fileHelper';

export const authStart = () => ({ type: AUTH_START });
export const authFailed = () => ({ type: AUTH_FAILED });
export const authSuccess = () => ({ type: AUTH_SUCCESS })

export const addProgram = ( cobrandEmail, programName, ProgramDescription, photo, startDate, history ) => {
    return dispatch => {
        dispatch( authStart() );

        const promise = toBase64(photo);
        promise.then((result) => {
            console.log(typeof result);
            const programthumnail = result;

            setTimeout( () => {
                let data = {
                    cobrandEmail,
                    programName,
                    ProgramDescription,
                    programthumnail,
                    startDate
                };

                console.log(data);
                //Call API ....
                
                axios({
                    method: 'post',
                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/programAdd',
                    data: data,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    console.log('Success:', response.data);
                    history.push('/program');
                    dispatch(authFailed());
                })
                .catch((error) => {
                    console.error('Error:', error);
                    dispatch(authFailed());
                });
                console.log(data);
            },2000)
        });
    }

}

export const editProgram = ( _id, cobrandEmail, programName, ProgramDescription, photo, startDate, history ) => {
    return dispatch => {
        dispatch( authStart() );
        console.log('Photo is empty:', photo === '');
        if(photo === '') {
            setTimeout( () => {
                let data = {
                    whereValues: {
                        cobrandEmail,
                        _id
                    },
                    newValues: {
                        programName,
                        ProgramDescription,
                        startDate
                    }
                };

                console.log(data);
                //Call API ....
                
                axios({
                    method: 'post',
                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/programUpdate',
                    data: data,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    console.log('Success:', response.data);
                    history.push('/program');
                    dispatch(authFailed());
                })
                .catch((error) => {
                    console.error('Error:', error);
                    dispatch(authFailed());
                });
                console.log(data);
            },2000)
        }

        else {
            const promise = toBase64(photo);
            promise.then((result) => {
                console.log(typeof result);
                const programthumnail = result;

                setTimeout( () => {
                    let data = {
                        whereValues: {
                            cobrandEmail,
                            _id
                        },
                        newValues: {
                            programName,
                            ProgramDescription,
                            programthumnail,
                            startDate
                        }
                    };

                    console.log(data);
                    //Call API ....
                    
                    axios({
                        method: 'post',
                        url: 'https://rk.defghi.biz.id:8080/api/cobrand/programUpdate',
                        data: data,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    .then(response => {
                        console.log('Success:', response.data);
                        history.push('/program');
                        dispatch(authFailed());
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        dispatch(authFailed());
                    });
                    console.log(data);
                },2000)
            });
        }
    }

}

export const addContent = ( cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, photo, contents, startDate, history ) => {
    return dispatch => {
        dispatch( authStart() );

        const promise = toBase64(photo);
        promise.then((result) => {
            console.log(typeof result);
            const contentThumbnail = result;

            if(contentType === 'Video') {
                contents = "<div style=\"position:relative;padding-bottom:56.25%;\"><iframe src=\"" + contents + "\" style=\"width:100%;height:100%;position:absolute;left:0px;top:0px;\" frameborder=\"0\" width=\"100%\" height=\"100%\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>";
            }
            else if(contentType === 'Image') {
                contents = "<img src=\"" + contents + "\"/>"
            }

            setTimeout( () => {
                let data = {
                    cobrandEmail,
                    programId,
                    contentName,
                    contentDescription,
                    contentType,
                    contentSource,
                    contentThumbnail,
                    contents,
                    startDate
                };

                console.log(data);
                //Call API ....
                
                axios({
                    method: 'post',
                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentAdd',
                    data: data,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    console.log('Success:', response.data);
                    history.push('/content');
                    dispatch(authFailed());
                })
                .catch((error) => {
                    console.error('Error:', error);
                    dispatch(authFailed());
                });
                console.log(data);
            },2000)
        });
    }

    

}

export const editContent = ( _id, cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, photo, contents, startDate, history ) => {
    return dispatch => {
        dispatch( authStart() );

        console.log('Photo is empty:', photo === '');
        if(photo === '') {
            setTimeout( () => {
                let data = {
                    whereValues: {
                        cobrandEmail,
                        _id
                    },
                    newValues: {
                        programId,
                        contentName,
                        contentDescription,
                        contentType,
                        contentSource,
                        contents,
                        startDate
                    }
                };

                console.log(data);
                //Call API ....
                
                axios({
                    method: 'post',
                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate',
                    data: data,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    console.log('Success:', response.data);
                    history.push('/content');
                    dispatch(authFailed());
                })
                .catch((error) => {
                    console.error('Error:', error);
                    dispatch(authFailed());
                });
                console.log(data);
            },2000)
        }

        else {
            const promise = toBase64(photo);
            promise.then((result) => {
                console.log(typeof result);
                const programthumnail = result;

                setTimeout( () => {
                    let data = {
                        whereValues: {
                            cobrandEmail,
                            _id
                        },
                        newValues: {
                            programId,
                            contentName,
                            contentDescription,
                            contentType,
                            contentSource,
                            contents,
                            startDate
                        }
                    };

                    console.log(data);
                    //Call API ....
                    
                    axios({
                        method: 'post',
                        url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate',
                        data: data,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    .then(response => {
                        console.log('Success:', response.data);
                        history.push('/content');
                        dispatch(authFailed());
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        dispatch(authFailed());
                    });
                    console.log(data);
                },2000)
            });
        }
    }

    

}