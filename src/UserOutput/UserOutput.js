import React from 'react';

import './UserOutput.css';
const userOutput = (props) => {
    return (
        <div className="description">
            <p> Username : {props.username}</p>
            <p> Another Paragraph </p>
        </div>
    )
}

export default userOutput;