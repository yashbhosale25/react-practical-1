import  React from "react";

function Button({ onClick }) {
    console.log("Button rerender");
    return <button onClick={onClick}>Click Me</button>
}

export default React.memo(Button);