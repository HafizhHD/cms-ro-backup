import React, { useEffect, useState } from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './ChildControl.scss';
import './../../../../components/UI/Table/Table.scss'
import { DatePicker } from 'react-datepicker'
import axios from 'axios';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { getUserInstalledApps, getDeviceScheduleList, getAppLimitList, getModeAsuhList } from './../../../../components/API/filter'
import { childControl } from '../../../../store/actions/dashboard';
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

import SunEditor, {buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import Select from 'react-select';

function ChildControl({
    onChildControl,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;

    const userName = localStorage.getItem('userNameSelected');
    const userEmail = localStorage.getItem('userSelected');

    const [isPageLoading, setPageLoading] = useState(true);

    const [appLimit, setAppLimit] = useState([]); // mode 0 for no block, 1 for block, 2 for limit
    const [modeAsuh, setModeAsuh] = useState('normal')
    const [isModeAsuh, setIsModeAsuh] = useState(false);

    const [isScheduleAdded, setScheduleAdded] = useState([]);
    const [scheduleCount, setScheduleCount] = useState(0);

    // const [categoryList, setCategoryList] = useState([]);
    // const [audience, setAudience] = useState([]);
    // const [responseCount, setResponseCount] = useState(1);


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

    function compare( a, b ) {
        if ( a.appName < b.appName ){
          return -1;
        }
        if ( a.appName > b.appName ){
          return 1;
        }
        return 0;
      }

    useEffect(() => {
        let param = {
            whereKeyValues: {
                emailUser: userEmail
            }
        }
        const userAppList = getUserInstalledApps(param);
        const deviceScheduleList = getDeviceScheduleList(param);
        const appLimitList = getAppLimitList(param);
        const modeAsuhList = getModeAsuhList(param);

        Promise.all([userAppList, appLimitList, modeAsuhList, deviceScheduleList])
        .then(responseAll => {
            console.log(responseAll[0]);
            console.log(responseAll[1]);
            console.log(responseAll[2]);
            console.log(responseAll[3]);

            //App Limit & Block
            let apu = responseAll[0].data.appdevices ?? [];
            let appL = apu.length > 0 ? responseAll[0].data.appdevices[0].appName : [];
            appL.sort((a,b) => (a.appName > b.appName) ? 1 : ((b.appName > a.appName) ? -1 : 0));
            let lim = responseAll[1].data.appUsageLimit ?? [];
            var res = [];
            for(var i = 0; i < appL.length; i++) {
                var appM = 0;
                var appLim = 0;
                var id = '';
                for(var j = 0; j < lim.length && appM === 0; j++) {
                    if(lim[j].appId === appL[i].packageId) {
                        if(lim[j].limit === 0) appM = 1;
                        else appM = 2;
                        appLim = lim[j].limit;
                        id = lim[j]._id;
                    }
                }
                let p = {
                    _id: id,
                    appName: appL[i].appName,
                    appCategory: appL[i].appCategory,
                    packageId: appL[i].packageId,
                    mode: appM.toString(),
                    limit: appLim,
                    isChanged: false
                }
                res.push(p);
            }
            console.log(res);
            setAppLimit(res);

            //Mode Asuh
            let modeA = responseAll[2].data.childModeAsuhs;
            if(modeA.length > 0) {
                setModeAsuh(modeA[0].modeAsuhName);
                setIsModeAsuh(true);
            }
            
            //Device Schedule
            setScheduleAdded(responseAll[3].data.deviceUsageSchedules);
            setTimeout(() => {
                console.log(appLimit);
                setPageLoading(false);
            }, 2000);
        })
    }, [])

    if(isLoading || isPageLoading) {
        return <RKLoader />
    }

    return (
        <>
            <Heading headingName={'Kontrol Anak: ' + userName} routes={[
                { path: '/cms/user', name: 'Pengguna' },
                { path: '/cms/user/child-control', name: 'Kontrol Anak' }
            ]} />
            <Formik
                initialValues={{ 
                    appLimitBlock: appLimit.slice(),
                    modeAsuhSelected: modeAsuh,
                    deviceSchedule: isScheduleAdded.slice()
                }}
                // validationSchema={validationStepEdit}
                // validateOnChange={true}
                onSubmit={values => {
                    onChildControl(userEmail, isModeAsuh, values.appLimitBlock, values.modeAsuhSelected, values.deviceSchedule, history)
                }}
            >

                {({ handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="ChildControl">
                            <div className="form-group">
                                <label>Mode Asuh</label>
                                <select value={values.modeAsuhSelected} onChange={(e) => {
                                    setFieldValue('modeAsuhSelected', e.currentTarget.value);
                                }}>
                                    <option value='normal'>Normal</option>
                                    <option value='diawasi'>Diawasi</option>
                                    <option value='dihukum'>Dihukum</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Blokir dan Batasi Penggunaan Aplikasi</label>
                                <table>
                                    <tr>
                                        <th>Nama Aplikasi</th>
                                        <th>Status Blokir</th>
                                        <th>Limit Penggunaan (Menit)</th>
                                    </tr>
                                    {values.appLimitBlock.map((x, index) => {
                                        return (<tr>
                                            <td>{x.appName}</td>
                                            <td onChange={(e) => {
                                                console.log(e);
                                                console.log(values.appLimitBlock[index].mode);
                                                setFieldValue(`appLimitBlock.${index}.mode`, e.target.value);
                                                setFieldValue(`appLimitBlock.${index}.isChanged`, true);
                                                if(e.target.value === '2') setFieldValue(`appLimitBlock.${index}.limit`, 1);
                                                console.log(values.appLimitBlock[index].mode);
                                            }}>
                                                <label><input type="radio" value={'1'} name={'block_status_' + index.toString()} checked={values.appLimitBlock[index].mode === '1'} />Ya</label>
                                                <label><input type="radio" value={'0'} name={'block_status_' + index.toString()} checked={values.appLimitBlock[index].mode === '0'} />Tidak</label>
                                                <label><input type="radio" value={'2'} name={'block_status_' + index.toString()} checked={values.appLimitBlock[index].mode === '2'} />Pakai Limit Penggunaan</label>
                                            </td>
                                            <td>
                                                <InputComponent
                                                    name="limit"
                                                    className="form-group__input"
                                                    type="number"
                                                    value={values.appLimitBlock[index].limit}
                                                    min={1}
                                                    max={1440}
                                                    disabled={values.appLimitBlock[index].mode !== '2'}
                                                    onChange={(e) => {
                                                        setFieldValue(`appLimitBlock.${index}.limit`, e.target.value);
                                                    }}
                                                />
                                            </td>
                                        </tr>)
                                    })}
                                </table>
                            </div>
                            <div className="form-group">
                                <label>Jadwal Penguncian</label>
                                <table>
                                    <tr>
                                        <th>Nama Jadwal</th>
                                        <th>Deskripsi</th>
                                        <th>Harian/Terjadwal</th>
                                        <th>Hari</th>
                                        <th>Waktu Mulai</th>
                                        <th>Waktu Selesai</th>
                                    </tr>
                                    {values.deviceSchedule.map((x, index) => {
                                        return (<tr>
                                            <td>
                                                <InputComponent
                                                    name="scheduleName"
                                                    className="form-group__input"
                                                    value={x.scheduleName}
                                                    type="text"
                                                    onChange={(e) => {
                                                        setFieldValue(`deviceSchedule.${index}.scheduleName`, e.target.value);
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <InputComponent
                                                    name="scheduleDescription"
                                                    className="form-group__input"
                                                    value={x.scheduleDescription}
                                                    type="text"
                                                    onChange={(e) => {
                                                        setFieldValue(`deviceSchedule.${index}.scheduleDescription`, e.target.value);
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <select onChange={(e) => {
                                                    if(e.target.value === 'harian') {
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageStartTime`, '0:00');
                                                    }
                                                    setFieldValue(`deviceSchedule.${index}.scheduleType`, e.target.value);
                                                }}>
                                                    <option value="harian">Harian</option>
                                                    <option value="terjadwal">Terjadwal</option>
                                                </select>
                                            </td>
                                            <td>
                                                {['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'].map((y) => {
                                                    return <label><input type="checkbox" name={y} value={y}
                                                        checked={x.deviceUsageDays.includes(y)}
                                                        onChange={(e) => {
                                                            var p = x.deviceUsageDays;
                                                            let indexArr = p.indexOf(e.target.value);
                                                            if(indexArr >= 0) {
                                                                p.splice(indexArr, 1);
                                                            }
                                                            else {
                                                                p.push(e.target.value);
                                                            }
                                                            setFieldValue(`deviceSchedule.${index}.deviceUsageDays`, p);
                                                        }}
                                                    />{y}</label>
                                                })}
                                            </td>
                                            <td>
                                                {/* {x.scheduleType === 'harian' ? <span>
                                                <InputComponent
                                                    name="startHour"
                                                    className="form-group__input"
                                                    type="number"
                                                    value={parseInt(x.deviceUsageStartTime.split(':')[0])}
                                                    min={0}
                                                    max={23}
                                                    onChange={(e) => {
                                                        var h = e.target.value.toString();
                                                        var m = x.deviceUsageStartTime.split(':')[1]
                                                        if(h.length < 2) m = '0' + h;
                                                        var str = h + ":" + m;
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageStartTime`, str);
                                                    }}
                                                /> : <InputComponent
                                                    name="startMinute"
                                                    className="form-group__input"
                                                    type="number"
                                                    value={parseInt(x.deviceUsageStartTime.split(':')[0])}
                                                    min={0}
                                                    max={59}
                                                    onChange={(e) => {
                                                        var h = x.deviceUsageStartTime.split(':')[0];
                                                        var m = e.target.value.toString();
                                                        if(m.length < 2) m = '0' + m;
                                                        var str = h + ":" + m;
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageStartTime`, str);
                                                    }}
                                                />
                                                </span>
                                                :
                                                <DatePicker
                                                    selected={x.deviceUsageStartTime}
                                                    onChange={(date) => setEndDate(date)}
                                                    selectsEnd
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    minDate={startDate}
                                                />
                                                } */}
                                            </td>
                                            <td>
                                                {/* <span>
                                                <InputComponent
                                                    name="startHour"
                                                    className="form-group__input"
                                                    type="number"
                                                    value={parseInt(x.deviceUsageStartTime.split(':')[0])}
                                                    min={0}
                                                    max={23}
                                                    onChange={(e) => {
                                                        var h = e.target.value.toString();
                                                        var m = x.deviceUsageStartTime.split(':')[1]
                                                        var str = h + ":" + m;
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageStartTime`, str);
                                                    }}
                                                /> : <InputComponent
                                                    name="startMinute"
                                                    className="form-group__input"
                                                    type="number"
                                                    value={parseInt(x.deviceUsageStartTime.split(':')[0])}
                                                    min={0}
                                                    max={59}
                                                    onChange={(e) => {
                                                        var h = x.deviceUsageStartTime.split(':')[0];
                                                        var m = e.target.value.toString();
                                                        var str = h + ":" + m;
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageStartTime`, str);
                                                    }}
                                                />
                                                </span> */}
                                            </td>
                                            {/* <td onChange={(e) => {
                                                console.log(e);
                                                console.log(values.appLimitBlock[index].mode);
                                                setFieldValue(`appLimitBlock.${index}.mode`, e.target.value);
                                                setFieldValue(`appLimitBlock.${index}.isChanged`, true);
                                                if(e.target.value === 2) setFieldValue(`appLimitBlock.${index}.limit`, 1);
                                                console.log(values.appLimitBlock[index].mode);
                                            }}>
                                                <label><input type="radio" value={1} na me={'block_status_' + index.toString()} checked={values.appLimitBlock[index].mode === 1} />Ya</label>
                                                <label><input type="radio" value={0} name={'block_status_' + index.toString()} checked={values.appLimitBlock[index].mode === 0} />Tidak</label>
                                                <label><input type="radio" value={2} name={'block_status_' + index.toString()} checked={values.appLimitBlock[index].mode === 2} />Pakai Limit Penggunaan</label>
                                            </td>
                                            <td>
                                                <InputComponent
                                                    name="limit"
                                                    className="form-group__input"
                                                    type="number"
                                                    value={values.appLimitBlock[index].limit}
                                                    min={1}
                                                    disabled={values.appLimitBlock[index].mode !== 2}
                                                    onChange={(e) => {
                                                        setFieldValue(`appLimitBlock.${index}.limit`, e.target.value);
                                                    }}
                                                />
                                            </td> */}
                                        </tr>)
                                    })}
                                </table>
                            </div>
                            {/* <div className="form-group">
                                <label>Isi Tahap</label>
                                {values.contentType === "Artikel" || "Ujian" ? (
                                    <SunEditor 
                                    setOptions={{
                                        buttonList: editorButtonList,
                                        imageWidth: '360px'
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
                                            var x = '';
                                            for(var i = 0; i < e.currentTarget.value.length; i++) {
                                                if(e.currentTarget.value.charAt(i) !== '.') x += e.currentTarget.value.charAt(i);
                                                else x += '․';
                                            }
                                            setFieldValue(`response.${index}`, x);
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
                            ) : null} */}
                                <button className="btn btn-submit" type="submit">
                                    Simpan
                                </button>
                        </div>
                    </form>
                )}
            </Formik>
            {/* {console.log(isLoading)} */}
            {isLoading ? <RKLoader/> : null}
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
        onChildControl: ( userEmail, isModeAsuh, appLimitBlock, modeAsuh, deviceSchedule, history ) =>
            dispatch(childControl( userEmail, isModeAsuh, appLimitBlock, modeAsuh, deviceSchedule, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ChildControl)
