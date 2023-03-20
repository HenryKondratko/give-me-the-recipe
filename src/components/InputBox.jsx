import React, {useEffect, useState} from 'react';
import './InputBox.css';

const InputBox = () => {
    const [input, setInput] = useState("");
    const changeHandler = (event) => {
        setInput(event.target.value);
    }

    useEffect(() => {
        console.log(input);
    }, [input])

    return (
        <div className="input-and-label-container">
            <div className="label-container">
                <label htmlFor="url">Enter the URL and click the button 👀</label>
            </div>
            <div className="input-box-container">
                <input
                    className="url-input-box"
                    type="text"
                    id="url"
                    onChange={changeHandler}
                    value={input}
                />
            </div>
        </div>
    )
}

export default InputBox;