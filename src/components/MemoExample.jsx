import React from "react";

function Memoexample({ name }) {
    console.log("Rendering", name);
    return <div>{name}</div>;
}

export default Memoexample;