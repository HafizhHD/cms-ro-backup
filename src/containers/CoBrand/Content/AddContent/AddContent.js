import React, { useState, useEffect } from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddContent.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addContent } from '../../../../store/actions/webMainUtils';
import RKLoader from '../../../../components/UI/RKLoader/RKLoader';
import { connect } from 'react-redux';
import { validationContent } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';
import axios from 'axios';
import RichTextEditor from 'react-rte';

function AddContent({
    onAddContent,
    isLoading
}) {

    const [isPageLoading, setPageLoading] = useState(true);
    const [programList, setProgramList] = useState();

    const [textValue, setTextValue] = useState(RichTextEditor.createEmptyValue());
    const toolbarConfig = {
        // Optionally specify the groups to display (displayed in the order listed).
        display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
        INLINE_STYLE_BUTTONS: [
            {label: 'Bold', style: 'BOLD'},
            {label: 'Italic', style: 'ITALIC'},
            {label: 'Underline', style: 'UNDERLINE'},
            {label: 'Strikethrough', style: 'STRIKETHROUGH'}
        ],
        BLOCK_TYPE_DROPDOWN: [
            {label: 'Normal', style: 'unstyled'},
            {label: 'Heading Large', style: 'header-one'},
            {label: 'Heading Medium', style: 'header-two'},
            {label: 'Heading Small', style: 'header-three'}
        ],
        BLOCK_TYPE_BUTTONS: [
            {label: 'Unordered List', style: 'unordered-list-item'},
            {label: 'Ordered List', style: 'ordered-list-item'},
            {label: 'Blockquote', style: 'blockquote'}
        ]
    };

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).email;

    const params = {
        whereKeyValues: {
            cobrandEmail: cobrandEmail
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
            console.log("Program list: ", response.data);
            setProgramList(response.data.programs);
            setPageLoading(false);
        })
        .catch(error => {
            console.log(error);
            setPageLoading(false);
        });
    }, []);

    if(isPageLoading) {
        return <RKLoader/>
    }

    return (
        <>
            <Heading headingName="Content" routes={[
                { path: '/content', name: 'Content' },
                { path: '/content/add', name: 'Create new content' }
            ]} />
            <Formik
                initialValues= {{
                    programId: '',
                    contentName: '',
                    contentDescription: '',
                    contentType: '',
                    contentSource: '',
                    contentThumbnail: '',
                    contents: '',
                    startDate: new Date().toISOString().split('T')[0],
                    isActive: false
                }}
                validationSchema = {validationContent}
                validateOnChange = {true}
                onSubmit = { values => {
                    window.scrollTo(0,0);
                    onAddContent( cobrandEmail, values.programId, values.contentName, values.contentDescription, values.contentType, values.contentSource, values.contentThumbnail, values.contents, values.startDate, values.isActive, history)
                }}
            >
            {({handleChange, handleSubmit, setFieldValue, values, errors}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddContent">
                        <h1 className="AddContent_title">Create New Content</h1>
                        <div className="form-group">
                            <label>Content Type</label>
                            <select
                                name="contentType"
                                value={values.contentType}
                                onChange={(e) => {
                                    setFieldValue("contentType", e.currentTarget.value);
                                    setFieldValue("contents", '');
                                }}
                            >
                                <option value="" disabled>--Select Content Type--</option>
                                <option value="Artikel">Artikel</option>
                                <option value="Image">Image</option>
                                <option value="Video">Video</option>
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
                        <div className="form-group">
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
                        </div>
                        <div className="form-group">
                            <label>Contents</label>
                            { values.contentType === "Artikel" ? (
                                /*<InputComponent
                                    type="textarea"
                                    name="contents"
                                    placeholder="Type Something..."
                                    value={values.contents}
                                    onChange={handleChange}
                                />*/

                                <RichTextEditor
                                    name="contents"
                                    placeholder="Type your contents here..."
                                    className="form-group__input form-group__input_rte"
                                    value={textValue}
                                    toolbarConfig={toolbarConfig}
                                    onChange={ (e) => {
                                        setTextValue(e);
                                        setFieldValue("contents", e.toString("html"));
                                        console.log(values.contents);
                                    }}
                                />
                            ) : null }
                            { values.contentType === "Image" ? (
                                <InputComponent
                                    type="text"
                                    name="contents"
                                    className="form-group__input form-group__input--fullwidth" 
                                    placeholder="Type Image URL... (https://example.com/something/something.jpg)"
                                    value={values.contents}
                                    onChange={handleChange}
                                />
                            ) : null }
                            { values.contentType === "Video" ? (
                                <InputComponent
                                    type="text"
                                    name="contents"
                                    className="form-group__input form-group__input--fullwidth" 
                                    placeholder="Type Video URL... (Youtube/Vimeo/Dailymotion/etc)"
                                    value={values.contents}
                                    onChange={handleChange}
                                />
                            ) : null }
                            <span className="message__error">{errors.contents}</span>
                        </div>
                        <div className="form-group">
                            <label>Set Schedule</label>
                            <InputComponent
                                type="date"
                                className="form-group__input"
                                name="startDate"
                                value={values.startDate}
                                min={new Date().toISOString().split('T')[0]}
                                onChange={handleChange}
                            />
                            <span className="message__error">{errors.startDate}</span>
                        </div>
                        <div className="form-group">
                            <div className="form-group_switch">
                                <p className="form-group_switch_status">Status:</p>
                                <p className="form-group_switch_inactive">Inactive</p>
                                <label className="form-group_switch_switch">
                                    <input type="checkbox" className="form-group_switch_switch_checkbox"
                                        name="isActive"
                                        defaultChecked={values.isActive}
                                        onChange={() => {
                                            values.isActive = !values.isActive;
                                            console.log(values.isActive);
                                        }}></input>
                                    <span className="form-group_switch_switch_slider"></span>
                                </label>
                                <p className="form-group_switch_active">Active</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-submit" type="submit">
                                Post Content
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
        onAddContent: ( cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, isActive, history) =>
            dispatch(addContent( cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, isActive, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddContent)
