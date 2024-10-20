import { useNavigate } from "react-router-dom"

import Button from 'react-bootstrap/Button';

const Outer = () => {

    let nav1=useNavigate()

    const btn ={
        fontSize:"30px",
        textAlign:"center", 
        width:"600px" ,
        marginLeft:"450px", 
        marginTop:"150px"
      }      

    return (
        <>
            <div className="d-grid gap-2" 
            style={{textAlign:"center", width:"600px", marginLeft:"450px", marginTop:"250px"}} >
                <Button variant="primary" size="lg" onClick={()=>{nav1("Form1")}} >
                    FORM-1
                </Button></div>
                
            <div style={btn} className="d-grid gap-2">
                <Button variant="secondary" size="lg" onClick={()=>{nav1("Form2")}}>
                    FORM-2
                </Button>
            </div>
        </>
    )
}

export default Outer;