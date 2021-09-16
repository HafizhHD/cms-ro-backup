import React, { useState, useEffect } from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './EditContent.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { editContent } from '../../../../store/actions/webMainUtils';
import RKLoader from '../../../../components/UI/RKLoader/RKLoader';
import { connect } from 'react-redux';
import { validationContentEdit } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';
import axios from 'axios';

function EditContent({
    onEditContent,
    isLoading
}) {

    const [isPageLoading, setPageLoading] = useState(true);
    const [programList, setProgramList] = useState();
    const [content, setContent] = useState();
    const [contentStartDate, setContentStartDate] = useState();

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).email;
    const _id = localStorage.getItem('contentSelected');

    const params1 = {
        whereKeyValues: {
            cobrandEmail: cobrandEmail
        }
    };

    useEffect(() => {
        setPageLoading(true);
        console.log(_id);
        if(_id) {
            const params = {
                whereKeyValues: {
                    cobrandEmail: cobrandEmail,
                    _id: _id
                }
            };

            axios({
                method: 'post',
                url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentFilter',
                data: params,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                console.log("Response data: ", response.data);
                setContent(response.data.contents[0]);
                let date = response.data.contents[0].startDate.split('T')[0];
                console.log(date);
                setContentStartDate(date);
                axios({
                    method: 'post',
                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/programFilter',
                    data: params1,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    console.log("Program list: ", response.data);
                    setProgramList(response.data.programs);
                    setPageLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setPageLoading(false);
                });
            })
            .catch(error => {
                console.log(error);
                setPageLoading(false);
            });
        }
    }, []);

    if(isPageLoading) {
        return <RKLoader/>
    }

    return (
        <>
            <Heading headingName="Content" routes={[
                { path: '/content', name: 'Content' },
                { path: '/content/edit', name: 'Edit Selected content' }
            ]} />
            <Formik
                initialValues= {{
                    programId: content.programId,
                    contentName: content.contentName,
                    contentDescription: content.contentDescription,
                    contentType: content.contentType,
                    contentSource: content.contentSource,
                    contents: content.contents,
                    startDate: contentStartDate
                }}
                validationSchema = {validationContentEdit}
                validateOnChange = {true}
                onSubmit = { values => {
                    onEditContent( _id, cobrandEmail, values.programId, values.contentName, values.contentDescription, values.contentType, values.contentSource, '', values.contents, values.startDate, history)
                }}
            >
            {({handleChange, handleSubmit, setFieldValue, values, errors}) => (
                <form onSubmit={handleSubmit}>
                    <div className="EditContent">
                        <h1>Edit Selected Content: {content.contentName}</h1>
                        <div className="form-group">
                            <label>Content Type</label>
                            <select
                                name="contentType"
                                value={values.contentType}
                                onChange={handleChange}
                            >
                                <option value="" disabled>--Select Content Type--</option>
                                <option value="Artikel">Artikel</option>
                                <option value="Lomba">Lomba</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Program Name</label>
                            <select
                                name="programId"
                                value={values.programId}
                                onChange={handleChange}
                            >
                                <option value="">(Tanpa Program)</option>
                                {
                                    programList.map((program) => {
                                        return (
                                            <option value={program._id}>{program.programName}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Title</label>
                            <InputComponent 
                                type="text"
                                name="contentName"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.contentName}
                                onChange={handleChange}
                            />
                            <span className="message__error">{errors.contentName}</span>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <InputComponent
                                type="textarea"
                                name="contentDescription"
                                placeholder="Type Something..."
                                value={values.contentDescription}
                                onChange={handleChange}
                            />
                        </div>
                        <span className="message__error">{errors.contentDescription}</span>
                        <div className="form-group">
                            <label>Source</label>
                            <InputComponent 
                                type="text"
                                name="contentSource"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.contentSource}
                                onChange={handleChange}
                            />
                            <span className="message__error">{errors.contentSource}</span>
                        </div>
                        {/*<div className="form-group">
                            <label>Photo</label>
                            <InputComponent
                                type="file"
                                className="form-group__input"
                                name="contentThumbnail"
                                onChange={(e) => {
                                    let file = e.currentTarget.files[0];
                                    if(file) {
                                        console.log("File to upload: ", file);
                                        setFieldValue("contentThumbnail", file);
                                    }
                                }}
                            />
                            <span className="message__error">{errors.contentThumbnail}</span>
                        </div>*/}
                        <div className="form-group">
                            <label>Contents</label>
                            <InputComponent
                                type="textarea"
                                name="contents"
                                placeholder="Type Something..."
                                value={values.contents}
                                onChange={handleChange}
                            />
                            <span className="message__error">{errors.contents}</span>
                        </div>
                        <div className="form-group">
                            <label>Set Schedule</label>
                            <InputComponent
                                type="date"
                                className="form-group__input"
                                name="startDate"
                                value={values.startDate}
                                onChange={handleChange}
                            />
                            <span className="message__error">{errors.startDate}</span>
                        </div>
                        <div>
                            <button className="btn btn-submit" type="submit">
                                Upload Content
                            </button>
                        </div>
                    </div>
                </form>
            )}
            </Formik>
            {console.log(isLoading)}
            {isLoading ? <RKLoader/> : null}
        </>
    )
}

const mapStateToProps = state => {
    console.log(state.auth.isLoading);
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditContent: ( _id, cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, history) =>
            dispatch( editContent( _id, cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditContent)
