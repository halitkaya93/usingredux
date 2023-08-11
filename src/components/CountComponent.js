import React from "react";
import { useSelector } from 'react-redux'

export default function CountComponent() {
    const count = useSelector(state =>state.counter.value)
    return (
        <div>Count : {count}</div>
    )
}