import './App.css';
import InputBox from "./components/InputBox";
import SubmitButton from "./components/SubmitButton";
import {useState} from "react";

function App() {
    const [recipeUrl, setRecipeUrl] = useState("");

    return (
        <div className="App">
            <title>Give Me The Recipe</title>
            <header className="App-header">
                <h1>Give Me The Recipe</h1>
                <InputBox recipeUrl={recipeUrl} setRecipeUrl={setRecipeUrl}/>
                <SubmitButton/>
            </header>
        </div>
    );
}

export default App;
