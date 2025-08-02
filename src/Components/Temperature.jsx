import React, { useState } from 'react'
import '../styles/Temperature.css';

export const Temperature = () => {
    const [Temp, setTemp] = useState(10);
    const increment = () => {
      if(Temp < 45){
        setTemp(previous => previous + 1)
  }
}
    const decrement = () => {
      if(Temp > -5){
        setTemp(next => next - 1) 
    }
  }
  return (
    <>
    <h2>Temperature Control App</h2>
    <div className='container'>
    <div className = {Temp > 30 ? "box orange" : Temp > 16? "box brown" : "box"}> {Temp}°c </div>
    <div className='button-group'>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </div>
    </div>
   </>
  );
};
