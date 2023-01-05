import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
// import Alert from './Components/Alert';
// import {
//   BrouseRouter as Router,
//   Switch,
//   Route,
//    Link 
// } from "react-router-dom";







function App() {
  const [mode, setMode] = useState('light'); //weather dark mode is enable or not
  // const [alert, setAlert] = useState(null); //weather dark mode is enable or not
  
  // const showAlert = (message, type)=>{
  //     setAlert({
  //       msg: message,
  //       type: type
  //     })
  // } 
  
  
  
  
  
  const toggleMode =()=>{
    if (mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#455769';
      // setAlert("Dark mode has been enabled", "succes")
    
    }
   else {
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "succes")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title= "Edit It Here"  mode={mode} toggleMode={toggleMode}/>
    {/* <Alert alert= {alert}/> */}
    <div className="container my-3">
     
    <TextForm heading= "What do you think"  mode={mode} />
          
     
        </div>
        
       
       {/* <About/> */}
   </>
);
}



export default App;
