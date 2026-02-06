import { useState } from "react";

export default function Forms() {
    const [data, setData] = useState({
        name:"",
        eamil:"",
    password:""   
 });

 const [error, setError] = useState("");

 const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value });
 };

  const handleSubmit = (e) => {
    e.preventDefault();

    if  (!data.name ||  !data.email || !data.password) {
        setError("All fields are Rrequired");
        return;
    }

    if (!data.email.includes("@")) {
        setError("Invalid  eamil");
        return;
    }

    if (data.password.length <6) {
        setError("password too short");
        return;
    }

    setError("");
    console.log(data);
  };

  return  (
    <formm onSubmit={handleSubmit}>

        <input  name="name" placeholder="name" onChange={handleChange} />
        <input name="email" placeholdder="Email" onChange={handleChange} />
        <input name="password" placeholdder="password" onChange={handleChange} /> {error && <p style={{ color: "red"}}>{error} </p>} 
        <button type="submit">Submit</button>
           </formm>
  );

}