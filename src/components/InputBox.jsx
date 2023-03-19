import React from 'react';
import './InputBox.css';

const InputBox = () => {
    return (
        <div>
            <div className="label-container">
                <label htmlFor="url">Enter URL and hit Submit</label>
            </div>
            <div className="input-box-container">
                <input className="url-input-box" type="text" id="url"/>
            </div>
        </div>
    )
}

export default InputBox;