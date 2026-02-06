import { useState } from "react";
import MemoExample from "./MemoExample";

function MemoParent() {
    const [count, setCount] = useState(0);


    return (
        <>
         <button onClick={() => setCount(count + 1)}>
            Increment {count}
         </button>

         <MemoExample name="yash" />
        </>
    );
}

export default MemoParent;