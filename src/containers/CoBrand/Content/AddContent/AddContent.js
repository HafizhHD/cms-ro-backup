import React, { useState, useEffect } from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddContent.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addContent, loadingStart } from '../../../../store/actions/dashboard';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationContent } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';
import axios from 'axios';
import RichTextEditor from 'react-rte';
import { toBase64 } from '../../../../helpers/fileHelper/fileHelper'
import TextEditor from '../../../../components/Texteditor/TextEditor';
import { getContentTopicList, getAudienceList } from '../../../../components/API/filter';

//texteditor
import { ContentState, Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw, current } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { stateToHTML } from 'draft-js-export-html'

import Select from 'react-select';

function AddContent({
    onAddContent,
    isLoading
}) {
    let editorState = EditorState.createEmpty()


    const [description, setDescription] = useState(editorState)
    const onEditorStateChange = (editorState) => {
        setDescription(editorState)
    }

    const [artikel, setArtikel] = useState(editorState)
    const onEditorStateChangeArtikel = (editorState) => {
        setArtikel(editorState)
    }

    const [preview, setPreview] = useState();
    const [preview64, setPreview64] = useState();

    const [topic, setTopic] = useState([]);
    const [audience, setAudience] = useState([]);




    const [isPageLoading, setPageLoading] = useState(true);
    const [programList, setProgramList] = useState();
    const [valueRadio, setRadio] = useState('');

    const [textDeskripsi, setTextDeskripsi] = useState(RichTextEditor.createEmptyValue());
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

    useEffect(() => {
        let paramTopic = {};
        let paramAudience = {};
        const promiseTopic = getContentTopicList(paramTopic);
        const promiseAudience = getAudienceList(paramAudience);

        Promise.all([promiseTopic, promiseAudience]).then(responseAll => {
            // console.log(responseAll[0]);
            // console.log(responseAll[1]);
            var topicRaw = [], audienceRaw = [];
            responseAll[0].data.Data.map(e => {
                topicRaw.push({value: e.topicName, label: e.topicName});
            })
            responseAll[1].data.Data.map(e => {
                audienceRaw.push({value: e.audianceName, label: e.audianceName});
            })
            setTopic(topicRaw);
            setAudience(audienceRaw);
            setPageLoading(false);
        })
    }, []);

    useEffect(() => {
        if(preview) {
            const reader = new FileReader();
            reader.readAsDataURL(preview);
            reader.onloadend = function() {
                var base64data = reader.result;                
                setPreview64(base64data);
            }
        }
    }, [preview])

    if (isPageLoading) {
        return <RKLoader />
    }

    return (
        <>
            <Heading headingName="Artikel" routes={[
                { path: '/cms/content', name: 'Artikel' },
                { path: '/cms/content/add', name: 'Buat Artikel Baru' }
            ]} />
            <Formik
                initialValues={{
                    programId: '-1',
                    contentName: '',
                    contentDescription: '',
                    contentType: 'Artikel',
                    contentSource: '',
                    contentThumbnail: '',
                    contents: '',
                    startDate: new Date().toISOString().split('T')[0],
                    endDate: new Date().toISOString().split('T')[0],
                    isActive: true,
                    topics: [],
                    targetAudience: []
                }}
                validationSchema={validationContent}
                validateOnChange={true}
                onSubmit={values => {
                    window.scrollTo(0, 0);
                    onAddContent(cobrandEmail, values.programId, values.contentName, values.contentDescription,
                        values.contentType, values.contentSource, values.contentThumbnail, values.contents,
                        values.startDate, values.endDate, values.isActive, values.topics, values.targetAudience, history)
                }}
            >
                {({ handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="AddContent">
                            <h1 className="AddContent_title">Buat Artikel Baru</h1>
                            <div className="form-group">
                                <label>Tipe Artikel</label>
                                <select
                                    name="contentType"
                                    value={values.contentType}
                                    onChange={(e) => {
                                        setFieldValue("contentType", e.currentTarget.value);
                                        setFieldValue("contents", '');
                                    }}
                                >
                                    <option value="Artikel">Artikel</option>
                                    <option value="Image">Image</option>
                                    <option value="Video">Video</option>
                                    <option value="Pdf">File Pdf</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Topik</label>
                                {/* <select
                                    name="topics"
                                    value={values.topics}
                                    onChange={(e) => {
                                        setFieldValue("topics", [e.currentTarget.value]);
                                    }}
                                >
                                    {topic.map(e => {
                                        console.log(e);
                                        return <option value={e.topicName}>{e.topicName}</option>
                                    })}
                                </select> */}
                                <Select
                                    isMulti
                                    value={values.topics}
                                    onChange={(e) => {
                                        setFieldValue("topics", e)
                                    }}
                                    name="topics"
                                    options={topic}
                                    // only allow user to choose up to 3 options
                                    isOptionDisabled={() => values.topics.length >= 3}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                                {touched.topics && <span className="message__error">{errors.topics}</span>}
                            </div>
                            <div className="form-group">
                                <label>Target Pembaca</label>
                                {/* <select
                                    name="targetAudience"
                                    value={values.targetAudience}
                                    onChange={(e) => {
                                        setFieldValue("targetAudience", [e.currentTarget.value]);
                                    }}
                                >
                                    {audience.map(e => {
                                        return <option value={e.audianceName}>{e.audianceName}</option>
                                    })}
                                </select> */}
                                <Select
                                    isMulti
                                    value={values.targetAudience}
                                    onChange={(e) => {
                                        setFieldValue("targetAudience", e)
                                    }}
                                    name="targetAudience"
                                    options={audience}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                                {touched.targetAudience && <span className="message__error">{errors.targetAudience}</span>}
                            </div>
                            
                            
                            <div className="form-group">
                                <label>Judul</label>
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
                                <label>Deskripsi</label>
                                <Editor
                                    editorState={description}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    onEditorStateChange={onEditorStateChange}
                                    // onEditorStateChange={updateTextDescription}
                                    // value={description.values}
                                    value={draftToHtml(convertToRaw(description.getCurrentContent()))}
                                    // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                                    name="contentDescription"
                                    onChange={(editorState) => {
                                        setTextDeskripsi(editorState);
                                        // setFieldValue("contentDescription", description);
                                        setFieldValue("contentDescription", draftToHtml(convertToRaw(description.getCurrentContent())));
                                        console.log(textDeskripsi);
                                        console.log(values.contentDescription)
                                        // console.log(dangerouslySetInnerHTML={{ __html: item.description}} )
                                    }}

                                />
                                {touched.contentDescription && <span className="message__error">{errors.contentDescription}</span>}
                            </div>
                            <div className="form-group">
                                <label>Sumber</label>
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
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Thumbnail</label>
                                    <InputComponent
                                        type="file"
                                        className="form-group__input"
                                        name="contentThumbnail"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            let file = e.currentTarget.files[0];
                                            if (file) {
                                                // console.log("File to upload: ", file);
                                                setFieldValue("contentThumbnail", file);
                                                setPreview(file);
                                            }
                                        }}
                                    />
                                    {touched.contentThumbnail && <span className="message__error">{errors.contentThumbnail}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Preview</label>
                                    {preview64 ? <div className="form-group-preview"><img src={preview64}/></div> : null}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Isi Artikel</label>
                                {values.contentType === "Artikel" ? (
                                    <Editor
                                        editorState={artikel}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        onEditorStateChange={onEditorStateChangeArtikel}
                                        // onEditorStateChange={updateTextDescription}
                                        // value={description.values}
                                        value={draftToHtml(convertToRaw(artikel.getCurrentContent()))}
                                        // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                                        name="contents"
                                        onChange={(editorState) => {
                                            setTextValue(editorState);
                                            // setFieldValue("contentDescription", description);
                                            setFieldValue("contents", draftToHtml(convertToRaw(artikel.getCurrentContent())));
                                            // console.log(textDeskripsi);
                                            // console.log(values.contents)
                                        }}

                                    />
                                ) : null}
                                {values.contentType === "Image" ? (
                                    <div>
                                        <p>Pilih media yang ingin di upload :</p>
                                        <form>
                                            <input type="radio" id="html" name="fav_language" value={'internal'}
                                                onClick={() => { setRadio('internal') }}
                                            />
                                            <label for="internal" >Media Internal Komputer</label>
                                            <br></br>
                                            <input type="radio" id="html" name="fav_language" value={'url'}
                                                onClick={() => setRadio('url')}
                                            />
                                            <label for="url" >Alamat URL</label>
                                            <br></br>
                                        </form>

                                        {valueRadio === 'internal' ?
                                            <InputComponent
                                                type="file"
                                                className="form-group__input"
                                                name="contents"
                                                onBlur={handleBlur}
                                                //   value={values.contents}
                                                //   onChange={handleChange}
                                                onChange={(e) => {
                                                    let file = e.currentTarget.files[0];
                                                    if (file) {
                                                        console.log("File to upload: ", file);
                                                        setFieldValue("contents", file);
                                                    }
                                                }}
                                            />
                                            :
                                            <InputComponent
                                                type="text"
                                                name="contents"
                                                className="form-group__input form-group__input--fullwidth"
                                                placeholder="Type Image URL... (https://example.com/something/something.jpg)"
                                                value={values.contents}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        }

                                    </div>

                                ) : null}
                                {values.contentType === "Video" ?
                                    // (
                                    //     <div>
                                    //         <p>Pilih media yang ingin di upload :</p>
                                    //         <form>
                                    //             <input type="radio" id="html" name="fav_language" value={'internal'}
                                    //             onClick={() => {setRadio('internal')}}
                                    //             />
                                    //             <label for="internal" >Media Internal Komputer</label>
                                    //             <br></br>
                                    //             <input type="radio" id="html" name="fav_language" value={'url'}
                                    //             onClick={() =>setRadio('url')}
                                    //             />
                                    //             <label for="url" >Alamat URL</label>
                                    //             <br></br>
                                    //         </form>

                                    //         {valueRadio === 'internal' ? 
                                    //         <InputComponent
                                    //         type="file"
                                    //         className="form-group__input"
                                    //         name="contents"
                                    //         onBlur={handleBlur}
                                    //         //   value={values.contents}
                                    //         //   onChange={handleChange}
                                    //         onChange={(e) => {
                                    //             let file = e.currentTarget.files[0];
                                    //             if (file) {
                                    //                 console.log("File to upload: ", file);
                                    //                 setFieldValue("contents", file);
                                    //             }
                                    //         }}
                                    //         />
                                    //         : 
                                    //         <InputComponent
                                    //         type="text"
                                    //         name="contents"
                                    //         className="form-group__input form-group__input--fullwidth"
                                    //         placeholder="Type Video URL... (Youtube/Vimeo/Dailymotion/etc)"
                                    //         value={values.contents}
                                    //         onChange={handleChange}
                                    //         onBlur={handleBlur}
                                    //         />
                                    //         }
                                    //     </div>

                                    // ) 
                                    <InputComponent
                                        type="text"
                                        name="contents"
                                        className="form-group__input form-group__input--fullwidth"
                                        placeholder="Type Video URL... (Youtube/Vimeo/Dailymotion/etc)"
                                        value={values.contents}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    : null}
                                {values.contentType === "Pdf" ? (
                                    <div>
                                        <p>Pilih media yang ingin di upload :</p>
                                        <form>
                                            <input type="radio" id="html" name="fav_language" value={'internal'}
                                                onClick={() => { setRadio('internal') }}
                                            />
                                            <label for="internal" >Media Internal - Maks 300kb</label>
                                            <br></br>
                                            <input type="radio" id="html" name="fav_language" value={'url'}
                                                onClick={() => setRadio('url')}
                                            />
                                            <label for="url" >Alamat URL</label>
                                            <br></br>
                                        </form>

                                        {valueRadio === 'internal' ?
                                            <InputComponent
                                                type="file"
                                                className="form-group__input"
                                                name="contents"
                                                onBlur={handleBlur}
                                                //   value={values.contents}
                                                //   onChange={handleChange}
                                                onChange={(e) => {
                                                    let file = e.currentTarget.files[0];
                                                    if (file) {
                                                        console.log("File to upload: ", file);
                                                        setFieldValue("contents", file);
                                                    }
                                                }}
                                            />
                                            :
                                            <InputComponent
                                                type="text"
                                                name="contents"
                                                className="form-group__input form-group__input--fullwidth"
                                                placeholder="Type Pdf URL... (Pdf file)"
                                                value={values.contents}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        }
                                    </div>

                                ) : null}
                                {touched.contents && <span className="message__error">{errors.contents}</span>}
                            </div>
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Tanggal Mulai</label>
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
                                {/* end date */}
                                <div className="form-group">
                                    <label>Tanggal Selesai</label>
                                    <InputComponent
                                        type="date"
                                        className="form-group__input"
                                        name="endDate"
                                        value={values.endDate}
                                        min={values.startDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.endDate && <span className="message__error">{errors.endDate}</span>}
                                </div>
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
                                    Buat Artikel
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

// its so loadingStart, i am very tired n feell sleepy, well will be ok rgight, 

const mapStateToProps = state => {
    console.log(state.auth.isLoading);
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddContent: (cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, endDate, isActive, topics, audience, history) =>
            dispatch(addContent(cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, endDate, isActive, topics, audience, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContent)
