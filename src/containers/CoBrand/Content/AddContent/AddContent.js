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
import { getContentTopicList, getAudienceList, getCommunityList } from '../../../../components/API/filter';
import { getEmbedUrl } from '../../../../helpers/fileHelper/fileHelper'

//texteditor
import { ContentState, Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw, current } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { stateToHTML } from 'draft-js-export-html'

import SunEditor, {buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

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

    const [preview, setPreview] = useState();
    const [preview64, setPreview64] = useState();

    const [topic, setTopic] = useState([]);
    const [audience, setAudience] = useState([]);
    const [community, setCommunity] = useState([]);

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
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;

    useEffect(() => {
        let paramTopic = {};
        let paramAudience = {};
        let paramCommunity = {
            whereKeyValues: {
                cobrandEmail: cobrandEmail
            }
        };
        const promiseTopic = getContentTopicList(paramTopic);
        const promiseAudience = getAudienceList(paramAudience);
        const promiseCommunity = getCommunityList(paramCommunity);

        Promise.all([promiseTopic, promiseAudience, promiseCommunity]).then(responseAll => {
            // // console.log(responseAll[0]);
            // // console.log(responseAll[1]);
            console.log(responseAll[2]);
            var topicRaw = [], audienceRaw = [], communityRaw = [];
            responseAll[0].data.Data.map(e => {
                topicRaw.push({value: e.topicName, label: e.topicName});
            })
            responseAll[1].data.Data.map(e => {
                audienceRaw.push({value: e.audianceName, label: e.audianceName});
            });
            responseAll[2].data.Data.map(e => {
                communityRaw.push({value: e.cobrandComunityId, label: e.cobrandComunityName});
            });
            setTopic(topicRaw);
            setAudience(audienceRaw);
            setCommunity(communityRaw);
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
                    targetAudience: [],
                    community: ''
                }}
                validationSchema={validationContent}
                validateOnChange={true}
                onSubmit={values => {
                    window.scrollTo(0, 0);
                    onAddContent(cobrandEmail, values.programId, values.contentName, values.contentDescription,
                        values.contentType, values.contentSource, values.contentThumbnail, values.contents,
                        values.startDate, values.endDate, values.isActive, values.topics, values.targetAudience, values.community, history)
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
                                        localStorage.setItem('Tipe Artikel', e.currentTarget.value)
                                        console.log(typeof e.currentTarget.value);
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
                                        // console.log(e);
                                        return <option value={e.topicName}>{e.topicName}</option>
                                    })}
                                </select> */}
                                <Select
                                    isMulti
                                    value={values.topics}
                                    onChange={(e) => {   
                                        setFieldValue("topics", e)
                                       if(e.length > 0) localStorage.setItem('Topik', e[0].value)
                                       else localStorage.removeItem('Topik')
                                    }}
                                    name="topics"
                                    options={topic}
                                    // only allow user to choose up to 3 options
                                    isOptionDisabled={() => values.topics.length >= 3}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    defaultInputValue={localStorage.getItem('Topik')}                                />
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
                                        if(e.length > 0) localStorage.setItem('Target Pembaca', e[0].value)
                                        else localStorage.removeItem('Target Pembaca')
                                    }}
                                    name="targetAudience"
                                    options={audience}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    defaultInputValue={localStorage.getItem('Target Pembaca')}
                                />
                                {touched.targetAudience && <span className="message__error">{errors.targetAudience}</span>}
                            </div>
                            <div className="form-group">
                                <label>Target Komunitas</label>
                                <select
                                    name="community"
                                    value={values.community}
                                    onChange={(e) => {
                                        setFieldValue("community", e.currentTarget.value);
                                    }}
                                >
                                    <option value="">-</option>
                                    {community.map(e => {
                                        return <option value={e.value}>{e.label}</option>
                                    })}
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

                                    <SunEditor 
                                    setOptions={{
                                        buttonList: editorButtonList,
                                        imageWidth: '360px'
                                    }}
                                    onChange={(content) => {
                                        setFieldValue('contents', content);
                                        console.log(content)
                                        localStorage.setItem('isi artikel',content)
                                    }}
                                    height='500px'
                                    defaultValue={localStorage.getItem('isi artikel')}
                                    />
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
                                setOptions={{
                                    buttonList: editorButtonList
                                }}
                                onChange={(content) => {
                                    setFieldValue('contentDescription', content);
                                    localStorage.setItem('isi artikel', content)
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
                                {touched.contentDescription && <span className="message__error">{errors.contentDescription}</span>}
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
                                                // // console.log("File to upload: ", file);
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
                            {/* <div className="form-group-row">
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
                            </div> */}
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
                                                // console.log(values.isActive);
                                            }}></input>
                                        <span className="form-group_switch_switch_slider"></span>
                                    </label>
                                    <p className="form-group_switch_active">Active</p>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-submit" type="submit" onClick={() => {
                                if(Object.keys(errors).length > 0) alert('Ada kolom yang belum diisi. Silakan cek kembali.');
                            }}>
                                    Buat Artikel
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
            {/*console.log(isLoading)*/}
            {isLoading ? <RKLoader /> : null}
        </>
    )

}



