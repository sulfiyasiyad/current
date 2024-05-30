import React from "react";
 import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";




function App(){

  
  return(
   
    <div>
      
      <BrowserRouter>
       <Navbar />
       
      <Routes>
       
        
       
        <Route path="" element={<Home />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
     

      </Routes>
      </BrowserRouter>
      
      
     
    </div>
    
  )
  
 
 
  
}

export default App;



