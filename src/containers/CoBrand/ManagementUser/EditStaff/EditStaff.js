import React, { useEffect, useState } from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './EditStaff.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { editStaff } from '../../../../store/actions/dashboard';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationStaff } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';
import { getAdminList, getCommunityList, getSchoolList, getSchoolGroupList } from '../../../../components/API/filter';
import AsyncSelect from 'react-select/async';

function EditStaff({
    onEditStaff,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail ?? '';
    const userType = JSON.parse(localStorage.getItem('userData')).userType ?? '';
    const userLevel = JSON.parse(localStorage.getItem('userData')).userLevel ?? '';
    const id = localStorage.getItem('staffSelected');

    const [staff, setStaff] = useState([]);
    const [comList, setComList] = useState([]);
    const [isPageLoading, setPageLoading] = useState(true);
    const [isPasswordVisible, showPassword] = useState(false);

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: '#cccccc66', width: '40%', border: 'none' }),
    };

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
          getSchoolList({
            whereKeyValues: {
              nama: {
                "$regex": inputValue,
                "$options": "i"
              }
            },
            orderKeyValues: {
              nama: 1
            },
            limit: 20
          })
          .then(response => {
            console.log(response.data);
            const options = [];
            response.data.Data.forEach(e => {
                options.push({
                    label: e.nama,
                    value: e.nama
                })
            });
            callback(options);
        })
          .catch(error => {
              callback([]);
          });
        }, 1000);
      };

      const loadOptionsGroup = (inputValue, callback) => {
        setTimeout(() => {
          getSchoolGroupList({
            whereKeyValues: {
              groupMitraAsuhName: {
                "$regex": inputValue,
                "$options": "i"
              }
            },
            orderKeyValues: {
                groupMitraAsuhName: 1
            },
            limit: 20
          })
          .then(response => {
            console.log(response.data);
            const options = [];
            response.data.Data.forEach(e => {
                options.push({
                    label: e.groupMitraAsuhId,
                    value: e.groupMitraAsuhName
                })
            });
            callback(options);
        })
          .catch(error => {
              callback([]);
          });
        }, 300);
      };


    useEffect(() => {
        let params = {
            whereKeyValues: {
                _id: id
            }
        }
        getAdminList(params)
        .then(response => {
            // console.log(response.data);
            setStaff(response.data.Data[0]);
            let param = {
                whereKeyValues: {
                    cobrandEmail: cobrandEmail
                },
                orderKeyValues: {
                    cobrandComunityName: -1
                },
                limit: Number.MAX_SAFE_INTEGER
            }
    
            getCommunityList(param)
            .then(response => {
                setComList(response.data.Data);
                setPageLoading(false);
            })
        })
    }, []);

    if(isPageLoading || isLoading) {
        return <RKLoader/>
    }

    return (
        <>
            <Heading headingName="Ubah Data Admin &amp; Staff" routes={[
                { path: '/tools/admin-staff', name: 'Admin & Staff' },
                { path: '/tools/admin-staff/edit', name: 'Ubah' }
            ]} />
            <Formik
                initialValues= {{
                    userName: staff.userName ?? '',
                    password: staff.password ?? '',
                    userType: staff.userType ?? 'Co-Brand',
                    cobrandEmail: staff.cobrandEmail ?? cobrandEmail,
                    userLevel: staff.userLevel ?? 'Reporter',
                    emailUser: staff.emailUser ?? '',
                    sekolah: staff.sekolah ?? '',
                    phone: staff.phone ?? '',
                    cobrandComunityId: staff.cobrandComunityId ?? '',
                    groupMitraAsuhId: staff.groupMitraAsuhId ?? ''
                }}
                validationSchema = {validationStaff}
                validateOnChange = {true}
                onSubmit = { values => {
                    // console.log(values);
                    onEditStaff( values.userName, values.password, values.userType, values.cobrandEmail, values.userLevel, values.emailUser, values.sekolah, values.phone, values.cobrandComunityId, values.groupMitraAsuhId, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="EditStaff">
                        <h1>Ubah</h1>
                        <div className="form-group">
                            <label>Username</label>
                            <InputComponent 
                                type="text"
                                name="userName"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.userName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.userName && <span className="message__error">{errors.userName}</span>}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <InputComponent 
                                type={isPasswordVisible ? "text" : "password"}
                                name="password"
                                className="form-group__input form-group__input--fullwidth"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div className="form-checkbox">
                                <InputComponent
                                    type="checkbox"
                                    name="showPassword"
                                    onChange={(e) => {
                                        if(e.currentTarget.checked) {
                                            showPassword(true);
                                        }
                                        else {
                                            showPassword(false);
                                        }
                                    }}
                                />
                                <label>Show Password</label>
                            </div>
                            {touched.password && <span className="message__error">{errors.password}</span>}
                        </div>
                        <div className="form-group">
                            <label>Tipe User</label>
                            <select
                                name="userType"
                                value={values.userType}
                                onChange={(e) => {
                                    setFieldValue("userType", e.currentTarget.value);
                                }}
                            >
                                {/* <option value="CS">CS</option> */}
                                <option value="Co-Brand" disabled={userType === 'Co-Brand-Group' || userType === 'Operator-Sekolah'}>Co-Brand</option>
                                <option value="Co-Brand-Group" disabled={userType === 'Operator-Sekolah'}>Grup Mitra Asuh</option>
                                <option value="Operator-Sekolah">Operator Sekolah</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Level User</label>
                            <select
                                name="userLevel"
                                value={values.userLevel}
                                onChange={(e) => {
                                    setFieldValue("userLevel", e.currentTarget.value);
                                }}
                            >
                                <option value="Super Admin" disabled={userType === 'Co-Brand-Group' || userType === 'Operator-Sekolah' || userLevel === 'Admin' || userLevel === 'Editor' || userLevel === 'Reporter'}>Super Admin</option>
                                <option value="Admin" disabled={userLevel === 'Editor' || userLevel === 'Reporter'}>Admin</option>
                                <option value="Editor" disabled={userLevel === 'Editor' || userLevel === 'Reporter'}>Editor</option>
                                <option value="Reporter" disabled={userLevel === 'Editor' || userLevel === 'Reporter'}>Reporter</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Email User</label>
                            <InputComponent 
                                type="text"
                                name="emailUser"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.emailUser}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.emailUser && <span className="message__error">{errors.emailUser}</span>}
                        </div>
                        {
                            values.userType === 'Operator-Sekolah' ? (
                                <div className="form-group">
                                    <label>Sekolah</label>
                                    <AsyncSelect cacheOptions defaultOptions 
                                        styles={colourStyles}
                                        placeholder={"Pilih sekolah..."} loadOptions={loadOptions} onChange={(e) => {
                                        console.log(e);
                                        setFieldValue('sekolah', e.value);
                                    }}/>
                                    {/* <InputComponent 
                                        type="text"
                                        name="sekolah"
                                        className="form-group__input form-group__input--fullwidth" 
                                        placeholder="Example"
                                        value={values.sekolah}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    /> */}
                                </div>
                            ) :
                            values.userType === 'Co-Brand-Group' ? (
                                <div className="form-group">
                                <label>Grup Mitra Asuh</label>
                                <AsyncSelect cacheOptions defaultOptions 
                                    styles={colourStyles}
                                    placeholder={"Pilih grup mitra asuh..."} loadOptions={loadOptionsGroup} onChange={(e) => {
                                        console.log(e);
                                        setFieldValue('groupMitraAsuhId', e.value);
                                }}/>
                            </div>
                            ) : null
                        }
                        <div className="form-group">
                            <label>Komunitas</label>
                            <select
                                name="cobrandComunityId"
                                value={values.cobrandComunityId}
                                onChange={(e) => {
                                    setFieldValue("cobrandComunityId", e.currentTarget.value);
                                }}
                            >
                                <option value="">-</option>
                                {comList.map(e => {
                                    return <option value={e.cobrandComunityId}>{e.cobrandComunityName}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Nomor Telepon</label>
                            <InputComponent 
                                type="text"
                                name="phone"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.phone}
                                onChange={(e) => {
                                    const result = e.currentTarget.value.replace(/\D/g, '');
                                    setFieldValue("phone", result);
                                }}
                                onBlur={handleBlur}
                            />
                            {touched.phone && <span className="message__error">{errors.phone}</span>}
                        </div>
                        <div>
                            <button className="btn btn-submit" type="submit" onClick={() => {
                                // console.log(values);
                            }}>
                                Simpan Perubahan
                            </button>
                        </div>
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
        onEditStaff: ( userName, password, userType, cobrandEmail, userLevel, emailUser, sekolah, phone, cobrandComunityId, groupMitraAsuhId, history ) =>
            dispatch(editStaff(  userName, password, userType, cobrandEmail, userLevel, emailUser, sekolah, phone, cobrandComunityId, groupMitraAsuhId, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditStaff)
