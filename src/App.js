import "./App.css";
import {useState} from "react";

function App() {
    let [number, setNumber] = useState(0);

    const increment = () => {
        if (number < 10) {
            setNumber(number + 1);
        } else {
            alert("You have reached the max number of 10");
        }
    };

    const decrement = () => {
        if (number > 0) {
            setNumber(number - 1);
        } else {
            alert("You cannot decrement below 0");
        }
    };
    //const reset = () => {setNumber(0);};

    return (
        <div className='App'>
            <h1>Docphil's Click Counter</h1>
            <h3>{number}</h3>
            <div className='buttons'>
                <button onClick={() => decrement()}>-</button>
                <button onClick={() => increment()}>+</button>
            </div>
            <button onClick={() => setNumber(0)} className='reset'>
                Reset
            </button>
        </div>
    );
}

export default App;
