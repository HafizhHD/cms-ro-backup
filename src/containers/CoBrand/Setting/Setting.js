import React from 'react';
import Heading from '../../../components/UI/Heading/Heading';
import Input from '../../../components/UI/Input/Input';
import './Setting.scss';

function Setting() {
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
                    <h2>Account</h2>

                    <div className="Setting_card_inputs-item">
                        <div>
                            <label>Email</label>
                            <Input 
                                name="email"
                                className="Input-control"
                                type="email"
                                placeholder="example@test.com"
                                onChange={e => alert(e)}
                                value="anando@test.com"
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <Input 
                                name="password"
                                className="Input-control"
                                type="password"
                                placeholder="example@test.com"
                                onChange={e => console.log(e)}
                                value="anando@test.com"
                            />
                        </div>
                    </div>

                    <div className="Setting_card_inputs-upload mt-large">
                        
                        <div className="Setting_card_inputs-avatar">
                            <h2>Avatar</h2>
                            <input type="file" />
                        </div>

                        <div className="Setting_card_inputs-cover">
                            <h2>Cover</h2>
                            <input type="file" />
                        </div>
                    </div>

                    <div className="Setting_card_inputs-item mt-large">
                        <div>
                            <label>Username</label>
                            <Input 
                                name="username"
                                className="Input-control"
                                type="username"
                                placeholder="example@test.com"
                                onChange={e => alert(e)}
                                value="username"
                            />
                        </div>
                        <div>
                            <label>Bio</label>
                            <textarea placeholder="Type Something...">

                            </textarea>
                        </div>
                    </div>

                </div>
                <div className="Setting_card_preview">
                    <h1>Image Preview</h1>
                </div>
            </div>
        </div>
    )
}

export default Setting
