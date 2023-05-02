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
import { getEmbedUrl } from '../../../../helpers/fileHelper/fileHelper'
import { getContentTopicList, getAudienceList, getCommunityList, getSchoolGroupList } from '../../../../components/API/filter';

//texteditor
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw, current,ContentState, convertFromHTML} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import {stateToHTML} from 'draft-js-export-html'
import htmlToDraft from 'html-to-draftjs'


import SunEditor, {buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';


import Select from 'react-select';

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

    const [topic, setTopic] = useState([]);
    const [audi, setAudi] = useState([]);
    const [topics, setTopics] = useState([]);
    const [audience, setAudience] = useState([]);

    const [preview, setPreview] = useState();
    const [preview64, setPreview64] = useState();

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

    const [isPageLoading, setPageLoading] = useState(true);
    const [programList, setProgramList] = useState();
    const [content, setContent] = useState();
    const [contentStartDate, setContentStartDate] = useState();
    const [conFromImgVid, setConFromImgVid] = useState('');
    const [valueRadio, setRadio] = useState('');

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
        // console.log(_id);
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
                    // console.log("Response data: ", response.data);
                    setContent(response.data.contents[0]);
                    setPreview64(response.data.contents[0].contentThumbnail)
                    console.log(response.data.contents[0]);
                    var topik = [], audie = [];
                    response.data.contents[0].topics.map(e => {
                        topik.push({
                            label: e, value: e
                        });
                    });
                    response.data.contents[0].targetAudiance.map(e => {
                        audie.push({
                            label: e, value: e
                        });
                    })
                    setTopic(topik);
                    setAudi(audie);
                    console.log(topik);
                    console.log(audie);
                    let con = new DOMParser().parseFromString(response.data.contents[0].contents, 'text/html');
                    // console.log(con);
                    if (response.data.contents[0].contentType === 'Artikel') {
                        let con1 = con.getElementById('contents');
                        // console.log('Ini adalah con1 outer' + con1.outerHTML);
                        // console.log('Ini adalah con1 inner' + con1.innerHTML);
                        let con2 = htmlToDraft(con1.innerHTML);
                        setTextValue(RichTextEditor.createValueFromString(con1.outerHTML, 'html'));
                        setConFromImgVid(con1.outerHTML);
                        // setArtikel(textValue)
                        setArtikel(EditorState.createWithContent(
                            ContentState.createFromBlockArray(
                              con2.contentBlocks, con2.entityMap)))

                        //   deskripsi
                        // let condes = new DOMParser().parseFromString(response.data.contents[0].contentDescription, 'text/html');
                        // // console.log(condes);
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
                    // console.log("des", des) //null
                    let des2 = htmlToDraft(des);
                    setDescription(EditorState.createWithContent(
                        ContentState.createFromBlockArray(
                            des2.contentBlocks, des2.entityMap)))
                    let date = response.data.contents[0].startDate.split('T')[0];
                    // console.log(date);
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
                            let paramTopic = {};
                            let paramAudience = {};
                            console.log("Masuk topik sini bjir");
                            const promiseTopic = getContentTopicList(paramTopic);
                            const promiseAudience = getAudienceList(paramAudience);
                            Promise.all([promiseTopic, promiseAudience]).then(responseAll => {
                                var topicRaw = [], audienceRaw = [];
                                responseAll[0].data.Data.map(e => {
                                    topicRaw.push({value: e.topicName, label: e.topicName});
                                })
                                responseAll[1].data.Data.map(e => {
                                    audienceRaw.push({value: e.audianceName, label: e.audianceName});
                                });
                                setTopics(topicRaw);
                                setAudience(audienceRaw);
                                setPageLoading(false);
                            })
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

    useEffect(() => {
        if(preview) {
            console.log("sini anjay");
            const reader = new FileReader();
            reader.readAsDataURL(preview);
            reader.onloadend = function() {
                var base64data = reader.result;      
                setPreview64(base64data);
            }
        }
    }, [preview]);


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
                    contentDescription: content.contentDescription,
                    contentType: content.contentType,
                    contentSource: content.contentSource,
                    contents: conFromImgVid,
                    startDate: contentStartDate,
                    topics: topic,
                    targetAudience: audi,
                }}
                validationSchema={validationContentEdit}
                validateOnChange={true}
                onSubmit={values => {
                    window.scroll(0,0);
                    onEditContent(_id, cobrandEmail, values.programId, values.contentName, values.contentDescription, values.contentType, values.contentSource, preview64, values.contents, values.startDate, values.topics, values.targetAudience, history)
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
                                <label>Topik</label>
                                {/* <select
                                    name="topics"
                                    value={values.topics}
                                    onChange={(e) => {
                                        setFieldValue("topics", [e.currentTarget.value]);
                                    }}
                                >
                                    {topic.map(e => {
                                        // console.log(e);
                                        return <option value={e.topicName}>{e.topicName}</option>
                                    })}
                                </select> */}
                                <Select
                                    isMulti cacheOptions defaultOptions
                                    value={values.topics}
                                    onChange={(e) => {   
                                        setFieldValue("topics", e)
                                       if(e.length > 0) localStorage.setItem('Topik', e[0].value)
                                       else localStorage.removeItem('Topik')
                                    }}
                                    name="topics"
                                    options={topics}
                                    // only allow user to choose up to 3 options
                                    isOptionDisabled={() => values.topics.length >= 3}
                                    className="basic-multi-select"
                                    classNamePrefix="select"                                />
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
                                    isMulti cacheOptions defaultOptions
                                    styles={{
                                        // Fixes the overlapping problem of the component
                                        menu: provided => ({ ...provided, zIndex: 9999 })
                                    }}
                                    value={values.targetAudience}
                                    onChange={(e) => {
                                        setFieldValue("targetAudience", e)
                                        if(e.length > 0) localStorage.setItem('Target Pembaca', e[0].value)
                                        else localStorage.removeItem('Target Pembaca')
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
                                {values.contentType === "Artikel" ? (<>
                                    <label>Isi Artikel</label>
                                    <SunEditor
                                    defaultValue={values.contents}
                                    setOptions={{
                                        buttonList: editorButtonList,
                                        imageWidth: '360px',
                                        videoHeight: '270px',
                                        videoHeightShow: false
                                    }}
                                    onChange={(content) => {
                                        setFieldValue('contents', content);
                                    }}
                                    height='500px'/>
                                    {/* <Editor
                                        editorState={artikel}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        onEditorStateChange={(editorState) => setArtikel(editorState)}
                                        // onEditorStateChange={updateTextDescription}
                                        // value={description.values}
                                        value={draftToHtml(convertToRaw(artikel.getCurrentContent()))}
                                        // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                                        name="contents"
                                        toolbar={{
                                            list: {
                                                inDropdown: true,
                                            },
                                            textAlign: {
                                                inDropdown: true,
                                            },
                                            image: {
                                                uploadEnabled: true,
                                                alignmentEnabled: true,
                                                previewImage: true,
                                                uploadCallback: uploadCallback,
                                                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                                defaultSize: {
                                                    height: 'auto',
                                                    width: '360px',
                                                },
                                            },
                                            embedded:{
                                                embedCallback: embedVideoCallBack,
                                                defaultSize: {
                                                    height: 'auto',
                                                    width: '360px',
                                                },
                                            }
                                        }}
                                        onChange={() => {
                                            // setTextValue(editorState);
                                            // setFieldValue("contentDescription", description);
                                            setFieldValue('contents', draftToHtml(convertToRaw(artikel.getCurrentContent())));
                                            // // console.log(textDeskripsi);
                                            // // console.log(values.contents)
                                        }}

                                    /> */}
                                    </>
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
                                                        // console.log("File to upload: ", file);
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
                                    //                 // console.log("File to upload: ", file);
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
                                                        // console.log("File to upload: ", file);
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
                                <SunEditor 
                                defaultValue={values.contentDescription}
                                setOptions={{
                                    buttonList: editorButtonList
                                }}
                                onChange={(content) => {
                                    setFieldValue('contentDescription', content);
                                }}
                                height='500px'/>
                                {/* <Editor
                                    editorState={description}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    onEditorStateChange={(editorState) => setDescription(editorState)}
                                    // onEditorStateChange={updateTextDescription}
                                    // value={description.values}
                                    value={draftToHtml(convertToRaw(description.getCurrentContent()))}
                                    // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                                    name="contentDescription"
                                    toolbar={{
                                        list: {
                                            inDropdown: true,
                                        },
                                        textAlign: {
                                            inDropdown: true,
                                        },
                                        image: {
                                            uploadEnabled: true,
                                            alignmentEnabled: true,
                                            previewImage: true,
                                            uploadCallback: uploadCallback,
                                            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                            defaultSize: {
                                                height: 'auto',
                                                width: '360px',
                                            },
                                        },
                                        embedded:{
                                            embedCallback: embedVideoCallBack,
                                            defaultSize: {
                                                height: 'auto',
                                                width: '360px',
                                            },
                                        }
                                    }}
                                    onChange={() => {
                                        // setTextValue(editorState);
                                        // setFieldValue("contentDescription", description);
                                        setFieldValue('contentDescription', draftToHtml(convertToRaw(description.getCurrentContent())));
                                        // // console.log(textDeskripsi);
                                        // // console.log(values.contents)
                                    }}

                                /> */}
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
                                            // console.log(values.contentDescription);
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
                                            // console.log(values.contentDescription);
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
                                { preview64 ? <img className='photo' src={preview64}/> : <img className='photo' src={content.contentThumbnail}></img> }
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
                                            setPreview(file);
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
                                <button className="btn btn-submit" type="submit" onClick={() => {
                                if(Object.keys(errors).length > 0) alert('Ada kolom yang belum diisi. Silakan cek kembali.');
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
    // console.log(state.auth.isLoading);
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditContent: (_id, cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, topics, targetAudience, history) =>
            dispatch(editContent(_id, cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, topics, targetAudience, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContent)
