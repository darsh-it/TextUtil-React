import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode,setMode] = useState('light')

  const [alert,setAlert] = useState(null)

  const showAlert = (msg,type)=>{ 
         setAlert({
          msg : msg,
          type: type
         })

         setTimeout(()=>{
          setAlert(null)
         },1500)
  }

  const toggleMode = () => {
     if(mode === 'light')
       {
        setMode('dark')
        document.body.style.backgroundColor = '#29293d'
        document.body.style.color = 'white'
        showAlert("Dark mode is enabled","success")
       }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
      }

  }
  return ( 
    <>
  <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert ={alert} />
       <div className="container">
    <Routes>
      <Route exact path='/' element={<TextForm heading="Enter The text below" showAlert={showAlert}/>}>    
      </Route>
       <Route exact path ='/about'  element={ <About mode= {mode} />}>       
       </Route>
  </Routes>
  </div>
  </Router>
  </>
  );
}

export default App;
