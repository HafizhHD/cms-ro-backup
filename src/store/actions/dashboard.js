import {
    AUTH_SUCCESS,
    AUTH_START,
    AUTH_FAILED,
    AUTH_LOGOUT,
    ALERT_ERROR,
    ALERT_SUCCESS,
    ALERT_CLOSE
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

export const loadingStart = () => ({ type: AUTH_START });
export const loadingStop = () => ({ type: AUTH_FAILED });
export const authSuccess = () => ({ type: AUTH_SUCCESS });

export const alertError = (message, id) => ({
    type: ALERT_ERROR,
    message: message,
    idMessage: id
});

export const alertSuccess = (message, id) => ({
    type: ALERT_SUCCESS,
    message: message,
    idMessage: id
})

export const addProgram = ( cobrandEmail, programName, ProgramDescription, photo, startDate, history ) => {
    return dispatch => {
        dispatch( loadingStart() );
        dispatch({
            type: ALERT_CLOSE
        });

        const promise = toBase64(photo);
        promise.then((result) => {
            console.log(typeof result);
            const programthumnail = result;

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
                    dispatch(alertSuccess('Program "' + programName + '" berhasil ditambahkan.'));
                    dispatch(loadingStop());
                })
                .catch((error) => {
                    console.error('Error:', error);
                    dispatch(alertError('Program "' + programName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                    dispatch(loadingStop());
                });
                console.log(data);
        });
    }

}

export const editProgram = ( _id, cobrandEmail, programName, ProgramDescription, photo, startDate, history ) => {
    return dispatch => {
        dispatch( loadingStart() );
        dispatch({
            type: ALERT_CLOSE
        });
        console.log('Photo is empty:', photo === '');
        if(photo === '') {
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
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log('Success:', response.data);
                history.push('/program');
                dispatch(alertSuccess('Program "' + programName + '" berhasil diubah.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Program "' + programName + '" gagal diubah. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
        }

        else {
            const promise = toBase64(photo);
            promise.then((result) => {
            console.log(typeof result);
            const programthumnail = result;

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
                    dispatch(alertSuccess('Program "' + programName + '" berhasil diubah.'));
                    dispatch(loadingStop());
                })
                .catch((error) => {
                    console.error('Error:', error);
                    dispatch(alertError('Program "' + programName + '" gagal diubah. Coba beberapa saat lagi.'));
                    dispatch(loadingStop());
                });
            });
        }
    }

}

export const deleteProgram = ( cobrandEmail, programId, retrieveList ) => {
    return dispatch => {
        dispatch( loadingStart() );
        dispatch({
            type: ALERT_CLOSE
        });
        const deleting = {
            whereValues: {
                cobrandEmail: cobrandEmail,
                _id: programId[0]
            }
        }
        axios({
            method: 'post',
            url: 'https://rk.defghi.biz.id:8080/api/cobrand/programRemove',
            data: deleting,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log(response.data);
            dispatch(alertSuccess('Program "' + programId[1] + '" berhasil dihapus.'));
            dispatch(loadingStop());
            retrieveList();
        })
        .catch(error => {
            console.log(error);
            dispatch(alertError('Program "' + programId[1] + '" gagal dihapus. Coba beberapa saat lagi.'));
            dispatch(loadingStop());
            retrieveList();
        });
    }
}

export const addContent = ( cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, photo, contents, startDate, isActive, history ) => {
    return dispatch => {
        dispatch( loadingStart() );
        dispatch({
            type: ALERT_CLOSE
        });

        const promise = toBase64(photo);
        promise.then((result) => {
            console.log(typeof result);
            const contentThumbnail = result;
            let status = isActive ? 'active' : 'inactive';

            if(contentType === 'Video') {
                contents = "<div style=\"position:relative;padding-bottom:56.25%;\"><iframe src=\"" + getEmbedUrl(contents) + "\" style=\"width:100%;height:100%;position:absolute;left:0px;top:0px;\" frameborder=\"0\" width=\"100%\" height=\"100%\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>";
            }
            else if(contentType === 'Image') {
                contents = "<img src=\"" + contents + "\" style=\"width:100%;\"/>";
            }
            else {
                contents = '<!DOCTYPE html>'
                            + '<html lang="en">'
                                + '<head>'
                                    + '<meta charset="utf-8">'
                                    + '<style>'
                                        + '#contents {'
                                            + 'overflow-y: scroll;'
                                            + 'text-align: justify;'
                                            + 'white-space: pre-line;'
                                            + 'font-family: Arial, Helvetica, sans-serif;'
                                            + 'padding: 1%;'
                                        + '}'
                                        + '#contents li {'
                                            + 'margin-left: 5%;'
                                        + '}'
                                    + '</style>'
                                + '</head>'
                                + '<body>'
                                    + '<div id="contents">'
                                        + contents
                                    + '</div>'
                                + '</body>'
                            + '</html>';
            }

            console.log(contents);

            let data = {
                cobrandEmail,
                programId,
                contentName,
                contentDescription,
                contentType,
                contentSource,
                contentThumbnail,
                contents,
                status,
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
                dispatch(alertSuccess('Content "' + contentName + '" berhasil ditambahkan.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Content "' + contentName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
            console.log(data);
        });
    }

    

}

export const editContent = ( _id, cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, photo, contents, startDate, history ) => {
    return dispatch => {
        dispatch( loadingStart() );
        dispatch({
            type: ALERT_CLOSE
        });

        console.log('Photo is empty:', photo === '');
        if(photo === '') {
            if(contentType === 'Video') {
                contents = "<div style=\"position:relative;padding-bottom:56.25%;\"><iframe src=\"" + getEmbedUrl(contents) + "\" style=\"width:100%;height:100%;position:absolute;left:0px;top:0px;\" frameborder=\"0\" width=\"100%\" height=\"100%\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>";
            }
            else if(contentType === 'Image') {
                contents = "<img src=\"" + contents + "\" style=\"width:100%;\"/>";
            }
            else {
                contents = '<!DOCTYPE html>'
                            + '<html lang="en">'
                                + '<head>'
                                    + '<meta charset="utf-8">'
                                    + '<style>'
                                        + '#contents {'
                                            + 'overflow-y: scroll;'
                                            + 'text-align: justify;'
                                            + 'white-space: pre-line;'
                                            + 'font-family: Arial, Helvetica, sans-serif;'
                                            + 'padding: 1%;'
                                        + '}'
                                        + '#contents li {'
                                            + 'margin-left: 5%;'
                                        + '}'
                                    + '</style>'
                                + '</head>'
                                + '<body>'
                                    + '<div id="contents">'
                                        + contents
                                    + '</div>'
                                + '</body>'
                            + '</html>';
            }

            console.log(contents);
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
                dispatch(alertSuccess('Content "' + contentName + '" berhasil diubah.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Content "' + contentName + '" gagal diubah. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
            console.log(data);
        }

        else {
            const promise = toBase64(photo);
            promise.then((result) => {
                console.log(typeof result);
                const programthumnail = result;

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
                    dispatch(alertSuccess('Content "' + contentName + '" berhasil diubah.'));
                    dispatch(loadingStop());
                })
                .catch((error) => {
                    console.error('Error:', error);
                    dispatch(alertError('Content "' + contentName + '" gagal diubah. Coba beberapa saat lagi.'));
                    dispatch(loadingStop());
                });
                console.log(data);
            });
        }
    }

    

}

export const deleteContent = ( cobrandEmail, contentId, retrieveList ) => {
    return dispatch => {
        dispatch( loadingStart() );
        dispatch({
            type: ALERT_CLOSE
        });
        const deleting = {
            whereValues: {
                cobrandEmail: cobrandEmail,
                _id: contentId[0]
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
            dispatch(alertSuccess('Content "' + contentId[1] + '" berhasil dihapus.'));
            dispatch(loadingStop());
            retrieveList();
        })
        .catch(error => {
            console.log(error);
            dispatch(alertError('Content "' + contentId[1] + '" gagal dihapus. Coba beberapa saat lagi.'));
            dispatch(loadingStop());
            retrieveList();
        });
    }
}

export const editProfile = ( oldEmail, oldPassword, cobrandName, photo, phoneNumber, address, password ) => {
    return dispatch => {
        dispatch( loadingStart() );
        dispatch({
            type: ALERT_CLOSE
        });

        let whereValues = {email: oldEmail, password: oldPassword}, newValues = {};

        if(cobrandName) newValues = Object.assign(newValues, {cobrandName: cobrandName});
        if(phoneNumber) newValues = Object.assign(newValues, {phoneNumber: phoneNumber});
        if(address) newValues = Object.assign(newValues, {address: address});
        if(password) newValues = Object.assign(newValues, {password: password});

        if(photo) {
            const promise = toBase64(photo);
            promise.then((result) => {
                newValues = Object.assign(newValues, {thumbnail: result});
                console.log('whereValues: ', whereValues);
                console.log('newValues: ', newValues);
                axios({
                    method: 'post',
                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/edit',
                    data: {whereValues, newValues},
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    console.log('Success:', response.data);
                    if(password) {
                        console.log('YOI BRUH');
                        whereValues.password = password;
                    }
                    axios({
                        method: 'post',
                        url: 'https://rk.defghi.biz.id:8080/api/cobrand/cobrandLogin',
                        data: whereValues,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    .then(response2 => {
                        console.log('Success 2: ', response2.data);
                        let loginData = response2.data;
                        localStorage.removeItem('accessToken');
                        localStorage.removeItem('userData');
                        localStorage.setItem('accessToken', loginData.resultData.token);
                        localStorage.setItem('userData', JSON.stringify(loginData.resultData.user));
                        dispatch(alertSuccess('Profil berhasil diubah.'));
                        dispatch(loadingStop());
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        dispatch(alertError('Profil gagal diubah. Coba beberapa saat lagi.'));
                        dispatch(loadingStop());
                    });
                })
                .catch((error) => {
                    console.error('Error:', error);
                    dispatch(alertError('Profil gagal diubah. Coba beberapa saat lagi.'));
                    dispatch(loadingStop());
                });
            });
        }
        else {
            console.log('whereValues: ', whereValues);
            console.log('newValues: ', newValues);
            axios({
                method: 'post',
                url: 'https://rk.defghi.biz.id:8080/api/cobrand/edit',
                data: {whereValues, newValues},
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                console.log('Success:', response.data);
                if(password) {
                    console.log('YOI BRUH');
                    whereValues.password = password;
                }
                axios({
                    method: 'post',
                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/cobrandLogin',
                    data: whereValues,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response2 => {
                    console.log('Success 2: ', response2.data);
                    let loginData = response2.data;
                    localStorage.setItem('accessToken', loginData.resultData.token);
                    localStorage.setItem('userData', JSON.stringify(loginData.resultData.user));
                    dispatch(alertSuccess('Profil berhasil diubah.'));
                    dispatch(loadingStop());
                })
                .catch((error) => {
                    console.error('Error:', error);
                    dispatch(alertError('Profil gagal diubah. Coba beberapa saat lagi.'));
                    dispatch(loadingStop());
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Profil gagal diubah. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
        }
    }

}