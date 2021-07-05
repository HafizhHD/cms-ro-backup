import React from 'react';
import Heading from '../../../components/UI/Heading/Heading';

function Setting() {
    return (
        <div>
            <Heading 
                headingName="Setting"
                routes={[
                    { name: 'Setting' }
                ]}
            />
        </div>
    )
}

export default Setting