// 1- install pdfjs library | npm install pdfjs-dist@2.6.347
// 2- install the core package | npm install @react-pdf-viewer/core@2.4.1   ok
// 3- install pdf viewer default layout | npm install @react-pdf-viewer/default-layout  ok

// its so loadingStart, i am very tired n feell sleepy, well will be ok rgight, 

const mapStateToProps = state => {
    // console.log(state.auth.isLoading);
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddContent: (cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, endDate, isActive, topics, audience, community, history) =>
            dispatch(addContent(cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, endDate, isActive, topics, audience, community, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContent)




//CODE YANG LAMA

// import React, { useState, useEffect } from 'react';
// import Heading from '../../../../components/UI/Heading/Heading';
// import './AddContent.scss';
// import { Formik } from 'formik';
// import { useHistory } from 'react-router-dom';
// import { addContent, loadingStart } from '../../../../store/actions/dashboard';
// import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
// import { connect } from 'react-redux';
// import { validationContent } from '../../../../helpers/validation/validation';
// import InputComponent from '../../../../components/UI/Input/Input';
// import axios from 'axios';
// import RichTextEditor from 'react-rte';
// import { toBase64 } from '../../../../helpers/fileHelper/fileHelper'
// import TextEditor from '../../../../components/Texteditor/TextEditor';
// import { getContentTopicList, getAudienceList } from '../../../../components/API/filter';
// import { getEmbedUrl } from '../../../../helpers/fileHelper/fileHelper'

// //texteditor
// import { ContentState, Editor } from "react-draft-wysiwyg";
// import { EditorState, convertToRaw, convertFromRaw, current } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";
// import { stateToHTML } from 'draft-js-export-html'

// import SunEditor, {buttonList} from 'suneditor-react';
// import 'suneditor/dist/css/suneditor.min.css';

// import Select from 'react-select';

// function AddContent({
//     onAddContent,
//     isLoading
// }) {
//     let editorState = EditorState.createEmpty()


//     const [description, setDescription] = useState(editorState)
//     const onEditorStateChange = (editorState) => {
//         setDescription(editorState)
//     }

//     const editorButtonList = [
//         ['undo', 'redo'],
//         ['font', 'fontSize', 'formatBlock'],
//         ['paragraphStyle', 'blockquote'],
//         ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
//         ['fontColor', 'hiliteColor', 'textStyle'],
//         ['removeFormat'],
//         ['outdent', 'indent'],
//         ['align', 'horizontalRule', 'list', 'lineHeight'],
//         ['table', 'link', 'image', 'video'], /** 'audio', 'math', */ // You must add the 'katex' library at options to use the 'math' plugin.
//         /** 'imageGallery', */ // You must add the "imageGalleryUrl".
//         // ['fullScreen', 'showBlocks', 'codeView'],
//         ['preview', 'print'], // 'save', 'template'
//         /** 'dir', 'dir_ltr', 'dir_rtl' */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
//     ];

//     const [artikel, setArtikel] = useState(editorState)
//     const onEditorStateChangeArtikel = (editorState) => {
//         setArtikel(editorState)
//     }

//     const [preview, setPreview] = useState();
//     const [preview64, setPreview64] = useState();

//     const [topic, setTopic] = useState([]);
//     const [audience, setAudience] = useState([]);

//     const embedVideoCallBack = (link) =>{
        
//         const asd = getEmbedUrl(link);
//         // console.log("Video embed ", asd);
//         return asd;
//     }

//     const uploadCallback = (file) => new Promise(
//         (resolve, reject) => {
//         const reader= new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () => {
//             // console.log(reader.result);
//             resolve({data: {link: reader.result}});
//         }
//         reader.onerror = error => reject(error);
//         }
//     );




//     const [isPageLoading, setPageLoading] = useState(true);
//     const [programList, setProgramList] = useState();
//     const [valueRadio, setRadio] = useState('');

//     const [textDeskripsi, setTextDeskripsi] = useState(RichTextEditor.createEmptyValue());
//     const [textValue, setTextValue] = useState(RichTextEditor.createEmptyValue());
//     const toolbarConfig = {
//         // Optionally specify the groups to display (displayed in the order listed).
//         display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
//         INLINE_STYLE_BUTTONS: [
//             { label: 'Bold', style: 'BOLD' },
//             { label: 'Italic', style: 'ITALIC' },
//             { label: 'Underline', style: 'UNDERLINE' },
//             { label: 'Strikethrough', style: 'STRIKETHROUGH' }
//         ],
//         BLOCK_TYPE_DROPDOWN: [
//             { label: 'Normal', style: 'unstyled' },
//             { label: 'Heading Large', style: 'header-one' },
//             { label: 'Heading Medium', style: 'header-two' },
//             { label: 'Heading Small', style: 'header-three' }
//         ],
//         BLOCK_TYPE_BUTTONS: [
//             { label: 'Unordered List', style: 'unordered-list-item' },
//             { label: 'Ordered List', style: 'ordered-list-item' },
//             { label: 'Blockquote', style: 'blockquote' }
//         ]
//     };

//     const history = useHistory();
//     const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;

//     useEffect(() => {
//         let paramTopic = {};
//         let paramAudience = {};
//         const promiseTopic = getContentTopicList(paramTopic);
//         const promiseAudience = getAudienceList(paramAudience);

//         Promise.all([promiseTopic, promiseAudience]).then(responseAll => {
//             // // console.log(responseAll[0]);
//             // // console.log(responseAll[1]);
//             var topicRaw = [], audienceRaw = [];
//             responseAll[0].data.Data.map(e => {
//                 topicRaw.push({value: e.topicName, label: e.topicName});
//             })
//             responseAll[1].data.Data.map(e => {
//                 audienceRaw.push({value: e.audianceName, label: e.audianceName});
//             })
//             setTopic(topicRaw);
//             setAudience(audienceRaw);
//             setPageLoading(false);
//         })
//     }, []);

//     useEffect(() => {
//         if(preview) {
//             const reader = new FileReader();
//             reader.readAsDataURL(preview);
//             reader.onloadend = function() {
//                 var base64data = reader.result;                
//                 setPreview64(base64data);
//             }
//         }
//     }, [preview])

//     if (isPageLoading) {
//         return <RKLoader />
//     }

//     return (
//         <>
//             <Heading headingName="Artikel" routes={[
//                 { path: '/cms/content', name: 'Artikel' },
//                 { path: '/cms/content/add', name: 'Buat Artikel Baru' }
//             ]} />
//             <Formik
//                 initialValues={{
//                     programId: '-1',
//                     contentName: '',
//                     contentDescription: '',
//                     contentType: 'Artikel',
//                     contentSource: '',
//                     contentThumbnail: '',
//                     contents: '',
//                     startDate: new Date().toISOString().split('T')[0],
//                     endDate: new Date().toISOString().split('T')[0],
//                     isActive: true,
//                     topics: [],
//                     targetAudience: []
//                 }}
//                 validationSchema={validationContent}
//                 validateOnChange={true}
//                 onSubmit={values => {
//                     window.scrollTo(0, 0);
//                     onAddContent(cobrandEmail, values.programId, values.contentName, values.contentDescription,
//                         values.contentType, values.contentSource, values.contentThumbnail, values.contents,
//                         values.startDate, values.endDate, values.isActive, values.topics, values.targetAudience, history)
//                 }}
//             >
//                 {({ handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched }) => (
//                     <form onSubmit={handleSubmit}>
//                         <div className="AddContent">
//                             <h1 className="AddContent_title">Buat Artikel Baru</h1>
//                             <div className="form-group">
//                                 <label>Tipe Artikel</label>
//                                 <select
//                                     name="contentType"
//                                     value={values.contentType}
//                                     onChange={(e) => {
//                                         setFieldValue("contentType", e.currentTarget.value);
//                                         setFieldValue("contents", '');
//                                     }}
//                                 >
//                                     <option value="Artikel">Artikel</option>
//                                     <option value="Image">Image</option>
//                                     <option value="Video">Video</option>
//                                     <option value="Pdf">File Pdf</option>
//                                 </select>
//                             </div>
//                             <div className="form-group">
//                                 <label>Topik</label>
//                                 {/* <select
//                                     name="topics"
//                                     value={values.topics}
//                                     onChange={(e) => {
//                                         setFieldValue("topics", [e.currentTarget.value]);
//                                     }}
//                                 >
//                                     {topic.map(e => {
//                                         // console.log(e);
//                                         return <option value={e.topicName}>{e.topicName}</option>
//                                     })}
//                                 </select> */}
//                                 <Select
//                                     isMulti
//                                     value={values.topics}
//                                     onChange={(e) => {
//                                         setFieldValue("topics", e)
//                                     }}
//                                     name="topics"
//                                     options={topic}
//                                     // only allow user to choose up to 3 options
//                                     isOptionDisabled={() => values.topics.length >= 3}
//                                     className="basic-multi-select"
//                                     classNamePrefix="select"
//                                 />
//                                 {touched.topics && <span className="message__error">{errors.topics}</span>}
//                             </div>
//                             <div className="form-group">
//                                 <label>Target Pembaca</label>
//                                 {/* <select
//                                     name="targetAudience"
//                                     value={values.targetAudience}
//                                     onChange={(e) => {
//                                         setFieldValue("targetAudience", [e.currentTarget.value]);
//                                     }}
//                                 >
//                                     {audience.map(e => {
//                                         return <option value={e.audianceName}>{e.audianceName}</option>
//                                     })}
//                                 </select> */}
//                                 <Select
//                                     isMulti
//                                     value={values.targetAudience}
//                                     onChange={(e) => {
//                                         setFieldValue("targetAudience", e)
//                                     }}
//                                     name="targetAudience"
//                                     options={audience}
//                                     className="basic-multi-select"
//                                     classNamePrefix="select"
//                                 />
//                                 {touched.targetAudience && <span className="message__error">{errors.targetAudience}</span>}
//                             </div>
                            
                            
//                             <div className="form-group">
//                                 <label>Judul</label>
//                                 <InputComponent
//                                     type="text"
//                                     name="contentName"
//                                     className="form-group__input form-group__input--fullwidth"
//                                     placeholder="Example"
//                                     value={values.contentName}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                                 {touched.contentName && <span className="message__error">{errors.contentName}</span>}
//                             </div>
//                             <div className="form-group">
//                                 {values.contentType === "Artikel" ? (<>
//                                     <label>Isi Artikel</label>

//                                     <SunEditor 
//                                     setOptions={{
//                                         buttonList: editorButtonList,
//                                         imageWidth: '360px'
//                                     }}
//                                     onChange={(content) => {
//                                         setFieldValue('contents', content);
//                                     }}
//                                     height='500px'/>
//                                     {/* <Editor
//                                         editorState={artikel}
//                                         toolbarClassName="toolbarClassName"
//                                         wrapperClassName="wrapperClassName"
//                                         editorClassName="editorClassName"
//                                         onEditorStateChange={(editorState) => setArtikel(editorState)}
//                                         // onEditorStateChange={updateTextDescription}
//                                         // value={description.values}
//                                         value={draftToHtml(convertToRaw(artikel.getCurrentContent()))}
//                                         // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//                                         name="contents"
//                                         toolbar={{
//                                             list: {
//                                                 inDropdown: true,
//                                             },
//                                             textAlign: {
//                                                 inDropdown: true,
//                                             },
//                                             image: {
//                                                 uploadEnabled: true,
//                                                 alignmentEnabled: true,
//                                                 previewImage: true,
//                                                 uploadCallback: uploadCallback,
//                                                 inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
//                                                 defaultSize: {
//                                                     height: 'auto',
//                                                     width: '360px',
//                                                 },
//                                             },
//                                             embedded:{
//                                                 embedCallback: embedVideoCallBack,
//                                                 defaultSize: {
//                                                     height: 'auto',
//                                                     width: '360px',
//                                                 },
//                                             }
//                                         }}
//                                         onChange={() => {
//                                             // setTextValue(editorState);
//                                             // setFieldValue("contentDescription", description);
//                                             setFieldValue('contents', draftToHtml(convertToRaw(artikel.getCurrentContent())));
//                                             // // console.log(textDeskripsi);
//                                             // // console.log(values.contents)
//                                         }}

//                                     /> */}
//                                     </>
//                                 ) : null}
//                                 {values.contentType === "Image" ? (<>
//                                     <label>Isi Image</label>
//                                     <div>
//                                         <p>Pilih media yang ingin di upload :</p>
//                                         <form>
//                                             <input type="radio" id="html" name="fav_language" value={'internal'}
//                                                 onClick={() => { setRadio('internal') }}
//                                             />
//                                             <label for="internal" >Media Internal Komputer</label>
//                                             <br></br>
//                                             <input type="radio" id="html" name="fav_language" value={'url'}
//                                                 onClick={() => setRadio('url')}
//                                             />
//                                             <label for="url" >Alamat URL</label>
//                                             <br></br>
//                                         </form>

//                                         {valueRadio === 'internal' ?
//                                             <InputComponent
//                                                 type="file"
//                                                 className="form-group__input"
//                                                 name="contents"
//                                                 onBlur={handleBlur}
//                                                 //   value={values.contents}
//                                                 //   onChange={handleChange}
//                                                 onChange={(e) => {
//                                                     let file = e.currentTarget.files[0];
//                                                     if (file) {
//                                                         // console.log("File to upload: ", file);
//                                                         setFieldValue("contents", file);
//                                                     }
//                                                 }}
//                                             />
//                                             :
//                                             <InputComponent
//                                                 type="text"
//                                                 name="contents"
//                                                 className="form-group__input form-group__input--fullwidth"
//                                                 placeholder="Type Image URL... (https://example.com/something/something.jpg)"
//                                                 value={values.contents}
//                                                 onChange={handleChange}
//                                                 onBlur={handleBlur}
//                                             />
//                                         }

//                                     </div>
//                                     </>
//                                 ) : null}
//                                 {values.contentType === "Video" ?
//                                     // (
//                                     //     <div>
//                                     //         <p>Pilih media yang ingin di upload :</p>
//                                     //         <form>
//                                     //             <input type="radio" id="html" name="fav_language" value={'internal'}
//                                     //             onClick={() => {setRadio('internal')}}
//                                     //             />
//                                     //             <label for="internal" >Media Internal Komputer</label>
//                                     //             <br></br>
//                                     //             <input type="radio" id="html" name="fav_language" value={'url'}
//                                     //             onClick={() =>setRadio('url')}
//                                     //             />
//                                     //             <label for="url" >Alamat URL</label>
//                                     //             <br></br>
//                                     //         </form>

//                                     //         {valueRadio === 'internal' ? 
//                                     //         <InputComponent
//                                     //         type="file"
//                                     //         className="form-group__input"
//                                     //         name="contents"
//                                     //         onBlur={handleBlur}
//                                     //         //   value={values.contents}
//                                     //         //   onChange={handleChange}
//                                     //         onChange={(e) => {
//                                     //             let file = e.currentTarget.files[0];
//                                     //             if (file) {
//                                     //                 // console.log("File to upload: ", file);
//                                     //                 setFieldValue("contents", file);
//                                     //             }
//                                     //         }}
//                                     //         />
//                                     //         : 
//                                     //         <InputComponent
//                                     //         type="text"
//                                     //         name="contents"
//                                     //         className="form-group__input form-group__input--fullwidth"
//                                     //         placeholder="Type Video URL... (Youtube/Vimeo/Dailymotion/etc)"
//                                     //         value={values.contents}
//                                     //         onChange={handleChange}
//                                     //         onBlur={handleBlur}
//                                     //         />
//                                     //         }
//                                     //     </div>

//                                     // )
//                                     <>
//                                     <label>URL Video</label>
//                                     <InputComponent
//                                         type="text"
//                                         name="contents"
//                                         className="form-group__input form-group__input--fullwidth"
//                                         placeholder="Type Video URL... (Youtube/Vimeo/Dailymotion/etc)"
//                                         value={values.contents}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     /></>
//                                     : null}
//                                 {values.contentType === "Pdf" ? (
//                                     <>
//                                     <label>Isi PDF</label>
//                                     <div>
//                                         <p>Pilih media yang ingin di upload :</p>
//                                         <form>
//                                             <input type="radio" id="html" name="fav_language" value={'internal'}
//                                                 onClick={() => { setRadio('internal') }}
//                                             />
//                                             <label for="internal" >Media Internal - Maks 300kb</label>
//                                             <br></br>
//                                             <input type="radio" id="html" name="fav_language" value={'url'}
//                                                 onClick={() => setRadio('url')}
//                                             />
//                                             <label for="url" >Alamat URL</label>
//                                             <br></br>
//                                         </form>

//                                         {valueRadio === 'internal' ?
//                                             <InputComponent
//                                                 type="file"
//                                                 className="form-group__input"
//                                                 name="contents"
//                                                 onBlur={handleBlur}
//                                                 //   value={values.contents}
//                                                 //   onChange={handleChange}
//                                                 onChange={(e) => {
//                                                     let file = e.currentTarget.files[0];
//                                                     if (file) {
//                                                         // console.log("File to upload: ", file);
//                                                         setFieldValue("contents", file);
//                                                     }
//                                                 }}
//                                             />
//                                             :
//                                             <InputComponent
//                                                 type="text"
//                                                 name="contents"
//                                                 className="form-group__input form-group__input--fullwidth"
//                                                 placeholder="Type Pdf URL... (Pdf file)"
//                                                 value={values.contents}
//                                                 onChange={handleChange}
//                                                 onBlur={handleBlur}
//                                             />
//                                         }
//                                     </div>
//                                     </>
//                                 ) : null}
//                                 {touched.contents && <span className="message__error">{errors.contents}</span>}
//                             </div>
//                             {values.contentType !== 'Artikel' ? <div className="form-group">
//                                 <label>Isi Artikel</label>
//                                 <SunEditor 
//                                 setOptions={{
//                                     buttonList: editorButtonList
//                                 }}
//                                 onChange={(content) => {
//                                     setFieldValue('contentDescription', content);
//                                 }}
//                                 height='500px'/>
//                                 {/* <Editor
//                                     editorState={description}
//                                     toolbarClassName="toolbarClassName"
//                                     wrapperClassName="wrapperClassName"
//                                     editorClassName="editorClassName"
//                                     onEditorStateChange={(editorState) => setDescription(editorState)}
//                                     // onEditorStateChange={updateTextDescription}
//                                     // value={description.values}
//                                     value={draftToHtml(convertToRaw(description.getCurrentContent()))}
//                                     // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//                                     name="contentDescription"
//                                     toolbar={{
//                                         list: {
//                                             inDropdown: true,
//                                         },
//                                         textAlign: {
//                                             inDropdown: true,
//                                         },
//                                         image: {
//                                             uploadEnabled: true,
//                                             alignmentEnabled: true,
//                                             previewImage: true,
//                                             uploadCallback: uploadCallback,
//                                             inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
//                                             defaultSize: {
//                                                 height: 'auto',
//                                                 width: '360px',
//                                             },
//                                         },
//                                         embedded:{
//                                             embedCallback: embedVideoCallBack,
//                                             defaultSize: {
//                                                 height: 'auto',
//                                                 width: '360px',
//                                             },
//                                         }
//                                     }}
//                                     onChange={() => {
//                                         // setTextValue(editorState);
//                                         // setFieldValue("contentDescription", description);
//                                         setFieldValue('contentDescription', draftToHtml(convertToRaw(description.getCurrentContent())));
//                                         // // console.log(textDeskripsi);
//                                         // // console.log(values.contents)
//                                     }}

//                                 /> */}
//                                 {touched.contentDescription && <span className="message__error">{errors.contentDescription}</span>}
//                             </div> : null}
//                             <div className="form-group">
//                                 <label>Sumber</label>
//                                 <InputComponent
//                                     type="text"
//                                     name="contentSource"
//                                     className="form-group__input form-group__input--fullwidth"
//                                     placeholder="Example"
//                                     value={values.contentSource}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}

//                                 />
//                                 {touched.contentSource && <span className="message__error">{errors.contentSource}</span>}
//                             </div>
//                             <div className="form-group-row">
//                                 <div className="form-group">
//                                     <label>Thumbnail</label>
//                                     <InputComponent
//                                         type="file"
//                                         className="form-group__input"
//                                         name="contentThumbnail"
//                                         onBlur={handleBlur}
//                                         onChange={(e) => {
//                                             let file = e.currentTarget.files[0];
//                                             if (file) {
//                                                 // // console.log("File to upload: ", file);
//                                                 setFieldValue("contentThumbnail", file);
//                                                 setPreview(file);
//                                             }
//                                         }}
//                                     />
//                                     {touched.contentThumbnail && <span className="message__error">{errors.contentThumbnail}</span>}
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Preview</label>
//                                     {preview64 ? <div className="form-group-preview"><img src={preview64}/></div> : null}
//                                 </div>
//                             </div>
//                             {/* <div className="form-group-row">
//                                 <div className="form-group">
//                                     <label>Tanggal Mulai</label>
//                                     <InputComponent
//                                         type="date"
//                                         className="form-group__input"
//                                         name="startDate"
//                                         value={values.startDate}
//                                         min={new Date().toISOString().split('T')[0]}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     />
//                                     {touched.startDate && <span className="message__error">{errors.startDate}</span>}
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Tanggal Selesai</label>
//                                     <InputComponent
//                                         type="date"
//                                         className="form-group__input"
//                                         name="endDate"
//                                         value={values.endDate}
//                                         min={values.startDate}
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                     />
//                                     {touched.endDate && <span className="message__error">{errors.endDate}</span>}
//                                 </div>
//                             </div> */}
//                             <div className="form-group">
//                                 <div className="form-group_switch">
//                                     <p className="form-group_switch_status">Status:</p>
//                                     <p className="form-group_switch_inactive">Inactive</p>
//                                     <label className="form-group_switch_switch">
//                                         <input type="checkbox" className="form-group_switch_switch_checkbox"
//                                             name="isActive"
//                                             defaultChecked={values.isActive}
//                                             onChange={() => {
//                                                 values.isActive = !values.isActive;
//                                                 // console.log(values.isActive);
//                                             }}></input>
//                                         <span className="form-group_switch_switch_slider"></span>
//                                     </label>
//                                     <p className="form-group_switch_active">Active</p>
//                                 </div>
//                             </div>
//                             <div>
//                                 <button className="btn btn-submit" type="submit" onClick={() => {
//                                 if(Object.keys(errors).length > 0) alert('Ada kolom yang belum diisi. Silakan cek kembali.');
//                             }}>
//                                     Buat Artikel
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 )}
//             </Formik>
//             {/*console.log(isLoading)*/}
//             {isLoading ? <RKLoader /> : null}
//         </>
//     )

// }



// // 1- install pdfjs library | npm install pdfjs-dist@2.6.347
// // 2- install the core package | npm install @react-pdf-viewer/core@2.4.1   ok
// // 3- install pdf viewer default layout | npm install @react-pdf-viewer/default-layout  ok

// // its so loadingStart, i am very tired n feell sleepy, well will be ok rgight, 

// const mapStateToProps = state => {
//     // console.log(state.auth.isLoading);
//     return {
//         isLoading: state.auth.isLoading
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAddContent: (cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, endDate, isActive, topics, audience, history) =>
//             dispatch(addContent(cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, contentThumbnail, contents, startDate, endDate, isActive, topics, audience, history))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddContent)
