// ==========All inpupts have single state===================

import { useState } from "react"

const Form2=()=>{

    const [formdata,setFormData] = useState({
        "name":"",
        "email":"",
        "city":"",
        "number":""
    })

    const handleInput=(e)=>{
        let key = e.target.name;
        let value = e.target.value;

        setFormData({
            ...formdata,
            [key]:value
        })
    } 

    console.log(formdata)

       const sub=()=>{
        window.alert("data Submited");
        // setName("");
        // setEmail("");
        // setCity("");
        // setNumber("");
    }
    return(

        <>
        <center>
            <br/><br/>
            <input type="text" value={formdata.name} onChange={handleInput} name="name"
            placeholder="Enter Name"></input>
            <br/><br/>
            <input type="text" value={formdata.email} onChange={handleInput} name="email"
             placeholder="Enter you email"></input>
            <br/><br/>
            <input type="text" value={formdata.city} onChange={handleInput} name="city"
            placeholder="Enter you city"></input>
            <br/><br/>
            <input type="text" value={formdata.number} onChange={handleInput} name="number"
             placeholder="Enter you number"></input>
            <br/><br/>
            <button onClick={sub}>Submit Data</button>

        </center>
        </>
    )
}

export default Form2;
