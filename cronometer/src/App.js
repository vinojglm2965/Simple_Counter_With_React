import React from 'react';
//import Crono from './Crono';
import './App.css';


function App (props) {
  
  return(
    
    <>
      <div className='container body'>

        <div className='row center'>

          <div className= 'icon item'>
            <i className='fa fa-clock'></i>
          </div>

          <div className='item'>
            {props.Num1}
          </div>   

          <div className='item'>
             {props.Num2} 
          </div>
          
          <div className='item'>
            {props.Num3} 
          </div>
        
          <div className='item'>
            {props.Num4} 
          </div>
        
          <div className='item'>
            {props.Num5} 
          </div>
        
          <div className='item'>
            {props.Num6}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;