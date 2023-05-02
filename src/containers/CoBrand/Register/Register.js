import React, {useState, useEffect} from 'react';
import Heading from '../../../components/UI/Heading/Heading';
import './Register.scss';
import Logo from './../../../assets/img/Logo_2.png'
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { registerAuth } from '../../../store/actions/auth';
import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationRegistration } from '../../../helpers/validation/validation';
import { getCommunityList, getSchoolList, getSchoolGroupList } from '../../../components/API/filter'
import InputComponent from '../../../components/UI/Input/Input';
import AsyncSelect from 'react-select/async';
import { StylesConfig } from 'react-select';

function Register({
    onAddStaff,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = 'admin@lindungianak.ruangortu.id';
    const userType = '';
    const userLevel = '';
    const sekolah = '';
    const groupMitraAsuhId = '';
    const [isPasswordVisible, showPassword] = useState(false);
    const [comList, setComList] = useState([]);
    const [isCurrentlyLoading, setCurrentlyLoading] = useState(true);
    const [preview, setPreview] = useState();
    const [preview64, setPreview64] = useState();
    const [isNDAOpen, setNDAOpen] = useState(false);
    const [isNDAAgreed, setNDAAgreed] = useState(false);

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: '#cccccc66', width: '40%', border: 'none' }),
        menu: styles => ({ ...styles, width: '40%'})
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
        }, 500);
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
            setCurrentlyLoading(false);
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

    if(isLoading || isCurrentlyLoading) {
        return <RKLoader/>
    }

    return (
        <>
            <Formik
                initialValues= {{
                    nama: '',
                    alamat: '',
                    phone: '',
                    nik: '',
                    ktp: '',
                    userName: '',
                    password: '',
                    userType: 'Co-Brand',
                    cobrandEmail: 'admin@asia.ruangortu.id',
                    userLevel: 'Reporter',
                    sekolah: '',
                    emailUser: '',
                    cobrandComunityId: '',
                    groupMitraAsuhId: '',
                }}
                validationSchema = {validationRegistration}
                validateOnChange = {true}
                onSubmit = { values => {
                    setNDAOpen(false);
                    console.log(values);
                    onAddStaff( values.nama, values.alamat, values.phone, values.nik, values.ktp, values.userName, values.password, values.userType, values.cobrandEmail, values.userLevel, values.sekolah, values.emailUser, values.cobrandComunityId, values.groupMitraAsuhId, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="LoginBg">
                    <div className="Login">
                        <div className="Login-top">
                            <img src={Logo} className="Login-top-img" alt="logo top" />
                        </div>
                    <div className="Login-register">
                        <Heading headingName="Daftarkan Grup Mitra Asuh Anda." />
                        <div className="Login-register-field">
                            <div className="Login-register-field-left">
                                <div className="form-group">
                                    <label>Nama</label>
                                    <InputComponent 
                                        type="text"
                                        name="nama"
                                        className="form-group__input form-group__input--fullwidth" 
                                        placeholder="Example"
                                        value={values.nama}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.nama && <span className="message__error">{errors.nama}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Alamat</label>
                                    <InputComponent 
                                        type="textarea"
                                        name="alamat"
                                        className="form-group__input form-group__input--fullwidth" 
                                        placeholder="Example Street, Example City, Example State 99999"
                                        value={values.alamat}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.alamat && <span className="message__error">{errors.alamat}</span>}
                                </div>
                                <div className="form-group">
                                    <label>No. KTP (NIK)</label>
                                    <InputComponent 
                                        type="text"
                                        name="nik"
                                        className="form-group__input form-group__input--fullwidth" 
                                        placeholder="327xxxxxxxxxxxxx"
                                        value={values.nik}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.nik && <span className="message__error">{errors.nik}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Foto KTP</label>
                                    <InputComponent
                                        type="file"
                                        className="form-group__input"
                                        name="ktp"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            let file = e.currentTarget.files[0];
                                            if (file) {
                                                // // console.log("File to upload: ", file);
                                                setFieldValue("ktp", file);
                                                setPreview(file);
                                            }
                                        }}
                                    />
                                    {touched.ktp && <span className="message__error">{errors.ktp}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Preview</label>
                                    {preview64 ? <div className="form-group-preview"><img src={preview64}/></div> : null}
                                </div>
                            </div>
                            <div className="Login-register-field-right">
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
                                        {/* <option value="Super Admin" disabled={userType === 'Co-Brand-Group' || userType === 'Operator-Sekolah' || userLevel === 'Admin' || userLevel === 'Editor' || userLevel === 'Reporter'}>Super Admin</option> */}
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
                                            {sekolah === '' ? <AsyncSelect cacheOptions defaultOptions 
                                                isDisabled={sekolah !== ''}
                                                styles={colourStyles}
                                                key={values.userType}
                                                menuPlacement='top'
                                                placeholder={"Pilih sekolah..."} loadOptions={loadOptions} onChange={(e) => {
                                                console.log(e);
                                                setFieldValue('sekolah', e.value);
                                            }}/>
                                            : <p>{values.sekolah}</p>
                                            }
                                            {/* <InputComponent 
                                                type="text"
                                                name="sekolah"
                                                className="form-group__input form-group__input--fullwidth" 
                                                placeholder="Example"
                                                value={values.sekolah}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            /> */}
                                            {touched.sekolah && <span className="message__error">{errors.sekolah}</span>}
                                        </div>
                                    ) :
                                    values.userType === 'Co-Brand-Group' ? (
                                        <div className="form-group">
                                        <label>Grup Mitra Asuh</label>
                                        {groupMitraAsuhId === '' ? <AsyncSelect cacheOptions defaultOptions 
                                            isDisabled={groupMitraAsuhId !== ''}
                                            styles={colourStyles}
                                            key={values.userType}
                                            menuPlacement='top'
                                            placeholder={"Pilih grup mitra asuh..."} loadOptions={loadOptionsGroup} onChange={(e) => {
                                                console.log(e);
                                                setFieldValue('groupMitraAsuhId', e.value);
                                        }}/>
                                        : <p>{values.groupMitraAsuhId}</p>
                                        }
                                        {touched.groupMitraAsuhId && <span className="message__error">{errors.groupMitraAsuhId}</span>}
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
                            </div>
                        </div>
                        
                        <div>
                            <button className="btn btn-submit" type="button" onClick={() => {
                                console.log(errors);
                                if(Object.keys(errors).length === 0 && Object.keys(touched).length > 0) {
                                    console.log("bjir");
                                    setNDAOpen(true);
                                }
                            }}>
                                Daftar
                            </button>
                        </div>
                    </div>
                    {isLoading && (
                        <RKLoader />
                    )}
                    <div className="Login-bottom"></div>
                    {isNDAOpen ? (
                        <div className="NDA">
                            <div className="NDA_add">
                                <h1 className="NDA_add_label">Perjanjian Kerahasiaan (NDA)</h1>
                                <div className="NDA_add_iframe">
                                    <iframe src="https://digitalkeluarga.ruangortu.id/toc/nda.html"/>
                                </div>
                                <p>Dengan mengklik tombol "Setuju &amp; Daftar", Anda sudah membaca, memahami, dan menyetujui Perjanjian Kerahasiaan di atas.</p>
                                <button className="btn btn-submit" type="submit" onClick={() => {
                                    // console.log(values);
                                }}>
                                    Setuju &amp; Daftar
                                </button>
                                <button className="btn btn-submit" onClick={() => {
                                    // console.log(values);
                                    setNDAOpen(false);
                                }}>
                                    Batal
                                </button>
                                
                            </div>
                        </div>
                            
                            
                    ) : null}
                    </div>
                    </div>
                </form>
            )}
            </Formik>
            {/* {console.log(isLoading)} */}
            {/* {isLoading ? <RKLoader/> : null} */}
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
        onAddStaff: ( nama, alamat, phone, nik, ktp, userName, password, userType, cobrandEmail, userLevel, sekolah, emailUser, cobrandComunityId, groupMitraAsuhId, history ) =>
            dispatch(registerAuth( nama, alamat, phone, nik, ktp, userName, password, userType, cobrandEmail, userLevel, sekolah, emailUser, cobrandComunityId, groupMitraAsuhId, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Register)
