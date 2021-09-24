import {
    AUTH_SUCCESS,
    AUTH_START,
    AUTH_FAILED,
    AUTH_LOGOUT
} from './actionTypes';
import axios from 'axios';
import { toBase64 } from '../../helpers/fileHelper/fileHelper';

function getEmbedUrl(url) {
    // function for generating an embed link
    let finalUrl = '';
    let videoId = '';

    if (url.includes('facebook.com/')) {
        // Facebook Video
        finalUrl = 'https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(url) + '&show_text=1&width=200';

    } else if(url.includes('vimeo.com/')) {
        // Vimeo video
        videoId = typeof(url.split("vimeo.com/")[1]) !== undefined ? url.split("vimeo.com/")[1] : null;
        if (videoId.includes('&')){
            videoId = videoId.split("&")[0];
        }
        finalUrl = 'https://player.vimeo.com/video/' + videoId;

    } else if (url.includes('youtube.com/')) {
        // Youtube video
        videoId = typeof(url.split("v=")[1]) !== undefined ? url.split("v=")[1] : null;
        if (videoId.includes('&')){
            videoId = videoId.split("&")[0];
        }
        finalUrl = 'https://www.youtube.com/embed/' + videoId;

    } else if(url.includes('youtu.be/')) {
        // Youtube video
        videoId = typeof(url.split("youtu.be/")[1]) !== undefined ? url.split("youtu.be/")[1] : null;
        if (videoId.includes('&')) {
            videoId = videoId.split("&")[0];
        }
        finalUrl = 'https://www.youtube.com/embed/' +  videoId;

    } else if (url.includes('dailymotion.com/')) {
        // Dailymotion Video
        videoId = typeof(url.split("dailymotion.com/")[1]) !== undefined ? url.split("dailymotion.com/")[1] : null;
        if (videoId.includes('&')) {
            videoId = videoId.split("&")[0];
        }
        finalUrl = 'https://www.dailymotion.com/embed/' + videoId;

    } else{
        finalUrl = url;
    }

    return finalUrl;
}

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
                contents = "<div style=\"position:relative;padding-bottom:56.25%;\"><iframe src=\"" + getEmbedUrl(contents) + "\" style=\"width:100%;height:100%;position:absolute;left:0px;top:0px;\" frameborder=\"0\" width=\"100%\" height=\"100%\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>";
            }
            else if(contentType === 'Image') {
                contents = "<img src=\"" + contents + "\" style=\"width:100%;\"/>"
            }

            console.log(contents);

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