import './App.css';
import InputBox from "./components/InputBox";
import SubmitButton from "./components/SubmitButton";
import {useState} from "react";

function App() {
    const [recipeUrl, setRecipeUrl] = useState("");

    return (
        <div className="App">
            <title>Give Me The Recipe</title>
            <div className="App-container">
                <h1>Give Me The Recipe</h1>
                <InputBox recipeUrl={recipeUrl} setRecipeUrl={setRecipeUrl}/>
                <SubmitButton/>
            </div>
        </div>
    );
}

export default App;
