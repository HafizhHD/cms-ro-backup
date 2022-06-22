import React, { useState, useEffect } from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './EditContent.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { editContent } from '../../../../store/actions/dashboard';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationContentEdit } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';
import axios from 'axios';
import RichTextEditor from 'react-rte';

//texteditor
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw, current,ContentState, convertFromHTML} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import {stateToHTML} from 'draft-js-export-html'
import htmlToDraft from 'html-to-draftjs'


function EditContent({
    onEditContent,
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

    const [isPageLoading, setPageLoading] = useState(true);
    const [programList, setProgramList] = useState();
    const [content, setContent] = useState();
    const [contentStartDate, setContentStartDate] = useState();
    const [conFromImgVid, setConFromImgVid] = useState('');
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
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;
    const _id = localStorage.getItem('contentSelected');

    const params1 = {
        whereKeyValues: {
            cobrandEmail: cobrandEmail
        }
    };

    useEffect(() => {
        setPageLoading(true);
        console.log(_id);
        if (_id) {
            const params = {
                whereKeyValues: {
                    cobrandEmail: cobrandEmail,
                    _id: _id
                }
            };

            axios({
                method: 'post',
                url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/contentFilter',
                data: params,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    console.log("Response data: ", response.data);
                    setContent(response.data.contents[0]);
                    let con = new DOMParser().parseFromString(response.data.contents[0].contents, 'text/html');
                    console.log(con);
                    if (response.data.contents[0].contentType === 'Artikel') {
                        let con1 = con.getElementById('contents');
                        console.log('Ini adalah con1 outer' + con1.outerHTML);
                        console.log('Ini adalah con1 inner' + con1.innerHTML);
                        let con2 = htmlToDraft(con1.innerHTML);
                        setTextValue(RichTextEditor.createValueFromString(con1.outerHTML, 'html'));
                        setConFromImgVid(con1.outerHTML);
                        // setArtikel(textValue)
                        setArtikel(EditorState.createWithContent(
                            ContentState.createFromBlockArray(
                              con2.contentBlocks, con2.entityMap)))

                        //   deskripsi
                        // let condes = new DOMParser().parseFromString(response.data.contents[0].contentDescription, 'text/html');
                        // console.log(condes);
                    }
                    else if (response.data.contents[0].contentType === 'Image') {
                        let con1 = con.getElementsByTagName('img')[0].toString();
                        setConFromImgVid(con1.src);
                    }
                    else if (response.data.contents[0].contentType === 'Video') {
                        let con1 = con.getElementsByTagName('iframe')[0];
                        setConFromImgVid(con1.src);
                    }
                    else if (response.data.contents[0].contentType === 'Pdf') {
                        let con1 = con.getElementsByTagName('iframe')[0];
                        let src = con1.src;
                        if (src.includes('&embedded=true')) src = src.replace('&embedded=true', '');
                        if (src.includes('http://docs.google.com/gview?url=')) src = src.replace('http://docs.google.com/gview?url=', '');
                        setConFromImgVid(src);
                    }


                    let des = response.data.contents[0].contentDescription;
                    console.log("des", des) //null
                    let des2 = htmlToDraft(des);
                    setDescription(EditorState.createWithContent(
                        ContentState.createFromBlockArray(
                            des2.contentBlocks, des2.entityMap)))
                    let date = response.data.contents[0].startDate.split('T')[0];
                    console.log(date);
                    setContentStartDate(date);
                    axios({
                        method: 'post',
                        url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter',
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


    if (isPageLoading) {
        return <RKLoader />
    }

    return (
        <>
            <Heading headingName="Artikel" routes={[
                { path: '/cms/content', name: 'Artikel' },
                { path: '/cms/content/edit', name: 'Ubah Artikel Terpilih' }
            ]} />
            <Formik
                initialValues={{ 
                    programId: content.programId ,
                    contentName: content.contentName,
                    contentDescription: draftToHtml(convertToRaw(description.getCurrentContent())),
                    contentType: content.contentType,
                    contentSource: content.contentSource,
                    contents: conFromImgVid,
                    startDate: contentStartDate
                }}
                validationSchema={validationContentEdit}
                validateOnChange={true}
                onSubmit={values => {
                    window.scroll(0,0);
                    onEditContent(_id, cobrandEmail, values.programId, values.contentName, values.contentDescription, values.contentType, values.contentSource, values.contentThumbnail, values.contents, values.startDate, history)
                }}
            >

                {({ handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="EditContent">
                            <h1>Ubah Artikel: {content.contentName}</h1>
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
                                    <option value="" disabled>Select Content Type</option>
                                    <option value="Artikel">Artikel</option>
                                    <option value="Image">Image</option>
                                    <option value="Video">Video</option>
                                    <option value="Pdf">File Pdf</option>
                                </select>
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
                                {values.contentType === "Artikel" ? (<>
                                    <label>Isi Artikel</label>
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

                                    /></>
                                ) : null}
                                {values.contentType === "Image" ? (<>
                                    <label>Isi Image</label>
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
                                    </>
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
                                    <>
                                    <label>URL Video</label>
                                    <InputComponent
                                        type="text"
                                        name="contents"
                                        className="form-group__input form-group__input--fullwidth"
                                        placeholder="Type Video URL... (Youtube/Vimeo/Dailymotion/etc)"
                                        value={values.contents}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    /></>
                                    : null}
                                {values.contentType === "Pdf" ? (
                                    <>
                                    <label>Isi PDF</label>
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
                                    </>
                                ) : null}
                                {touched.contents && <span className="message__error">{errors.contents}</span>}
                            </div>
                            {values.contentType !== 'Artikel' ? <div className="form-group">
                                <label>Isi Artikel</label>
                                <Editor
                                        editorState={description}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        onEditorStateChange={onEditorStateChange}
                                        // value={draftToHtml(convertToRaw(artikel.getCurrentContent()))}
                                        values={values.contentDescription}
       
                                        name="contentDescription"
                                        
                                        onChange={(editorState) => {
                                            setTextDeskripsi(values.contentDescription);
                                            // setFieldValue("contentDescription", description);
                                            setFieldValue("contentDescription", draftToHtml(convertToRaw(description.getCurrentContent())));
                                            console.log(description); ///value yang lama
                                            console.log(values.contentDescription) //get nilai yg terbaru
                                            
                                        }}
                                        
                                    />
                                {/* <RichTextEditor
                                        name="contentDescription"
                                        placeholder="Type your contents here..."
                                        className="form-group_rte"
                                        value={values.contentDescription}
                                        // value={values.contentDescription}
                                        toolbarConfig={toolbarConfig}
                                        onBlur={handleBlur}
                                        // onChange={handleChange}
                                        onChange={(e) => {
                                            setTextDeskripsi(e);
                                            setFieldValue("contentDescription", e.toString("html"));
                                            console.log(values.contentDescription);
                                        }}
                                /> */}
                                {/* <RichTextEditor
                                        name="contentDescription"
                                        placeholder="Type your contents here..."
                                        className="form-group_rte"
                                        // value={textValue}
                                        value={values.contentDescription}
                                        toolbarConfig={toolbarConfig}
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            setTextDeskripsi(e);
                                            setFieldValue("contentDescription", e.toString("html"));
                                            console.log(values.contentDescription);
                                        }}
                                    /> */}
                                {/* <InputComponent
                                    type="textarea"
                                    name="contentDescription"
                                    placeholder="Type Something..."
                                    value={values.contentDescription}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                /> */}
                                {/* {touched.contentDescription && <span className="message__error">{errors.contentDescription}</span>} */}
                            </div> : null}
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
                            <div className="form-group">
                                <label>Thumbnail</label>
                                <img className='photo' src={content.contentThumbnail}></img>
                                <br></br>
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
                            </div>
                            {/* <div className="form-group">
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
                            </div> */}
                            <div>
                                <button className="btn btn-submit" type="submit" onClick={() =>{
                                    console.log("Description", description);
                                    console.log("Touched:", touched);
                                    console.log("Error:", errors);
                                }}>
                                    Update Artikel
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
            {isLoading ? <RKLoader /> : null}
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
        onEditContent: (_id, cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, history) =>
            dispatch(editContent(_id, cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContent)
