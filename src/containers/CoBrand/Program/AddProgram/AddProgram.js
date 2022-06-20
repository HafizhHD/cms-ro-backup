import React, { useEffect, useState } from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddProgram.scss';
import axios from 'axios';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { getProgramCategoryList, getAudienceList } from './../../../../components/API/filter'
import { addProgram } from '../../../../store/actions/dashboard';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationProgram } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { getEmbedUrl } from '../../../../helpers/fileHelper/fileHelper'

import { ContentState, Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw, current } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { stateToHTML } from 'draft-js-export-html'

import Select from 'react-select';

function AddProgram({
    onAddProgram,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;

    const [isPageLoading, setPageLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);
    const [audience, setAudience] = useState([]);
    const [isStepAdded, setStepAdded] = useState(false);
    const [stepCount, setStepCount] = useState(0);
    const [responseCount, setResponseCount] = useState(1);

    const embedVideoCallBack = (link) =>{
        
        const asd = getEmbedUrl(link);
        console.log("Video embed ", asd);
        return asd;
    }

    const uploadCallback = (file) => new Promise(
        (resolve, reject) => {
        const reader= new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result);
            resolve({data: {link: reader.result}});
        }
        reader.onerror = error => reject(error);
        }
    );

    useEffect(() => {
        let paramTopic = {};
        let paramAudience = {};
        const promiseTopic = getProgramCategoryList(paramTopic);
        const promiseAudience = getAudienceList(paramAudience);

        Promise.all([promiseTopic, promiseAudience]).then(responseAll => {
            console.log(responseAll[0]);
            console.log(responseAll[1]);
            var topicRaw = [], audienceRaw = [];
            responseAll[0].data.Data.map(e => {
                topicRaw.push(e.category);
            })
            responseAll[1].data.Data.map(e => {
                audienceRaw.push({value: e.audianceName, label: e.audianceName});
            })
            console.log("Topic raw", topicRaw);
            console.log("Audience raw", audienceRaw);
            setCategoryList(topicRaw);
            setAudience(audienceRaw);
            setPageLoading(false);
        })
    }, [])

    if(isLoading || isPageLoading) {
        return <RKLoader />
    }

    return (
        <>
            <Heading headingName="Program" routes={[
                { path: '/cms/program', name: 'Program' },
                { path: '/cms/program/add', name: 'Buat Program Baru' }
            ]} />
            <Formik
                initialValues= {{
                    programName: '',
                    programDescription: '',
                    programThumbnail: '',
                    startDate: new Date().toISOString().split('T')[0],
                    endDate: new Date().toISOString().split('T')[0],
                    category: categoryList[0],
                    targetAudiance: [],
                    contentPrograms: []
                }}
                validationSchema = {validationProgram}
                validateOnChange = {true}
                onSubmit = { values => {
                    onAddProgram( cobrandEmail, values.programName, values.programDescription, values.programThumbnail, values.startDate, values.endDate, values.category, values.targetAudiance, values.contentPrograms, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddProgram">
                        <h1>Buat Program Baru</h1>
                        <div className="form-group">
                            <label>Judul</label>
                            <InputComponent 
                                type="text"
                                name="programName"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.programName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.programName && <span className="message__error">{errors.programName}</span>}
                        </div>

                        <div className="form-group">
                            <label>Kategori Program</label>
                            <select
                                name="category"
                                value={values.category}
                                onChange={handleChange}
                            >
                                {
                                    categoryList.map((category) => {
                                        return (
                                            <option value={category}>{category}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Target Pembaca</label>
                            <Select
                                isMulti
                                value={values.targetAudiance}
                                onChange={(e) => {
                                    setFieldValue("targetAudiance", e)
                                }}
                                name="targetAudience"
                                options={audience}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                            {touched.targetAudiance && <span className="message__error">{errors.targetAudiance}</span>}
                        </div>
                        <div className="form-group">
                            <label>Deskripsi</label>
                            <InputComponent
                                type="textarea"
                                name="programDescription"
                                placeholder="Type Something..."
                                value={values.programDescription}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                           {touched.programDescription && <span className="message__error">{errors.programDescription}</span>}
                        </div>
                        <div className="form-group">
                            <label>Thumbnail</label>
                            <InputComponent
                                type="file"
                                className="form-group__input"
                                name="programThumbnail"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    let file = e.currentTarget.files[0];
                                    if(file) {
                                        console.log("File to upload: ", file);
                                        setFieldValue("programThumbnail", file);
                                    }
                                }}
                            />
                            { touched.programThumbnail && <span className="message__error">{errors.programThumbnail}</span> }
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
                            <label>{"Jumlah Respon/Jawaban di Setiap Tahap"}</label>
                            <InputComponent 
                                type="number"
                                className="form-group__input"
                                value={responseCount}
                                min={1}
                                onChange={(e) => {
                                    console.log(e.currentTarget.value);
                                    if(e.currentTarget.value) {
                                        console.log('Yes masuk');
                                        if(responseCount > e.currentTarget.value) {
                                            values.contentPrograms.map((x, i) => {
                                                var y = x.response;
                                                if(x.answerKey === x.response[x.response.length-1] && values.category === 'Ujian') setFieldValue(`contentPrograms.${i}.answerKey`, x.response[0])
                                                y.splice(e.currentTarget.value-responseCount, responseCount-e.currentTarget.value);
                                                // console.log('Panjang respon: ' + y.length)
                                                setFieldValue(`contentPrograms.${i}.response`, y);
                                            })
                                        }
                                        else {
                                            // console.log("Nambah loh");
                                            values.contentPrograms.map((x, i) => {
                                                var y = x.response;
                                                for(var j = 0; j < e.currentTarget.value-responseCount; j++) {
                                                    console.log("Ini nambah?");
                                                    y.push('');
                                                }
                                                // console.log('Panjang respon: ' + y.length)
                                                setFieldValue(`contentPrograms.${i}.response`, y);
                                            })
                                        }
                                        setResponseCount(e.currentTarget.value)
                                    }
                                    else {
                                        setResponseCount(0);
                                        values.contentPrograms.map((x, i) => {
                                            setFieldValue(`contentPrograms.${i}.response`, []);
                                        })
                                    }
                                }}
                                disabled={false}
                            />
                        </div>
                        {values.contentPrograms.map((content, i) => {
                            const stepErrors = errors.contentPrograms?.length && errors.contentPrograms[i] || {};
                            const stepTouched = touched.contentPrograms?.length && touched.contentPrograms[i] || {};
                            return (
                                <div className="steps">
                                    <h2>Tahap {i+1}</h2>
                                    <div className="form-group">
                                        <label>Nama Tahap</label>
                                        <InputComponent
                                            type="text"
                                            name="namaTahapan"
                                            className="form-group__input form-group__input--fullwidth"
                                            placeholder="Example"
                                            value={content.namaTahapan}
                                            onChange={(e) => {
                                                setFieldValue(`contentPrograms.${i}.namaTahapan`, e.currentTarget.value);
                                            }}
                                            onBlur={handleBlur}
                                        />
                                        {stepTouched.namaTahapan && <span className="message__error">{stepErrors.namaTahapan}</span>}
                                    </div>
                                    {/* <div className="form-group">
                                        <label>Tipe Tahap</label>
                                        <select
                                            name="contentType"
                                            value={content.contentType}
                                            onChange={(e) => {
                                                setFieldValue(`contentPrograms.${i}.contentType`, e.currentTarget.value);
                                                setFieldValue(`contentPrograms.${i}.contents`, '');
                                            }}
                                        >
                                            <option value="Artikel">Artikel</option>
                                            <option value="Image">Image</option>
                                            <option value="Video">Video</option>
                                            <option value="Pdf">File Pdf</option>
                                        </select>
                                    </div> */}
                                    
                                    <div className="form-group">
                                        <label>Judul Tahap</label>
                                        <InputComponent
                                            type="text"
                                            name="contentName"
                                            className="form-group__input form-group__input--fullwidth"
                                            placeholder="Example"
                                            value={content.contentName}
                                            onChange={(e) => {
                                                setFieldValue(`contentPrograms.${i}.contentName`, e.currentTarget.value);
                                            }}
                                            onBlur={handleBlur}
                                        />
                                        {stepTouched.contentName && <span className="message__error">{stepErrors.contentName}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Isi Tahap</label>
                                        <p>*Untuk memasukkan video dengan URL, tekan tombol "Embedded" di sebelah kanan "Link".</p>
                                        {content.contentType === "Artikel" ? (
                                            <Editor
                                                editorState={content.artikel}
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                onEditorStateChange={(editorState) => setFieldValue(`contentPrograms.${i}.artikel`, editorState)}
                                                // onEditorStateChange={updateTextDescription}
                                                // value={description.values}
                                                value={draftToHtml(convertToRaw(content.artikel.getCurrentContent()))}
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
                                                    setFieldValue(`contentPrograms.${i}.contents`, draftToHtml(convertToRaw(content.artikel.getCurrentContent())));
                                                    // console.log(textDeskripsi);
                                                    // console.log(values.contents)
                                                }}

                                            />
                                        ) : null}
                                        {content.contentType === "Image" ? (
                                            <div>
                                                <p>Pilih media yang ingin di upload :</p>
                                                <form>
                                                    <input type="radio" id="html" name="fav_language" value={'internal'}
                                                        onClick={() => { setFieldValue(`contentPrograms.${i}.contentMedia`, 'internal') }}
                                                    />
                                                    <label for="internal" >Media Internal Komputer</label>
                                                    <br></br>
                                                    <input type="radio" id="html" name="fav_language" value={'url'}
                                                        onClick={() => setFieldValue(`contentPrograms.${i}.contentMedia`, 'url')}
                                                    />
                                                    <label for="url" >Alamat URL</label>
                                                    <br></br>
                                                </form>

                                                {content.contentMedia === 'internal' ?
                                                    <InputComponent
                                                        type="file"
                                                        className="form-group__input"
                                                        name="contents"
                                                        onBlur={handleBlur}
                                                        onChange={(e) => {
                                                            let file = e.currentTarget.files[0];
                                                            if (file) {
                                                                const reader = new FileReader();
                                                                reader.readAsDataURL(file);
                                                                reader.onloadend = function() {
                                                                    var base64data = reader.result;                
                                                                    setFieldValue(`contentPrograms.${i}.contents`, base64data);
                                                                }
                                                            }
                                                        }}
                                                    />
                                                    :
                                                    <InputComponent
                                                        type="text"
                                                        name="contents"
                                                        className="form-group__input form-group__input--fullwidth"
                                                        placeholder="Type Image URL... (https://example.com/something/something.jpg)"
                                                        value={content.contents}
                                                        onChange={(e) => {
                                                            setFieldValue(`contentPrograms.${i}.contents`, e.currentTarget.value);
                                                        }}
                                                        onBlur={handleBlur}
                                                    />
                                                }

                                            </div>

                                        ) : null}
                                        {content.contentType === "Video" ?
                                            <InputComponent
                                                type="text"
                                                name="contents"
                                                className="form-group__input form-group__input--fullwidth"
                                                placeholder="Type Video URL... (Youtube/Vimeo/Dailymotion/etc)"
                                                value={content.contents}
                                                onChange={(e) => {
                                                    setFieldValue(`contentPrograms.${i}.contents`, e.currentTarget.value);
                                                }}
                                                onBlur={handleBlur}
                                            />
                                            : null}
                                        {content.contentType === "Pdf" ? (
                                            <div>
                                                <p>Pilih media yang ingin di upload :</p>
                                                <form>
                                                    <input type="radio" id="html" name="fav_language" value={'internal'}
                                                        onClick={() => { setFieldValue(`contentPrograms.${i}.contentMedia`, 'internal') }}
                                                    />
                                                    <label for="internal" >Media Internal - Maks 300kb</label>
                                                    <br></br>
                                                    <input type="radio" id="html" name="fav_language" value={'url'}
                                                        onClick={() => setFieldValue(`contentPrograms.${i}.contentMedia`, 'url')}
                                                    />
                                                    <label for="url" >Alamat URL</label>
                                                    <br></br>
                                                </form>

                                                {content.contentMedia === 'internal' ?
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
                                                                const reader = new FileReader();
                                                                reader.readAsDataURL(file);
                                                                reader.onloadend = function() {
                                                                    var base64data = reader.result;                
                                                                    setFieldValue(`contentPrograms.${i}.contents`, base64data);
                                                                }
                                                            }
                                                        }}
                                                    />
                                                    :
                                                    <InputComponent
                                                        type="text"
                                                        name="contents"
                                                        className="form-group__input form-group__input--fullwidth"
                                                        placeholder="Type Pdf URL... (Pdf file)"
                                                        value={content.contents}
                                                        onChange={(e) => {
                                                            setFieldValue(`contentPrograms.${i}.contents`, e.currentTarget.value);
                                                        }}
                                                        onBlur={handleBlur}
                                                    />
                                                }
                                            </div>

                                        ) : null}
                                        {stepTouched.contents && <span className="message__error">{stepErrors.contents}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Respon/Jawaban</label>
                                        {content.response.map((res, index) => {
                                            console.log("Content response:", content.response)
                                            return <InputComponent
                                                type="text"
                                                name="response"
                                                className="form-group__input form-group__input--halfwidth"
                                                placeholder="Example"
                                                value={res}
                                                onChange={(e) => {
                                                    setFieldValue(`contentPrograms.${i}.response.${index}`, e.currentTarget.value);
                                                }}
                                                onBlur={handleBlur}
                                            />
                                        })}
                                    </div>
                                    {values.category === 'Ujian' ? (
                                        <div className="form-group">
                                            <label>Kunci Jawaban</label>
                                            <select
                                                name="category"
                                                value={content.answerKey}
                                                onChange={(e) => {
                                                    setFieldValue(`contentPrograms.${i}.answerKey`, e.currentTarget.value)
                                                }}
                                            >
                                                <option value='-1' disabled>{" "}</option>
                                                {
                                                    content.response.map((category) => {
                                                        return (
                                                            <option value={category}>{category}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    ) : null}
                                    {/* <div className="form-group-row">
                                        <div className="form-group">
                                            <label>Tanggal Mulai</label>
                                            <InputComponent
                                                type="date"
                                                className="form-group__input"
                                                name="startDate"
                                                value={content.startDate}
                                                min={new Date().toISOString().split('T')[0]}
                                                onChange={(e) => {
                                                    setFieldValue(`contentPrograms.${i}.startDate`, e.currentTarget.value);
                                                }}
                                                onBlur={handleBlur}
                                            />
                                            {stepTouched.startDate && <span className="message__error">{stepErrors.startDate}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label>Tanggal Selesai</label>
                                            <InputComponent
                                                type="date"
                                                className="form-group__input"
                                                name="endDate"
                                                value={content.endDate}
                                                min={content.startDate}
                                                onChange={(e) => {
                                                    setFieldValue(`contentPrograms.${i}.endDate`, e.currentTarget.value);
                                                }}
                                                onBlur={handleBlur}
                                            />
                                            {stepTouched.endDate && <span className="message__error">{stepErrors.endDate}</span>}
                                        </div>
                                    </div> */}
                                    <button id="add_program" type="button" onClick={() => {
                                        let conProg = values.contentPrograms;
                                        conProg.splice(i, 1);
                                        if(conProg.length < 1) setStepAdded(false); 
                                        setFieldValue('contentPrograms', conProg);
                                    }}>
                                        <FiMinus className="IconDelete" />
                                        <span>Hapus Tahap Ini</span>  
                                    </button>
                                </div>
                            )
                        })}
                        <button id="add_program" type="button" onClick={() => {
                            if(!isStepAdded) setStepAdded(true);
                            var newResponse = [];
                            for(var x = 0; x < responseCount; x++) {
                                newResponse.push('');
                            }
                            console.log("New response", newResponse);
                            let newStep = {
                                artikel: EditorState.createEmpty(),
                                contentMedia: 'url',

                                nomerUrutTahapan: values.contentPrograms.length + 1,
                                namaTahapan: '',
                                contentName: '',
                                contentType: 'Artikel',
                                contentSource: '',
                                contents: '',
                                startDate: values.startDate,
                                endDate: values.endDate,
                                topics: [],
                                targetAudiance: [],
                                response: newResponse,
                                answerKey: '-1'
                            }
                            let steps = values.contentPrograms;
                            steps.push(newStep);
                            setFieldValue("contentPrograms", steps);
                        }}>
                            <FiPlus className="IconAdd" />
                            <span>Tambah Tahap Program</span>  
                        </button>
                        <div>
                            <button className="btn btn-submit" type="submit" onClick={() => {
                                console.log("Touched", touched);
                                console.log("Error", errors)
                            }}>
                                Buat Program
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
        onAddProgram: ( cobrandEmail, programName, programDescription, programThumbnail, startDate, endDate, category, targetAudiance, contentPrograms, history ) =>
            dispatch(addProgram( cobrandEmail, programName, programDescription, programThumbnail, startDate, endDate, category, targetAudiance, contentPrograms, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddProgram)
