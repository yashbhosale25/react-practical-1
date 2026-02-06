import {  useState } from "react";

export default function Formm() {
    const [data, setData] = useState({});

    const handleChange = e =>
        setData({...data, [e.target.name]: e.target.value});

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input  name="name" onChange={handleChange} />
            <input name="email" onChange={handleChange} />
            <input name="password" onChange={handleChange} />
            <button>Submit</button>
        </form>
    );
}