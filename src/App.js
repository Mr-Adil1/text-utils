import React,{useState} from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from './components/Alert';
import Jscode from './components/Jscode';
import ClassBase from './components/ClassBase';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [alert, setalert] = useState(null)
  const showAlert = (message,type)=>{
    setalert(
      {
        msg: message,
        type : type
      }
    )
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
  const [color, setcolor] = useState()
  const changecol = ()=>{
    color === 'text-anger' ? setcolor('text-success') : setcolor('text-danger')
  }
  return (
    <Router>
      <Navbar title='TextUtils' aboutus='About TextUtils' />
      <Alert alert={alert}/>
      <Routes>
        <Route
         exact path='/'
          element={
            <div className='container my-3'>
              <TextForm heading='Enter The text to analyze below' showAlert={showAlert}/>
              <hr/>
              <Jscode/>
              <hr/>
              <div className='mt-5'>
                <ClassBase color={color} changecol={changecol}/>
              </div>
            </div>
          }
        />
        <Route exact path='/About' element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
