import React from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddContent.scss';

function AddContent() {
    return (
        <>
            <Heading headingName="Content" routes={[
                { path: '/content', name: 'Content' },
                { path: '/content/add', name: 'Create new content' }
            ]} />
            <div className="AddContent">
                <h1>Create new Content</h1>
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

export default AddContent
