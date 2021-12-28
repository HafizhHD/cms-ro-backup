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
import { toBase64, getEmbedUrl } from '../../helpers/fileHelper/fileHelper';
import { contentAdd, contentDelete, contentEdit, programAdd, programDelete, programEdit } from '../../components/API/dashboard';
import { cobrandEdit, cobrandLogin } from '../../components/API/auth';
import { Document, Page, pdfjs } from 'react-pdf'

import FileViewer from 'react-file-viewer';
import {CustomErrorComponent} from 'custom-error'

///pdf
// import { Viewer } from '@react-pdf-viewer/core' //library, plugin
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout' //styles
// import '@react-pdf-viewer/default-layout/lib/styles/index.css'
// import '@react-pdf-viewer/core/lib/styles/index.css'
// import { Worker } from '@react-pdf-viewer/core'
// import React, { useState } from 'react';
// import InputComponent from '../../../src/components/UI/Input/Input';

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

export const addProgram = (cobrandEmail, programName, ProgramDescription, photo, startDate, history) => {
    return dispatch => {
        dispatch(loadingStart());
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

            programAdd(data)
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

export const editProgram = (_id, cobrandEmail, programName, ProgramDescription, photo, startDate, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        console.log('Photo is empty:', photo === '');
        if (photo === '') {
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

            programEdit(data)
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

                programEdit(data)
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

export const deleteProgram = (cobrandEmail, programId, retrieveList) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        const deleting = {
            whereValues: {
                cobrandEmail: cobrandEmail,
                _id: programId[0]
            }
        }
        programDelete(deleting)
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

export const addContent = (cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, photo, contents, startDate, isActive, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        

        // const [numPages, setNumPages] = useState(null);
        // const [pageNumber, setPageNumber] = useState(1);


        const promise = toBase64(photo);
        promise.then((result) => {

            console.log(typeof result);
            const contentThumbnail = result;
            let status = isActive ? 'active' : 'inactive';

            if (contentType === 'Video') {
                contents = "<div style=\"position:relative;padding-bottom:56.25%;\"><iframe src=\"" + getEmbedUrl(contents) + "\" style=\"width:100%;height:100%;position:absolute;left:0px;top:0px;\" frameborder=\"0\" width=\"100%\" height=\"100%\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>";
            }
            else if (contentType === 'Image') {
                contents = "<img src=\"" + contents + "\" style=\"width:100%;\"/>";
            }
            else if (contentType === 'Pdf') {
                contents = 
                '<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url=' + contents + (contents.includes('&embedded=true') ? '' : '&embedded=true') + '" frameborder="0" width="100%" height="100%"></iframe></div>'
        
                console.log(contents)
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
            // <div style="position:relative;padding-bottom:56.25%;"><iframe src="https://www.youtube.com/embed/jVKzomlvDgE" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

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

            contentAdd(data)
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

export const editContent = (_id, cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, photo, contents, startDate, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });

        console.log('Photo is empty:', photo === '');
        if (photo === '') {
            if (contentType === 'Video') {
                contents = "<div style=\"position:relative;padding-bottom:56.25%;\"><iframe src=\"" + getEmbedUrl(contents) + "\" style=\"width:100%;height:100%;position:absolute;left:0px;top:0px;\" frameborder=\"0\" width=\"100%\" height=\"100%\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>";
            }
            else if (contentType === 'Image') {
                contents = "<img src=\"" + contents + "\" style=\"width:100%;\"/>";
            }  
            else if (contentType === 'Pdf') {
                contents = 
                '<div style="width:100%;height:100vh"><iframe src="http://docs.google.com/gview?url=' + contents + (contents.includes('&embedded=true') ? '' : '&embedded=true') + ' " frameborder=\"0\" width=\"100%\" height=\"100%\"></iframe></div>'

                console.log(contents)
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

            contentEdit(data)
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

                contentEdit(data)
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

export const deleteContent = (cobrandEmail, contentId, retrieveList) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        const deleting = {
            whereValues: {
                cobrandEmail: cobrandEmail,
                _id: contentId[0]
            }
        }
        contentDelete(deleting)
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

export const editProfile = (oldEmail, oldPassword, cobrandName, photo, phoneNumber, address, password) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });

        let whereValues = { email: oldEmail, password: oldPassword }, newValues = {};

        if (cobrandName) newValues = Object.assign(newValues, { cobrandName: cobrandName });
        if (phoneNumber) newValues = Object.assign(newValues, { phoneNumber: phoneNumber });
        if (address) newValues = Object.assign(newValues, { address: address });
        if (password) newValues = Object.assign(newValues, { password: password });

        if (photo) {
            const promise = toBase64(photo);
            promise.then((result) => {
                newValues = Object.assign(newValues, { thumbnail: result });
                console.log('whereValues: ', whereValues);
                console.log('newValues: ', newValues);
                cobrandEdit(whereValues, newValues)
                    .then(response => {
                        console.log('Success:', response.data);
                        if (password) {
                            console.log('YOI BRUH');
                            whereValues.password = password;
                        }
                        cobrandLogin(whereValues)
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
            cobrandEdit(whereValues, newValues)
                .then(response => {
                    console.log('Success:', response.data);
                    if (password) {
                        console.log('YOI BRUH');
                        whereValues.password = password;
                    }
                    cobrandLogin(whereValues)
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