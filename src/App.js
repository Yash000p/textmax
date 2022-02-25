// import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
// import Dark from './components/Dark';
// import {
//   BrowserRouter as Router,
//   Route,
  
//   Routes
// } from "react-router-dom";


function App() {
     const[Mode ,setMode] = useState('light');
     const[alert,setalert] = useState(null);
     const[btn,setbtn] = useState(false);
     const toggle=()=>{
       if(Mode==='light'){
         setMode("dark");
         document.body.style.backgroundColor="black";
         showalert("Dark mode Enable","success");
         
         
        }
        else{
          setMode("light");
          document.body.style.backgroundColor="white";
          showalert("Light mode Enable","success");
             
       }
          
        }
    const showalert=(message,type)=>{
        setalert({
            msg:message,
            type:type
        })
        setTimeout(() => {
          setalert(null);
        },1500);
    }  
    const btnclick=()=>{
      if(btn===true){
        setbtn(false);  
      }
      else{
        setbtn(true);  
      }
    }
  

  return (
   <>
         {/* <Navbar/>
     <Box/> */}
    <Navbar title="TextMax" mode={Mode} toggle={toggle}  btnclick={btnclick} btn={btn} />
    <Alert alert={alert} showalert={showalert}/>
    <Textbox heading="Enter The Text - Convert to uppercase,lowercase..."  mode={Mode} showalert={showalert}/>
   </>
  );
}

export default App;
