import { useState, useMemo } from "react";

function expensiveCalculation(num) {
    console.log("Running expensive calculation..");
    let result =  0;
    for (let i = 0; i < 1_000_000_000; i++) {
        result += num;
    }
    return result;
}

function MemoComputation() {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    const expensiveValue = useMemo(() => {
        return expensiveCalculation(count);
    }, [count]);

    const themeStyle = {
        backgroundColor:dark ? "#333" : "#eee",
        color: dark ? "#fff" : "#000",
        padding: "20px",
        margineTop: "10px"
    };

    return (
        <>
        <h3>Result: {expensiveValue}</h3>
        <button onClick={() => setCount(count + 1)}>
            Increment Count
        </button>
        <button onClick={() => setDark(!dark)}>
            Toggle Theme
        </button>
        <div style={themeStyle}>
            theme is  {dark ? "Dark" : "Light"}
        </div>
        </>
    );
}
export default MemoComputation;