import './App.css';
import InputBox from "./components/InputBox";
import SubmitButton from "./components/SubmitButton";

function App() {
    return (
        <div className="App">
            <title>Give Me The Recipe</title>
            <header className="App-header">
                <h1>Give Me The Recipe</h1>
                <InputBox/>
                <SubmitButton/>
            </header>
        </div>
    );
}

export default App;
