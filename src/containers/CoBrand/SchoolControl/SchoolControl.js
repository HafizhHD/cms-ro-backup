import React, { useEffect, useState } from 'react';
import Heading from '../../../components/UI/Heading/Heading';
import './SchoolControl.scss';
import './../../../components/UI/Table/Table.scss'
import TimePicker from 'react-time-picker';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { getUserList, getAppDetailList } from './../../../components/API/filter'
import { childControl } from '../../../store/actions/dashboard';
import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import InputComponent from '../../../components/UI/Input/Input';
import { getEmbedUrl } from '../../../helpers/fileHelper/fileHelper'
import AsyncSelect from 'react-select/async';

function SchoolControl({
    onChildControl,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;
    const sekolah = JSON.parse(localStorage.getItem('userData')).sekolah;

    const [isPageLoading, setPageLoading] = useState(true);

    const [modeAsuh, setModeAsuh] = useState('normal')
    const [isModeAsuh, setIsModeAsuh] = useState(false);

    const [userEmails, setUserEmails] = useState([]);

    const [isScheduleAdded, setScheduleAdded] = useState([]);
    const [scheduleCount, setScheduleCount] = useState(0);

    // const [categoryList, setCategoryList] = useState([]);
    // const [audience, setAudience] = useState([]);
    // const [responseCount, setResponseCount] = useState(1);

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
          getAppDetailList({
            whereKeyValues: {
              nama: {
                "$regex": inputValue,
                "$options": "i"
              }
            },
            orderKeyValues: {
              appName: 1
            },
            limit: 20
          })
          .then(response => {
            console.log(response.data);
            const options = [];
            response.data.Data.forEach(e => {
                options.push({
                    label: e.appId,
                    value: e.appName
                })
            });
            callback(options);
        })
          .catch(error => {
              callback([]);
          });
        }, 500);
      };

    useEffect(() => {
        let param = {
            whereKeyValues: {
                packageId: "com.byasia.ruangortu",
                "childInfo.schoolName": schoolId,
                dateCreated: {
                    "$gte": absStart.toISOString().split("T")[0]
                },
                // emailUser: {
                //     "$nin": emailTester
                // }
            },
            orderKeyValues: {
                nameUser: 1
            },
            limit: Number.MAX_SAFE_INTEGER
        }

        getUserList(param)
        .then(response => {
            let p = [];
            response.data.users.forEach(x => {
                p.push(x.emailUser);
            })
            setUserEmails(p);
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
                    modeAsuhSelected: modeAsuh,
                    appWhiteListId: []
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
                                <label>Aplikasi yang Diperbolehkan</label>
                                
                            </div>
                            <div className="form-group">
                                <label>Jadwal Pemakaian <span><button type="button" onClick={() => {
                                    let p = {
                                        _id: '',
                                        scheduleName: '',
                                        scheduleDescription: '',
                                        scheduleType: 'harian',
                                        deviceUsageDays: [],
                                        deviceUsageStartTime: '00:00',
                                        deviceUsageEndTime: '00:01',
                                        status: 'aktif',
                                        willBeRemoved: false
                                    }
                                    let q = values.deviceSchedule;
                                    q.push(p);
                                    setFieldValue('deviceSchedule', q);
                                }}>Tambah Jadwal</button></span></label>
                                <table>
                                    <tr>
                                        <th>Nama Jadwal</th>
                                        <th>Deskripsi</th>
                                        <th>Harian/Terjadwal</th>
                                        <th>Hari</th>
                                        <th>Waktu Mulai</th>
                                        <th>Waktu Selesai</th>
                                        <th>Action</th>
                                    </tr>
                                    {values.deviceSchedule.map((x, index) => {
                                        console.log(x)
                                        if(!x.willBeRemoved) return (<tr>
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
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageStartTime`, '00:00');
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageEndTime`, '00:01');
                                                    }
                                                    else {
                                                        console.log(new Date().toLocaleDateString('id-ID'));
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageStartTime`, new Date().toLocaleDateString('id-ID'));
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageEndTime`, new Date().toLocaleDateString('id-ID'));
                                                    }
                                                    setFieldValue(`deviceSchedule.${index}.scheduleType`, e.target.value);
                                                }}>
                                                    <option value="harian">Harian</option>
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
                                                <TimePicker
                                                    locale="id-ID"
                                                    format="hh:mm"
                                                    disableClock={true}
                                                    value={x.deviceUsageStartTime}
                                                    onChange={(value) => {
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageStartTime`, value);
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <TimePicker
                                                    locale="id-ID"
                                                    format="hh:mm"
                                                    disableClock={true}
                                                    value={x.deviceUsageEndTime}
                                                    onChange={(value) => {
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageEndTime`, value);
                                                    }}
                                                />
                                            {/* {x.scheduleType === 'harian' ? <span>
                                                <InputComponent
                                                    name="endHour"
                                                    className="form-group__input"
                                                    type="number"
                                                    value={parseInt(x.deviceUsageEndTime.split(':')[0])}
                                                    min={0}
                                                    max={23}
                                                    onChange={(e) => {
                                                        var h = e.target.value.toString();
                                                        var m = x.deviceUsageEndTime.split(':')[1]
                                                        if(h.length < 2) m = '0' + h;
                                                        var str = h + ":" + m;
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageEndTime`, str);
                                                    }}
                                                /> : <InputComponent
                                                    name="endMinute"
                                                    className="form-group__input"
                                                    type="number"
                                                    value={parseInt(x.deviceUsageEndTime.split(':')[0])}
                                                    min={0}
                                                    max={59}
                                                    onChange={(e) => {
                                                        var h = x.deviceUsageEndTime.split(':')[0];
                                                        var m = e.target.value.toString();
                                                        if(m.length < 2) m = '0' + m;
                                                        var str = h + ":" + m;
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageEndTime`, str);
                                                    }}
                                                />
                                                </span>
                                                :
                                                <DatePicker
                                                    selected={new Date(x.deviceUsageEndTime)}
                                                    onChange={(date) => {
                                                        setFieldValue(`deviceSchedule.${index}.deviceUsageEndTime`, date.toLocaleDateString("id-ID"));
                                                    }}
                                                />
                                                } */}
                                            </td>
                                            <td>
                                                <button type="submit" onClick={() => {
                                                    setFieldValue(`deviceSchedule.${index}.willBeRemoved`, true);
                                                }}>
                                                    Hapus
                                                </button>
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

export default connect(mapStateToProps, mapDispatchToProps) (SchoolControl)