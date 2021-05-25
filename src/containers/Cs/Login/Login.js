import React from 'react';
import './Login.scss';
import Logo from './../../../assets/img/Logo_1.png';
import InputComponent from './../../../components/UI/Input/Input';

function Login({
    setIsLogin
}) {

    

    return (
        <div className="Login">
            <div className="Top"></div>
            <div className="Logo">
                <img src={Logo} className="Logo__img" />
            </div>
            <div className="Form">
                <form className="Form_actions">
                <h3 className="mb-small">Sign In</h3>
                    <div className="mb-small">
                        <InputComponent 
                            placeholder="Username"
                            type="text"
                            value=""
                            onChange={e => alert(e)}
                        />
                    </div>
                    <div className="mb-small">
                        <InputComponent 
                            placeholder="Password"
                            type="text"
                            value=""
                            onChange={e => alert(e)}
                        />
                    </div>

                    <button
                        className="btn btn-login"
                        type="submit"
                        onClick={setIsLogin}
                    >
                        Sign in
                    </button>
                </form>
            </div>
            <div className="Bottom"></div>
        </div>
    )
}

export default Login
