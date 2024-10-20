
// ==========All inpupta have different state===================

import { useState } from "react";

const Form1=()=>{

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    let obj = {
        "name":name,
        "email":email,
    }
    console.log(obj)

    const sub=()=>{
        window.alert("data Submited");
        setName("");
        setEmail("");
    }
    return(
        <>
        <center>
        <br/><br/>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} 
            placeholder="Enter Name"></input>
        <br/><br/>
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} 
        placeholder="Enter Email"></input>
            <br/><br/>
            <button onClick={sub}> Click to submit data! </button>
        </center>

        </>
    )
}

export default Form1;