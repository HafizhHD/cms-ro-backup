import React from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddProgram.scss';

function AddProgram() {
    return (
        <>
            <Heading headingName="Program" routes={[
                { path: '/program', name: 'On Going Program' },
                { path: '/program/add', name: 'Create new Program' }
            ]} />
            <div className="AddProgram">
                <h1>Create new program</h1>
                <div className="form-group">
                    <label>Category</label>
                    <select>
                        <option>Artikel</option>
                        <option>Lomba</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        type="text" 
                        className="form-group__input form-group__input--fullwidth" 
                        placeholder="Example"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea placeholder="Type Something...">

                    </textarea>
                </div>
                <div className="form-group">
                    <label>Attachment</label>
                    <input type="file" className="form-group__input" />
                </div>
                <div className="form-group">
                    <label>Set Schedule</label>
                    <input type="date" className="form-group__input" />
                </div>
            </div>
        </>
    )
}

export default AddProgram
