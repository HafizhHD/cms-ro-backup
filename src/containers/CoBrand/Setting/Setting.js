import React, { useState, useEffect } from 'react';
import Heading from '../../../components/UI/Heading/Heading';
import InputComponent from '../../../components/UI/Input/Input';
import RKLoader from '../../../components/UI/RKLoader/RKLoader';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { validationFormEdit } from './../../../helpers/validation/validation';
// import { toBase64 } from '../../../helpers/fileHelper/fileHelper';
import { editProfile } from '../../../store/actions/dashboard';
import { Card, CardImg, Button, Modal } from 'react-bootstrap';
import './Setting.scss';
import { toBase64} from './helper'

function Setting({
    onEditProfile,
    isLoading
}) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [photoRaw, setPhotoRaw] = useState();
    const [coverRaw, setCoverRaw] = useState();
    const [cover, setCover] = useState();
    const [photoPreview, setPhotoPreview] = useState(userData.thumbnail);

    useEffect(() => {
        if(photoRaw) {
            let convertedPhoto = toBase64(photoRaw);
            convertedPhoto.then((result) => {
                setPhotoPreview(result);
            })
            .catch(error => {
                console.log(error);
            })
        // } else if(coverRaw) {
        //     let convertedPhoto = toBase64(coverRaw);
        //     convertedPhoto.then((result) => {
        //         setPhotoPreview(result);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
        }
    }, [photoRaw])

    if(isLoading) {
        return <RKLoader/>;
    }
    return (
        <div className="Setting">
            <Heading 
                headingName="Setting"
                routes={[
                    { name: 'Setting' }
                ]}
            />
            <div className="Setting_card mt-medium">
                <div className="Setting_card_inputs">
                    <h2>Edit Account</h2>
                    <Formik
                        initialValues= {{
                            email: userData.email,
                            password: '',
                            confirmPassword: '',
                            cobrandName: userData.cobrandName,
                            phoneNumber: userData.phoneNumber,
                            address: userData.address,
                            thumbnail: ''
                        }}
                        validationSchema = {validationFormEdit}
                        validateOnChange = {true}
                        onSubmit = {values => {
                            onEditProfile(userData.email, userData.password, values.cobrandName, values.thumbnail, values.phoneNumber, values.address, values.password)
                        }}
                    >
                    {({handleChange, handleBlur, handleSubmit, setFieldValue, touched, values, errors}) => (
                        <form onSubmit={handleSubmit}>
                            <div className="Setting_card_inputs-item">
                                <div>
                                    <label>Email</label>
                                    <InputComponent
                                        name="email"
                                        className="Input-control"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.email}
                                        onBlur={handleBlur}
                                        isError={touched.email && Boolean(errors.email) }
                                        message={touched.email && errors.email}
                                        disabled={true}
                                    />
                                </div>
                                <div>
                                    <label>New Password</label>
                                    <InputComponent
                                        name="password"
                                        className="Input-control"
                                        type="password"
                                        onChange={handleChange}
                                        value={values.password}
                                        onBlur={handleBlur}
                                        isError={touched.password && Boolean(errors.password) }
                                        message={touched.password && errors.password}
                                    />
                                </div>
                                <div>
                                    <label>Confirm New Password</label>
                                    <InputComponent
                                        name="confirmPassword"
                                        className="Input-control"
                                        type="password"
                                        onChange={handleChange}
                                        value={values.confirmPassword}
                                        onBlur={handleBlur}
                                        disabled={!touched.password}
                                        isError={touched.confirmPassword && Boolean(errors.confirmPassword) }
                                        message={touched.confirmPassword && errors.confirmPassword}
                                    />
                                </div>
                            </div>

                            <div className="Setting_card_inputs-upload mt-large">
                                
                                <div className="Setting_card_inputs-avatar">
                                    <h2>New Photo</h2>
                                    <InputComponent 
                                        placeholder="Photo"
                                        type="file"
                                        name="thumbnail"
                                        onChange={(e) => {
                                            let file = e.currentTarget.files[0];
                                            if(file) {
                                                console.log("File to upload: ", file);
                                                setFieldValue("thumbnail", file);
                                                setPhotoRaw(file);
                                            }
                                        }}
                                        className="Input-control"
                                        onBlur={handleBlur}
                                        isError={touched.thumbnail && Boolean(errors.thumbnail) }
                                        message={touched.thumbnail && errors.thumbnail}
                                    />
                                </div>
                                <div className="Setting_card_inputs-avatar">
                                        <h2>Cover</h2>
                                        <input type="file"
                                            onChange={(e) => {
                                                console.log(e.currentTarget.files[0]);
                                                const promise = toBase64(e.currentTarget.files[0]);
                                                promise.then(result => {
                                                    console.log(result)
                                                    setCover(result);
                                                })
                                            }}
                                        />
                                </div>
                                {/* <div className="Setting_card_inputs-avatar">
                                    <h2>New Cover</h2>
                                    <InputComponent 
                                        placeholder="Cover"
                                        type="file"
                                        name="thumbnail"
                                        onChange={(e) => {
                                            let file = e.currentTarget.files[0];
                                            if(file) {
                                                console.log("File to upload: ", file);
                                                setFieldValue("thumbnail", file);
                                                setPhotoRaw(file);
                                            }
                                        }}
                                        className="Input-control"
                                        onBlur={handleBlur}
                                        isError={touched.thumbnail && Boolean(errors.thumbnail) }
                                        message={touched.thumbnail && errors.thumbnail}
                                    />
                                </div> */}
                            </div>

                            <div className="Setting_card_inputs-item mt-large">
                                <div>
                                    <label>Co-Brand Name</label>
                                    <InputComponent
                                        name="cobrandName"
                                        className="Input-control"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.cobrandName}
                                        onBlur={handleBlur}
                                        isError={touched.cobrandName && Boolean(errors.cobrandName) }
                                        message={touched.cobrandName && errors.cobrandName}
                                    />
                                </div>
                                <div>
                                    <label>Phone Number</label>
                                    <InputComponent
                                        name="phoneNumber"
                                        className="Input-control"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.phoneNumber}
                                        onBlur={handleBlur}
                                        isError={touched.phoneNumber && Boolean(errors.phoneNumber) }
                                        message={touched.phoneNumber && errors.phoneNumber}
                                    />
                                </div>
                                <div>
                                    <label>Address</label>
                                    <InputComponent
                                        name="address"
                                        className="Input-control"
                                        type="textarea"
                                        onChange={handleChange}
                                        value={values.address}
                                        onBlur={handleBlur}
                                        isError={touched.address && Boolean(errors.address) }
                                        message={touched.address && errors.address}
                                    />
                                </div>
                                <button
                                    className="btn btn-submit"
                                    type="submit"
                                >
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    )}

                    </Formik>

                </div>
                <div className="Setting_card_preview">
                    <h5>Preview</h5>
                    <Card style={{ width: '25rem', borderRadius: '1rem'}}>
                        {/* <div style={{ backgroundImage: `url(${cover ? cover : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJUwAEmCj5NP7JfKft5Qz8a3UUoE0RcKiAeNDAulvE-jDh5HzB3-FBb5pBSfmWpJw0J4&usqp=CAU"})` }} class="circletag" id="nay"> */}
                            {/* <img className="img2" src="https://cdn1.vectorstock.com/i/1000x1000/06/70/beautiful-cute-bee-vector-15910670.jpg" /> */}
                        <div className="backgr" style={{ backgroundImage: `url(${cover ? cover : "https://defghi.co.id/wp-content/uploads/2021/07/Logo-IDE.png"})` }} >
                            <img className="img2" src={photoPreview ? photoPreview : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"} />
                        </div>
                        <Card.Body className="body-card">
                            <Card.Title style={{ textAlign: 'center' }}>Bimbel Defghi</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* <img src={photoPreview} className="Setting_card_preview_image"/> */}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditProfile: ( oldEmail, oldPassword, cobrandName, photo, phoneNumber, address, password ) => 
            dispatch(editProfile( oldEmail, oldPassword, cobrandName, photo, phoneNumber, address, password ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Setting)
