import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, decrementTen, incrementTen, increment, reset} from "./action/counterAction.js";

const App = () => {
    const count = useSelector((state) => state)
    const dispatch = useDispatch()

    console.log(count)
    return (
        <div>
            <button onClick={() => {dispatch(increment())}}>+</button>
            <button onClick={() => {dispatch(incrementTen())}}>+10</button>
            <button onClick={() => {dispatch(decrement())}}>-</button>
            <button onClick={() => {dispatch(decrementTen())}}>-10</button>
            <button onClick={() => {dispatch(reset())}}>reset</button>
            <span>{count}</span>
        </div>
    );
};

export default App;