import React, { useState, useEffect } from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddContent.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addContent } from '../../../../store/actions/dashboard';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationContent } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';
import axios from 'axios';
import RichTextEditor from 'react-rte';
import { Viewer } from '@react-pdf-viewer/core' //library, plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout' //styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { Worker } from '@react-pdf-viewer/core'
import Pdf from '../pdf/pdf'
import Pdf2 from '../pdf2/pdf2'



function AddContent({
    onAddContent,
    isLoading
}) {

    //pdf
    // Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // for onchange event
    const [pdfFile, setPdfFile] = useState(null);
    const [pdfFileError, setPdfFileError] = useState('');

    // for submit event
    const [viewPdf, setViewPdf] = useState(null);

    // onchange event
    const fileType = ['application/pdf'];
    const handlePdfFileChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                    setPdfFile(e.target.result);
                    setPdfFileError('');
                }
            }
            else {
                setPdfFile(null);
                setPdfFileError('Please select valid pdf file');
            }
        }
        else {
            console.log('select your file');
        }
    }

    // form submit
    const handlePdfFileSubmit = (e) => {
        e.preventDefault();
        if (pdfFile !== null) {
            setViewPdf(pdfFile);
        }
        else {
            setViewPdf(null);
        }
    }


    const [isPageLoading, setPageLoading] = useState(true);
    const [programList, setProgramList] = useState();

    const [textValue, setTextValue] = useState(RichTextEditor.createEmptyValue());
    const toolbarConfig = {
        // Optionally specify the groups to display (displayed in the order listed).
        display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
        INLINE_STYLE_BUTTONS: [
            { label: 'Bold', style: 'BOLD' },
            { label: 'Italic', style: 'ITALIC' },
            { label: 'Underline', style: 'UNDERLINE' },
            { label: 'Strikethrough', style: 'STRIKETHROUGH' }
        ],
        BLOCK_TYPE_DROPDOWN: [
            { label: 'Normal', style: 'unstyled' },
            { label: 'Heading Large', style: 'header-one' },
            { label: 'Heading Medium', style: 'header-two' },
            { label: 'Heading Small', style: 'header-three' }
        ],
        BLOCK_TYPE_BUTTONS: [
            { label: 'Unordered List', style: 'unordered-list-item' },
            { label: 'Ordered List', style: 'ordered-list-item' },
            { label: 'Blockquote', style: 'blockquote' }
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

    if (isPageLoading) {
        return <RKLoader />
    }

    return (
        <>
            <Heading headingName="Content" routes={[
                { path: '/content', name: 'Content' },
                { path: '/content/add', name: 'Create new content' }
            ]} />
            <Formik
                initialValues={{
                    programId: '-1',
                    contentName: '',
                    contentDescription: '',
                    contentType: '',
                    contentSource: '',
                    contentThumbnail: '',
                    contents: '',
                    startDate: new Date().toISOString().split('T')[0],
                    isActive: true
                }}
                validationSchema={validationContent}
                validateOnChange={true}
                onSubmit={values => {
                    window.scrollTo(0, 0);
                    onAddContent(cobrandEmail, values.programId, values.contentName, values.contentDescription, values.contentType, values.contentSource, values.contentThumbnail, values.contents, values.startDate, values.isActive, history)
                }}
            >
                {({ handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched }) => (
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
                                    <option value="" disabled>Select Content Type</option>
                                    <option value="Artikel">Artikel</option>
                                    <option value="Image">Image</option>
                                    <option value="Video">Video</option>
                                    <option value="Pdf">File Pdf</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Program Name</label>
                                <select
                                    name="programId"
                                    value={values.programId}
                                    onChange={handleChange}
                                >
                                    <option value="-1" disabled>Select Program</option>
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
                                    onBlur={handleBlur}
                                />
                                {touched.contentName && <span className="message__error">{errors.contentName}</span>}
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <InputComponent
                                    type="textarea"
                                    name="contentDescription"
                                    placeholder="Type Something..."
                                    value={values.contentDescription}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.contentDescription && <span className="message__error">{errors.contentDescription}</span>}
                            </div>
                            <div className="form-group">
                                <label>Source</label>
                                <InputComponent
                                    type="text"
                                    name="contentSource"
                                    className="form-group__input form-group__input--fullwidth"
                                    placeholder="Example"
                                    value={values.contentSource}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.contentSource && <span className="message__error">{errors.contentSource}</span>}
                            </div>
                            <div className="form-group">
                                <label>Photo</label>
                                <InputComponent
                                    type="file"
                                    className="form-group__input"
                                    name="contentThumbnail"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        let file = e.currentTarget.files[0];
                                        if (file) {
                                            console.log("File to upload: ", file);
                                            setFieldValue("contentThumbnail", file);
                                        }
                                    }}
                                />
                                {touched.contentThumbnail && <span className="message__error">{errors.contentThumbnail}</span>}
                            </div>
                            <div className="form-group">
                                <label>Contents</label>
                                {values.contentType === "Artikel" ? (
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
                                        className="form-group_rte"
                                        value={textValue}
                                        toolbarConfig={toolbarConfig}
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            setTextValue(e);
                                            setFieldValue("contents", e.toString("html"));
                                            console.log(values.contents);
                                        }}
                                    />
                                ) : null}
                                {values.contentType === "Image" ? (
                                    <InputComponent
                                        type="text"
                                        name="contents"
                                        className="form-group__input form-group__input--fullwidth"
                                        placeholder="Type Image URL... (https://example.com/something/something.jpg)"
                                        value={values.contents}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                ) : null}
                                {values.contentType === "Video" ? (
                                    <InputComponent
                                        type="text"
                                        name="contents"
                                        className="form-group__input form-group__input--fullwidth"
                                        placeholder="Type Video URL... (Youtube/Vimeo/Dailymotion/etc)"
                                        value={values.contents}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                ) : null}
                                {values.contentType === "Pdf" ? (
                                    // <Pdf />
                                    // <Pdf2 />
                                    <div className='container'>
                                        <br></br>
                                        <form className='form-group' onSubmit={handlePdfFileSubmit}>
                                            <input type="file" className='form-control'
                                                required onChange={handlePdfFileChange}
                                            // value={values.contents}
                                            // value={}
                                            />
                                            {pdfFileError && <div className='error-msg'>{pdfFileError}</div>}
                                            <br></br>
                                            <button type="submit" className='btn btn-success btn-lg' onClick={handlePdfFileSubmit} >
                                                UPLOAD
                                            </button>
                                        </form>
                                        <br></br>
                                        <h4>View PDF</h4>
                                        <div className='pdf-container'>
                                            {/* show pdf conditionally (if we have one)  */}
                                            {viewPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                                                <Viewer fileUrl={viewPdf}
                                                    plugins={[defaultLayoutPluginInstance]} />
                                            </Worker></>}

                                            {/* if we dont have pdf or viewPdf state is null */}
                                            {!viewPdf && <>No pdf file selected</>}
                                        </div>
                                        <InputComponent
                                            type="text"
                                            name="contents"
                                            className="form-group__input form-group__input--fullwidth"
                                            placeholder="Type Video URL... (Youtube/Vimeo/Dailymotion/etc)"
                                            value={pdfFile}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                    </div>
                                ) : null}
                                {touched.contents && <span className="message__error">{errors.contents}</span>}
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
                                    onBlur={handleBlur}
                                />
                                {touched.startDate && <span className="message__error">{errors.startDate}</span>}
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
            {isLoading ? <RKLoader /> : null}
        </>
    )
}


// 1- install pdfjs library | npm install pdfjs-dist@2.6.347
// 2- install the core package | npm install @react-pdf-viewer/core@2.4.1   ok
// 3- install pdf viewer default layout | npm install @react-pdf-viewer/default-layout  ok

const mapStateToProps = state => {
    console.log(state.auth.isLoading);
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddContent: (cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, isActive, history) =>
            dispatch(addContent(cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, isActive, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContent)
