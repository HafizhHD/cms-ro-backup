import React, { useState, useEffect } from 'react';
import Heading from '../../../../../components/UI/Heading/Heading';
import './AddStep.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addStep } from '../../../../../store/actions/dashboard';
import RKLoader from '../../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationStepEdit } from '../../../../../helpers/validation/validation';
import InputComponent from '../../../../../components/UI/Input/Input';
import axios from 'axios';
import RichTextEditor from 'react-rte';
import { getEmbedUrl } from '../../../../../helpers/fileHelper/fileHelper'

//texteditor
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw, current,ContentState, convertFromHTML} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import {stateToHTML} from 'draft-js-export-html'
import htmlToDraft from 'html-to-draftjs'

import SunEditor, {buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';


function AddStep({
    onAddStep,
    isLoading
}) {


    let editorState = EditorState.createEmpty()

    const editorButtonList = [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['table', 'link', 'image', 'video'], /** 'audio', 'math', */ // You must add the 'katex' library at options to use the 'math' plugin.
        /** 'imageGallery', */ // You must add the "imageGalleryUrl".
        // ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'], // 'save', 'template'
        /** 'dir', 'dir_ltr', 'dir_rtl' */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
    ];
    

    const [artikel, setArtikel] = useState(editorState)
    const onEditorStateChangeArtikel = (editorState) => {
        setArtikel(editorState)
    }

    const embedVideoCallBack = (link) =>{
        
        const asd = getEmbedUrl(link);
        // console.log("Video embed ", asd);
        return asd;
    }

    const uploadCallback = (file) => new Promise(
        (resolve, reject) => {
        const reader= new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            // console.log(reader.result);
            resolve({data: {link: reader.result}});
        }
        reader.onerror = error => reject(error);
        }
    );

    const noUrutTahap = parseInt(localStorage.getItem('noUrutTahap'));
    const startDateProgram = localStorage.getItem('startDateProgram');
    const endDateProgram = localStorage.getItem('endDateProgram');

    const [isPageLoading, setPageLoading] = useState(true);
    const [responses, setResponses] = useState([]);
    const [content, setContent] = useState();
    const [contentStartDate, setContentStartDate] = useState();
    const [conFromImgVid, setConFromImgVid] = useState('');

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
    const programId = localStorage.getItem('programSelected');
    const responseCount = parseInt(localStorage.getItem('responseCount'));
    const [resCount, setResCount] = useState(responseCount);

    useEffect(() => {
    //     setPageLoading(true);
    //     // console.log(_id);
    //     if (_id) {
    //         const params = {
    //             whereKeyValues: {
    //                 cobrandEmail: cobrandEmail,
    //                 _id: _id
    //             }
    //         };

    //         axios({
    //             method: 'post',
    //             url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/contentFilter',
    //             data: params,
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         })
    //             .then(response => {
    //                 // console.log("Response data: ", response.data);
    //                 setContent(response.data.contents[0]);
    //                 let con = new DOMParser().parseFromString(response.data.contents[0].contents, 'text/html');
    //                 // console.log(con);
    //                 if (response.data.contents[0].contentType === 'Artikel') {
    //                     let con1 = con.getElementById('contents');
    //                     // console.log('Ini adalah con1 outer',  con1.outerHTML);
    //                     // console.log('Ini adalah con1 inner',  con1.innerHTML);
    //                     let con2 = htmlToDraft(con1.innerHTML);
    //                     setTextValue(RichTextEditor.createValueFromString(con1.outerHTML, 'html'));
    //                     setConFromImgVid(con1.outerHTML);
    //                     // setArtikel(textValue)
    //                     setArtikel(EditorState.createWithContent(
    //                         ContentState.createFromBlockArray(
    //                           con2.contentBlocks, con2.entityMap)))

    //                     //   deskripsi
    //                     // let condes = new DOMParser().parseFromString(response.data.contents[0].contentDescription, 'text/html');
    //                     // // console.log(condes);
    //                 }
    //                 else if (response.data.contents[0].contentType === 'Image') {
    //                     let con1 = con.getElementsByTagName('img')[0].toString();
    //                     setConFromImgVid(con1.src);
    //                 }
    //                 else if (response.data.contents[0].contentType === 'Video') {
    //                     let con1 = con.getElementsByTagName('iframe')[0];
    //                     setConFromImgVid(con1.src);
    //                 }
    //                 else if (response.data.contents[0].contentType === 'Pdf') {
    //                     let con1 = con.getElementsByTagName('iframe')[0];
    //                     let src = con1.src;
    //                     if (src.includes('&embedded=true')) src = src.replace('&embedded=true', '');
    //                     if (src.includes('http://docs.google.com/gview?url=')) src = src.replace('http://docs.google.com/gview?url=', '');
    //                     setConFromImgVid(src);
    //                 }


    //                 setPageLoading(false);
    //             })
    //             .catch(error => {
    //                 // console.log(error);
    //                 setPageLoading(false);
    //             });
    //     }

        let a = [];
        for(var i = 0; i < resCount; i++) {
            a.push('');
        }
        setResponses(a);
        setPageLoading(false);
    }, []);


    if (isPageLoading) {
        return <RKLoader />
    }

    return (
        <>
            <Heading headingName="Tahap" routes={[
                { path: '/cms/program/', name: 'Program' },
                { path: '/cms/program/edit', name: 'Ubah Program Terpilih' },
                { path: '/cms/program/edit/add-step', name: 'Tambah Tahap' }
            ]} />
            <Formik
                initialValues={{ 
                    nomerUrutTahapan: noUrutTahap + 1,
                    namaTahapan: '',
                    contentName: '',
                    contentType: 'Artikel',
                    contentSource: '',
                    contents: '',
                    startDate: startDateProgram.split('T')[0],
                    endDate: endDateProgram.split('T')[0],
                    topics: [],
                    targetAudiance: [],
                    response: responses,
                    answerKey: '-1'
                }}
                validationSchema={validationStepEdit}
                validateOnChange={true}
                onSubmit={values => {
                    onAddStep(programId, cobrandEmail, values.nomerUrutTahapan, values.namaTahapan, values.contentName, values.contentType, values.contentSource, values.contents, values.startDate, values.endDate, values.topics, values.targetAudiance, values.response, values.answerKey, history)
                }}
            >

                {({ handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="EditContent">
                            <h1>Tambah Tahap</h1>
                            <div className="form-group">
                                <label>Nama Tahap</label>
                                <InputComponent
                                    type="text"
                                    name="namaTahapan"
                                    className="form-group__input form-group__input--fullwidth"
                                    placeholder="Example"
                                    value={values.namaTahapan}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                {touched.namaTahapan && <span className="message__error">{errors.namaTahapan}</span>}
                            </div>
                            <div className="form-group">
                                <label>Judul Tahap</label>
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
                                <label>Isi Tahap</label>
                                {/* <p>*Untuk memasukkan video dengan URL, tekan tombol "Embedded" di sebelah kanan "Link".</p> */}
                                {values.contentType === "Artikel" ? (
                                    <SunEditor 
                                    setOptions={{
                                        buttonList: editorButtonList
                                    }}
                                    onChange={(content) => {
                                        setFieldValue('contents', content);
                                    }}
                                    height='500px'/>
                                    // <Editor
                                    //     editorState={artikel}
                                    //     toolbarClassName="toolbarClassName"
                                    //     wrapperClassName="wrapperClassName"
                                    //     editorClassName="editorClassName"
                                    //     onEditorStateChange={(editorState) => setArtikel(editorState)}
                                    //     // onEditorStateChange={updateTextDescription}
                                    //     // value={description.values}
                                    //     value={draftToHtml(convertToRaw(artikel.getCurrentContent()))}
                                    //     // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                                    //     name="contents"
                                    //     toolbar={{
                                    //         list: {
                                    //             inDropdown: true,
                                    //         },
                                    //         textAlign: {
                                    //             inDropdown: true,
                                    //         },
                                    //         image: {
                                    //             uploadEnabled: true,
                                    //             alignmentEnabled: true,
                                    //             previewImage: true,
                                    //             uploadCallback: uploadCallback,
                                    //             inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                    //             defaultSize: {
                                    //                 height: 'auto',
                                    //                 width: '360px',
                                    //             },
                                    //         },
                                    //         embedded:{
                                    //             embedCallback: embedVideoCallBack,
                                    //             defaultSize: {
                                    //                 height: 'auto',
                                    //                 width: '360px',
                                    //             },
                                    //         }
                                    //     }}
                                    //     onChange={() => {
                                    //         // setTextValue(editorState);
                                    //         // setFieldValue("contentDescription", description);
                                    //         setFieldValue('contents', draftToHtml(convertToRaw(artikel.getCurrentContent())));
                                    //         // // console.log(textDeskripsi);
                                    //         // // console.log(values.contents)
                                    //     }}

                                    // />
                                ) : null}
                                {values.contentType === "Image" ? (
                                    // <img src={conFromImgVid}></img>

                                    <InputComponent
                                        type="file"
                                        className="form-group__input"
                                        name="contents"
                                        onBlur={handleBlur}
                                        // value={values.contents}
                                        // onChange={handleChange}
                                        onChange={(e) => {
                                        let file = e.currentTarget.files[0];
                                        if (file) {
                                            // console.log("File to upload: ", file);
                                            setFieldValue("contents", file);
                                        }
                                    }}
                                    />

                                    // <InputComponent
                                    //     type="text"
                                    //     name="contents"
                                    //     className="form-group__input form-group__input--fullwidth" 
                                    //     placeholder="Type Image URL... (https://example.com/something/something.jpg)"
                                    //     value={values.contents}
                                    //     onChange={handleChange}
                                    //     onBlur={handleBlur}
                                    // />
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
                                    <InputComponent
                                        type="text"
                                        name="contents"
                                        className="form-group__input form-group__input--fullwidth"
                                        placeholder="Type Pdf URL... (just for pdf file)"
                                        // placeholder={values.contents}
                                        value={values.contents}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    // untuk internal masih diupdate
                                    //url ok
                                ) : null}
                                {touched.contents && <span className="message__error">{errors.contents}</span>}
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
                            {responseCount === 0 ? 
                            <div className="form-group">
                                <label>{"Jumlah Respon/Jawaban di Setiap Tahap"}</label>
                                <InputComponent 
                                    type="number"
                                    className="form-group__input"
                                    value={resCount}
                                    min={1}
                                    max={100}
                                    onChange={(e) => {
                                        // console.log(e.currentTarget.value);
                                        e.currentTarget.value = e.currentTarget.value.replace(/^0+/, '');
                                        // console.log('After', e.currentTarget.value);
                                        if(e.currentTarget.value) {
                                            // console.log('Yes masuk');
                                            if(resCount > e.currentTarget.value) {
                                                var y = values.response;
                                                if(values.response.length > 0 && values.answerKey === values.response[values.response.length-1] && localStorage.getItem('programCategory') === 'Ujian') setFieldValue('answerKey', values.response[0])
                                                y.splice(e.currentTarget.value-resCount, resCount-e.currentTarget.value);
                                                // // console.log('Panjang respon: ' + y.length)
                                                setFieldValue('response', y);
                                            }
                                            else {
                                                // // console.log("Nambah loh");
                                                var y = values.response;
                                                for(var j = 0; j < e.currentTarget.value-resCount; j++) {
                                                    // console.log("Ini nambah?");
                                                    y.push('');
                                                }
                                                // // console.log('Panjang respon: ' + y.length)
                                                setFieldValue('response', y);
                                            }
                                            setResCount(e.currentTarget.value)
                                        }
                                        else {
                                            setResCount(0);
                                            setFieldValue('response', []);
                                        }
                                    }}
                                    disabled={false}
                                />
                            </div> : null
                            }
                            <div className="form-group">
                                <label>Respon/Jawaban</label>
                                {values.response.map((res, index) => {
                                    // console.log("Content response:", res)
                                    return <InputComponent
                                        type="text"
                                        name="response"
                                        className="form-group__input form-group__input--halfwidth"
                                        placeholder="Example"
                                        value={res}
                                        onChange={(e) => {
                                            setFieldValue(`response.${index}`, e.currentTarget.value);
                                        }}
                                        onBlur={handleBlur}
                                    />
                                })}
                            </div>
                            {localStorage.getItem('programCategory') === 'Ujian' ? (
                                <div className="form-group">
                                    <label>Kunci Jawaban</label>
                                    <select
                                        name="answerKey"
                                        value={values.answerKey}
                                        onChange={(e) => {
                                            setFieldValue('answerKey', e.currentTarget.value)
                                        }}
                                    >
                                        <option value='-1' disabled>{" "}</option>
                                        {
                                            values.response.map((category) => {
                                                return (
                                                    <option value={category}>{category}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            ) : null}
                                <button className="btn btn-submit" type="submit" onClick={() => {
                                if(Object.keys(errors).length > 0) alert('Ada kolom yang belum diisi. Silakan cek kembali.');
                            }}>
                                    Tambah Tahap
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
    // console.log(state.auth.isLoading);
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddStep: (programId, cobrandEmail, nomerUrutTahapan, namaTahapan, contentName, contentType, contentSource, contents, startDate, endDate, topics, targetAudiance, response, answerKey, history) =>
            dispatch(addStep(programId, cobrandEmail, nomerUrutTahapan, namaTahapan, contentName, contentType, contentSource, contents, startDate, endDate, topics, targetAudiance, response, answerKey, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStep)
