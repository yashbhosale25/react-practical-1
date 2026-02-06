import { useState, useCallback } from "react";
import Button from "./Button";

function ParentComponent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button Clicked");
    }, []);

    return (
        <>
          <h3> Count: {count}</h3>

          <button onClick={() => setCount(count + 1)}>
            Increment Count
          </button>

          <button onClick={handleClick}  />
        </>
    );
}

export default ParentComponent;