import React, {useEffect} from 'react';
import './InputBox.css';

const InputBox = (props) => {

    const changeHandler = (event) => {
        props.setRecipeUrl(event.target.value);
    }

    useEffect(() => {
        console.log(props.recipeUrl);
    }, [props.recipeUrl])

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
                    value={props.recipeUrl}
                />
            </div>
        </div>
    )
}

export default InputBox;