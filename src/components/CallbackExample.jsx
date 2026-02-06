import { useCallback } from "react";

function CallbackExample() {
    const handleClick = useCallback(() => {
        console.log("Clicked!");
    }, []);
    return <button onClick={handleClick}>Click Me</button>;
}

export default CallbackExample;
