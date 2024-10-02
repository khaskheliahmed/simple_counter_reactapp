
import { useState } from 'react';
import './App.css'

function App() {
  

let [counter , setcounter ]= useState(12)

  // let counter = 15;

  const addvalue = () =>{
   

   if (counter < 20){
    console.log("value add" , counter)
    counter = counter +1;
       
    setcounter(counter)
   }
  }

  const removeValue = () =>{

  

    if( counter >= 1){
      console.log("remove value ", counter)
      counter = counter - 1;
    setcounter(counter) 
    }
  }
  

  return (
    <>
    <h1>hello chaa hall bhaw </h1>
     <h2>counter value : {counter}</h2>
     
   
    <button className='btn' onClick={addvalue} >addValue</button>
    <button className='btn2'onClick={removeValue} >remove Value</button>
    </>
  )
}

export default App
