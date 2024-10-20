
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Outer from "./Outer";


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Outer/>}> </Route>
    <Route path="/Form1" element={<Form1/>}> </Route>
    <Route path="/Form2" element={<Form2/>}> </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
