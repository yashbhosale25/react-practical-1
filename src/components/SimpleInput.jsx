import React from "react";
import { useState } from "react";

export default function SimpleInput() { 

    const [value, setValue]= useState("");

    return(
        <input
           value={value}
           onChange={e  => setValue(e.target.value)}
           />
    )
}
