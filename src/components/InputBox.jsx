import React from 'react';
import './InputBox.css';

const InputBox = () => {
    return (
        <div className="input-and-label-container">
            <div className="label-container">
                <label htmlFor="url">Enter the URL and click the button 👀</label>
            </div>
            <div className="input-box-container">
                <input className="url-input-box" type="text" id="url"/>
            </div>
        </div>
    )
}

export default InputBox;