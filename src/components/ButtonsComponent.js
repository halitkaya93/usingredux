import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../reducers/counterSlice";

export default function ButtonsComponent() {
    const dispatch = useDispatch();
    return (
        <div className="container">
            <button type="button" className="btn btn-primary" onClick={() => dispatch(increment())}>Arttır</button>
            <button type="button" className="btn btn-info" onClick={() => dispatch(decrement())}>Azalt</button>
            <button type="button" className="btn btn-warning" onClick={() => dispatch(incrementByAmount(5))}>Arttır 5</button>

        </div>
    )
}